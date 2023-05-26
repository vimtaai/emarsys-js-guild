class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.name = this.getAttribute('name');
    this.render();
    this.shadowRoot.querySelector('slot').addEventListener('slotchange', (event) => {
      console.log(event);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ::slotted(button) {
          background: yellow;
        }
      </style>
      <h1 part="title">This is my component: ${this.name}</h1>
      <slot name="button" part="button"></slot>
      <slot name="footnote"></slot>
      <div>End of component</div>
    `;
  }
}

customElements.define('my-component', MyComponent);
