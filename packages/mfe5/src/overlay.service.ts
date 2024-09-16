import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {OverlayContainer} from "@angular/cdk/overlay";
import {Platform} from "@angular/cdk/platform";

@Injectable({
  providedIn: 'root'
})
export class OverlayService extends OverlayContainer {
  private rootElement!: HTMLElement;

  constructor(
    @Inject(DOCUMENT) _document: any,
    platform: Platform
  ) {
    super(_document, platform);
    this.rootElement = this._document.querySelector('app-root')!;
  }

  protected override _createContainer(): void {
    const containerClass = 'cdk-overlay-container';
    const container = this._document.createElement('div');
    container.classList.add(containerClass);
    container.classList.add('mfe-shadow-root-overlay');

    this.rootElement.shadowRoot?.appendChild(container);
    this._containerElement = container;
  }
}
