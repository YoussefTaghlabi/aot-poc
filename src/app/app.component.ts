import { Component } from '@angular/core';

@Component({
    selector: 'c1-web-app',
    styleUrls: ['app.component.scss'],
    template: `
    <div>
        <p class="sample--color-blue">SCSS Sample</p>
        <c1-web-example></c1-web-example>
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {}
