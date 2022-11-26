# ngx-lipsum

<a href="https://www.buymeacoffee.com/dkoppenhagen" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

[![npm](https://img.shields.io/npm/v/ngx-lipsum.svg)](https://www.npmjs.com/package/ngx-lipsum)
[![npm](https://img.shields.io/npm/l/ngx-lipsum.svg)](https://www.npmjs.com/package/ngx-lipsum)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[![npm](https://img.shields.io/npm/dw/ngx-lipsum.svg)](https://www.npmjs.com/package/ngx-lipsum)
[![npm](https://img.shields.io/npm/dm/ngx-lipsum.svg)](https://www.npmjs.com/package/ngx-lipsum)
[![npm](https://img.shields.io/npm/dy/ngx-lipsum.svg)](https://www.npmjs.com/package/ngx-lipsum)
[![npm](https://img.shields.io/npm/dt/ngx-lipsum.svg)](https://www.npmjs.com/package/ngx-lipsum)

Easily use lorem-ipsum dummy texts in your angular app as directive, component or by using a service.

![ngx-lipsum Logo](https://github.com/d-koppenhagen/ngx-lipsum/raw/main/assets/lipsum-logo.svg)

## Usage & Defaults

All generated texts are based on the [`lorem-ipsum` NPM package](https://www.npmjs.com/package/lorem-ipsum#using-the-function) and it's configuration defined by the `ILoremIpsumParams` interface.
In most cases this package uses the defaults by passing no further option / an empty object.

### Service and Standalone Component / Directive

This package provides:

- the `LipsumService`
- the `ngx-lipsum`-Component that can be used as a standalone Component
- the `lipsum`-Directive which is also exported as standalone Directive

### Directive Usage

Using the `lipsum`-Directive allows you to fill most HTML Elements with _lorem ipsum_ content (some won't make sense like `video`, `audio`, `iframe`, etc.).
By default the generated text will simply be inserted.
The defaults here depending on the target HTML-Element. You can find them [at the top of the implementation ](https://github.com/d-koppenhagen/ngx-lipsum/tree/main/projects/ngx-lipsum/src/lib/lipsum.directive.ts)

```html
<!-- input elements (text is bound to `value`) -->
<textarea [lipsum]></textarea>
<input [lipsum]="{ count: 10, unit: 'words' }" />
<!-- with custom config -->

<!-- list elements (`li`-child will automatically be created for each paragraph) -->
<ul [lipsum]></ul>
<ol [lipsum]="{ count: 20, unit: 'paragraphs' }"></ol>
<!-- with custom config -->

<!-- common elements (text is bound to `innerText`) -->
<li [lipsum]></li>
<p [lipsum]="{ count: 40, unit: 'sentences' }"></p>
<!-- with custom config -->
<a [lipsum]></a>
```

### Component Usage

You can use the `ngx-lipsum`-Component in your template and pass through an optional configuration object as `config` input property binding.

```html
<!-- using defaults -->
<ngx-lipsum></ngx-lipsum>

<!-- using custom config -->
<ngx-lipsum [config]="{ count: 5, unit: 'paragraphs' }"></ngx-lipsum>
```

### Service usage

When you want to use the service to generate a _lorem ipsum_ text in your classes, you need to inject the service and call the `get`-method to retrieve the text.
You can pass through any config from the [`lorem-ipsum` NPM package](https://www.npmjs.com/package/lorem-ipsum#using-the-function).

```ts
import { Component } from '@angular/core';
import { LipsumService } from 'ngx-lipsum';

@Component({
  selector: 'my-component',
  template: '<span>{{ lipsumText }}</span>',
})
export class MyComponent {
  public lipsumText: string;
  constructor(lipsum: LipsumService) {
    this.lipsumText = lipsum.get(/* { count: 3, unit: 'sentences' } */);
  }
}
```
