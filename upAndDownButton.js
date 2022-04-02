(function () {
    class UpAndDownButtonPanel extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            this.setStyle(style);
            this.shadowRoot.appendChild(style);

            this.root = document.createElement('div');
            this.shadowRoot.appendChild(this.root);
            this.root.innerHTML = /*html*/ `
            <button>▲</button>
            <button>▼</button>
        `;
            let btns = this.root.getElementsByTagName('button');
            btns[0].onclick = this.click.bind(this);
            btns[1].onclick = this.click.bind(this);
            this.upBtn = btns[0];
        }

        setStyle(style) {
            style.innerText = /*css*/`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 2rem;                    
                }
            `;
        }

        click(event) {
            if (!this.onclick) return;
            var source = event.target || event.srcElement;
            let appEvent = new CustomEvent('up-or-down-click', {
                bubbles: true,
                cancelable: true, 
                delta: source === this.upBtn ? 1 : -1,
            });
            document.dispatchEvent(appEvent);
        }
    }

    customElements.define('up-and-down-buttons-panel', UpAndDownButtonPanel);
})();