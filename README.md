# ngx-lipsum

## Usage & Defaults

All generated texts are based on the [`lorem-ipsum` NPM package](https://www.npmjs.com/package/lorem-ipsum#using-the-function) and it's configuration defined by the `ILoremIpsumParams` interface.
In most cases this package uses the defaults by passing no further option / an empty object.

### Get started: Import the module

Before you can use **ngx-lipsum**, you have to import the `NgxLipsumModule` in your app:

```ts
/* ... */
import { NgxLipsumModule } from 'ngx-lipsum';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLipsumModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now you can use either the `LipsumService`, `ngx-lipsum`-Component or `lipsum`-Directive.

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
