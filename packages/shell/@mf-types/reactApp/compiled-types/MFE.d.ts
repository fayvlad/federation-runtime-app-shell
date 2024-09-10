import ReactDOM from 'react-dom/client';
export interface MFE {
    name: string;
    element: ReactDOM.Root;
    mount: (anchor: Element, data: any) => void;
    bootstrap: (anchor: Element, data: any) => void;
    destroy: () => void;
}
export declare const MFE: {
    name: string;
    element: HTMLElement;
    mount(anchor: Element, data: any): void;
    bootstrap(anchor: Element, data: any): void;
    destroy(): void;
};
