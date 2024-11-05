import 'zone.js';
import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgZone, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  @ViewChild('lintMfeAG', { read: ElementRef, static: true }) lintMfe!: ElementRef;
  @ViewChild('reactMfeAG', { read: ElementRef, static: true }) reactMfe!: ElementRef;
  title = 'Angular MFE';

  constructor(
    private ngZone: NgZone,
  ) {
    // uncomment just the line below this for infinite loop
    this.loadNGRemote();
    // uncomment these to see the other MFEs
    this.loadLitRemote();
    this.loadReactRemote();
  }

  loadNGRemote() {
    loadRemote('ngChild/ChildComponent').then((ngChild) => {
      this.ngZone.runOutsideAngular(() => {
        // @ts-ignore
        ngChild?.Run()
      })
    });
  }

  // uncomment to try lit MFE
  loadLitRemote() {
    loadRemote('litApp/MFE').then((remote) => {
      console.log('Lit MFE');
      console.log(remote);
      // @ts-ignore
      remote.MFE!.bootstrap(this.lintMfe.nativeElement);
    });
  }

  // uncomment to try react MFE
  loadReactRemote() {
    loadRemote('reactApp/MFE').then((remote) => {
      console.log('React MFE');
      console.log(remote);
      // @ts-ignore
      remote.MFE!.bootstrap(this.reactMfe.nativeElement);
    });
  }
}

export const bootstrap = (element: HTMLElement) => {
  init({
    name: 'mfe5',
    remotes: [
      {
        name: 'ngChild',
        entry: 'http://localhost:4202/mf-manifest.json',
      },
      // uncomment these to see the other MFEs
      {
        name: 'litApp',
        entry: 'http://localhost:8002/mf-manifest.json',
      },
      {
        name: 'reactApp',
        entry: 'http://localhost:8001/mf-manifest.json',
      },
    ],
  });
  return bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
};

export const Run = bootstrap;
