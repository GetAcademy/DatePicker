(function () {
    class UpAndDownButtonPanel extends TerjeElement {
        constructor() {
            super();
            this.setStyle(this.getStyle());
            this.root.innerHTML = /*html*/ `
                <button delta="1">▲</button>
                <button delta="-1">▼</button>
            `;
            let btns = this.root.getElementsByTagName('button');
            btns[0].onclick = this.click.bind(this);
            btns[1].onclick = this.click.bind(this);
        }

        getStyle() {
            return /*css*/`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 2rem;
                }
                button{
                    font-size: 75%;
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