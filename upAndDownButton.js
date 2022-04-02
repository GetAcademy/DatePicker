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
            <button delta="1">▲</button>
            <button delta="-1">▼</button>
        `;
            let btns = this.root.getElementsByTagName('button');
            btns[0].onclick = this.click.bind(this);
            btns[1].onclick = this.click.bind(this);
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
            const source = event.target || event.srcElement;
            const delta = parseInt(source.getAttribute('delta'));
            let arg = {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: { delta },
            };
            let appEvent = new CustomEvent('up-or-down-click', arg);
            this.dispatchEvent(appEvent);
        }
    }

    customElements.define('up-and-down-buttons-panel', UpAndDownButtonPanel);
})();