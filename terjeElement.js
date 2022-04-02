class TerjeElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        this.shadowRoot.appendChild(style);
        this.styleTag = style;

        this.root = document.createElement('div');
        this.shadowRoot.appendChild(this.root);
    }

    setStyle(style){
        this.styleTag.innerText = style;
    }
}
