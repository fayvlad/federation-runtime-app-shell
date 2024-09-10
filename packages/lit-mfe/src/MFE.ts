import { html, render } from 'lit-html';
import { MyElement } from "./my-element";
import { RootPart } from 'lit';

export interface MFE {
    name: string,
    element: Element;
    mount: (anchor: Element, data: any) => void;
    bootstrap: (anchor: Element, data: any) => void;
    destroy: () => void;
}

export const MFE = {
    name: 'litMfe',
    rootElement: document.createElement('div'),
    mount(anchor: Element, data: any) {
        if (!customElements.get('my-element')) customElements.define('my-element', MyElement);
        const template = html`<my-element .data=${data}></my-element>`;
        anchor.appendChild(this.rootElement);
        render(template, this.rootElement);
    },
    bootstrap(anchor: Element, data: any) {
        if (!anchor.hasChildNodes()) this.mount(anchor, data);
    },
    destroy() {
        render(html``, this.rootElement);
        if (this.rootElement.parentNode) {
            this.rootElement.parentNode.removeChild(this.rootElement);
        }
    },
};