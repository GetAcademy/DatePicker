(function () {
    class IntegerInput extends TerjeElement {
        constructor() {
            super();
            this.setStyle(this.getStyle());

        }

        connectedCallback() {
            this.min = this.getAttribute('min');
            this.max = this.getAttribute('max');
            this.value = this.getAttribute('value');
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
            console.log(this.value);
            this.value = Math.min(Math.max(this.value + delta, this.min), this.max);            
            console.log(this.value);
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