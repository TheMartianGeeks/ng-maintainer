# Ng Maintainer

When your application is in maintenance mode, a custom view will be displayed for all requests into your application.

## Documentation and examples

### Table of contents

Some functionality is missing visit wiki-page

1. Installation
2. Consuming library
3. Development
4. License

#### Installation

To install this library, run :

`$ npm install ng-maintainer --save`

#### Consuming library

You can import library in any Angular application by running:

`$ npm install ng-maintainer --save`

and then from your Angular AppModule:

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
// Import your library
import { NgxPermissionsModule } from 'ngx-permissions';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
 
    // Specify your library as an import
     NgMaintainerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

SharedModule

If you use a SharedModule that you import in multiple other feature modules, you can export the NgxPermissionsModule to make sure you don't have to import it in every module.

``` typescript
@NgModule({
    exports: [
        CommonModule,
        NgMaintainerModule
    ]
})
export class SharedModule { }
```

Usage in templates
```
```

#### Development

#### Licence
