# @nowzoo/ngx-sign-in-redirect

A service and component for displaying app messages.

[Demo](https://nowzoo.github.io/ngx-sign-in-redirect/)
|
[Demo Source Code](https://github.com/nowzoo/ngx-sign-in-redirect/tree/master/projects/ngx-sign-in-redirect-demo/src/app)

[Documentation](https://nowzoo.github.io/ngx-sign-in-redirect/docs/)



## Quick start

```bash
npm i @nowzoo/ngx-sign-in-redirect save
```

Import the module...
```typescript
import { NgxSignInRedirectModule } from '@nowzoo/ngx-sign-in-redirect';
@NgModule({
  imports: [
    NgxSignInRedirectModule.forRoot()
  ],
})
export class AppModule { }
```



Use the service in your components...
```typescript
import { NgxSignInRedirectService } from '@nowzoo/ngx-sign-in-redirect';

export class MyGatedComponent implements OnInit {

  constructor(
    private svc: NgxSignInRedirectService,
    private auth: SomeAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (! this.auth.signedIn) {
      this.svc.redirect = '/my/gated/path';
      this.router.navigate(['/sign-in']);
    }
  }

}

export class MySignInComponent implements OnInit {

  constructor(
    private svc: NgxSignInRedirectService,
    private auth: SomeAuthService,
  ) { }

  signIn(creds: any) {
    this.auth.signIn(creds)
      .then(() => {
        this.svc.redirectOnSignIn();
      })
  }

}

```

## Contributing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

`git clone https://github.com/nowzoo/ngx-sign-in-redirect.git`

The library code is in `projects/ngx-sign-in-redirect`.

The demo is in `projects/ngx-sign-in-redirect-demo`

Build the library: `ng build ngx-sign-in-redirect`

Serve the demo locally:  `ng serve ngx-sign-in-redirect-demo`



### Unit tests

Run `ng test ngx-sign-in-redirect` to execute the unit tests via [Karma](https://karma-runner.github.io).

The library tests can also be run with Wallaby. Select the wallaby.js file in `projects/ngx-sign-in-redirect`;
