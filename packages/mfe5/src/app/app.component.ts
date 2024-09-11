import 'zone.js';
import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {bootstrapApplication} from "@angular/platform-browser";
import {appConfig} from "./app.config";
import {
  BASE_PATH_TOKEN,
  ButtonComponent,
  IconComponent,
  InputComponent, OptionComponent, SelectComponent,
  TagComponent,
  TooltipDirective
} from "@epd/pattern-library";

export const bootstrap = (element: HTMLElement) => {
  return bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
};
export const Run = bootstrap;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, TagComponent, IconComponent, InputComponent, TooltipDirective, SelectComponent, OptionComponent],
  providers: [
    {
      provide: BASE_PATH_TOKEN,
      useValue: 'http://localhost:4201/assets'
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'Angular MFE';
}
