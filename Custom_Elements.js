alert("Raul");

class Centre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align: center;">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", Centre);

class color extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="color: red;">${this.innerHTML}</div>`;
    }
}

customElements.define("x-red", color);