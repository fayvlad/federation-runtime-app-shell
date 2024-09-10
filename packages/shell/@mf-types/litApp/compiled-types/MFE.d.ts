export interface MFE {
    name: string;
    element: Element;
    mount: (anchor: Element, data: any) => void;
    bootstrap: (anchor: Element, data: any) => void;
    destroy: () => void;
}
export declare const MFE: {
    name: string;
    rootElement: HTMLDivElement;
    mount(anchor: Element, data: any): void;
    bootstrap(anchor: Element, data: any): void;
    destroy(): void;
};
