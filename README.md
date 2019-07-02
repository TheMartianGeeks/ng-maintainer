[![contributors](https://img.shields.io/github/contributors/TheMartianGeeks/ng-container.svg)](https://github.com/badges/shields/graphs/contributors)
[![npm version](https://badge.fury.io/js/ng-maintainer.svg)](https://badge.fury.io/js/ng-maintainer)

# ng-maintainer

When your application is in maintenance mode, a custom view will be displayed for all requests into your application.

# Table of contents

Some functionality is missing visit wiki-page

- [Installation](#installation)
- [Configuration](#configuration)
- [Parameters](#parameters)
- [Consuming library](#consuming-library)
- [Development](#development)
- [License](#license)

## Installation

To install this library, run :

```bash
$ npm install ng-maintainer --save
```

## Configuration

This module allows you to act on certain things, such as the page title, the body title, the image and a brief description.

First of all, import the interface that will allow you to better adjust the configuration parameters.

```typescript
import { NgMaintainerConfig } from 'ng-maintainer';
```

For the following you must define if your application is in maintenance mode.

```typescript
const config: NgMaintainerConfig = {
  maintainerMode: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaintainerModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Parameters

the different parameters are

### maintainerMode `(boolean)`
This parameter is used to activate the maintenance mode.

### pageTitle `(string)`
If you want to change the title of the page at the title tag.

### title `(string)`
To give a different title to a page in construction or maintenance please use this parameter.

### description `(string)`
The description part allows to give more information to the user.

### image `(string)`
You want to use a different image than the default one on the page, this is where it happens.

## Consuming library

You can import library in any Angular application by running:

```bash
$ npm install ng-maintainer --save
```

and then from your Angular AppModule:

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
// Import your library
import { NgMaintainerModule } from 'ngx-maintainer';
 
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

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaintainerModule, NgMaintainerConfig } from 'ng-maintainer';

const config: NgMaintainerConfig = {
  maintainerMode: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaintainerModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now in your your `app.component.ts`

```typescript
import { Component } from '@angular/core';
import {NgMaintainerService} from 'ng-maintainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-maintenance';

  constructor(private ngMaintainerService: NgMaintainerService) {
    this.ngMaintainerService.listenNavigation();
  }
}
```

## Development

## License

MIT © [Martian Geeks](mailto:contact@gmail.com)
