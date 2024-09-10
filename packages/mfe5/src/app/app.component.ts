import 'zone.js';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {bootstrapApplication} from "@angular/platform-browser";
import {appConfig} from "./app.config";

export const bootstrap = (element: HTMLElement) => {
  return bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
};
export const Run = bootstrap;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Angular MFE';
}
