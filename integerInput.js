(function () {
    class IntegerInput extends TerjeElement {
        constructor() {
            super();
            this.setStyle(this.getStyle());
        }

        connectedCallback() {
            this.min = parseInt(this.getAttribute('min'));
            this.max = parseInt(this.getAttribute('max'));
            this.value = parseInt(this.getAttribute('value'));
            console.log(this.value, this.min, this.max);
            this.root.innerHTML = /*html*/ `
                <input type="number" min="${this.min}" max="${this.max}" step="1" value="${this.value}" />
                <up-and-down-buttons-panel></up-and-down-buttons-panel>
            `;
            this.myInput = this.root.getElementsByTagName('input')[0];
            let myTag = this.root.getElementsByTagName('up-and-down-buttons-panel')[0];
            myTag.addEventListener('up-or-down-click', this.onclick.bind(this));
        }

        onclick(event) {
            const delta = event.detail.delta;
            this.value = Math.min(Math.max(this.value + delta, this.min), this.max);            
            this.myInput.value = this.value;
        }

        getStyle() {
            return /*css*/`
                div{
                    display: flex;
                    flex-direction: row;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                /* Firefox */
                input[type=number] {
                    -moz-appearance: textfield;
                }
            `;
        }
    }

    customElements.define('integer-input', IntegerInput);
})();