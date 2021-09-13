# ngx-lipsum developer notes

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-lipsum` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-lipsum`.

> Note: Don't forget to add `--project ngx-lipsum` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-lipsum` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

1. Bump up the version in `projects/ngx-lipsum/package.json` when changes are done.
2. Add a section to `CHANGELOG.md`.
3. Build the library: `ng build ngx-lipsum`.
4. Go to the dist folder `cd dist/ngx-lipsum` and run `npm publish`.
5. Go back to project root `cd ../../` and adjust the version of `ngx-lipsum` in the `package.json`.
6. run `npm i`
7. Consider updating the gh-pages example project running `npm run publish-gh-pages`
8. commit and push to Github.

## Running unit tests

Run `ng test ngx-lipsum` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
