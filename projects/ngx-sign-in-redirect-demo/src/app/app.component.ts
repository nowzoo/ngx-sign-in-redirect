import { Component } from '@angular/core';
import { NgxSignInRedirectService } from '@nowzoo/ngx-sign-in-redirect';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  inputRedirect = '';
  constructor(
    public service: NgxSignInRedirectService
  ) {}


  setRedirect() {
    this.service.redirect = this.inputRedirect;
  }
}
