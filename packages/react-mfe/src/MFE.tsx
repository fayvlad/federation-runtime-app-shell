import ReactDOM from 'react-dom/client';
import { App } from "./App";

export interface MFE {
    name: string,
    element: ReactDOM.Root;
    mount: (anchor: Element, data: any) => void;
    bootstrap: (anchor: Element, data: any) => void;
    destroy: () => void;
}

export const MFE = {
    name: 'reactMfe',
    element: document.createElement('reactRoot'),
    mount(anchor: Element, data: any) {
        const root = ReactDOM.createRoot(anchor);
        root.render(<App {...data} />);
    },
    bootstrap(anchor: Element, data: any) {
        this.mount(anchor, data);
    },
    destroy() {
        if (this.element) {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }
    },
};