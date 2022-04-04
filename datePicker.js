(function () {
    class DatePicker extends TerjeElement {
        constructor() {
            super();
            this.setStyle(this.getStyle());
            this.date = new Date();
            let day = this.date.getDate();
            let month = this.date.getMonth() + 1;
            let year = this.date.getYear() + 1900;
            this.root.innerHTML = /*html*/ `
                <integer-input min="1" max="31" value="${day}"></integer-input>
                <integer-input min="1" max="12" value="${month}"></integer-input>
                <integer-input min="2022" max="2100" value="${year}"></integer-input>                
            `;            
        }

        getStyle() {
            return /*css*/`
                div {
                    display: flex;
                    flex-direction: row;
                }
            `;
        }
    }

    customElements.define('date-picker', DatePicker);
})();