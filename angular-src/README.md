# ApophisBunkerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### FAKE BACKEND
The fake backend is defined in `src\backend-mock`.
All required data & users for auth are defined in here. See: data & auth folders.
Please define data in data folder and api endpoint in `interceptor.ts` for any future api.


### User roles based navigation
Navigation is configured in `src\environments\navigation.config.ts` based on user roles.
The pages based on user roles are defiend under `src\app\pages\dashboard`.

### Sidebars
Sidebars are usign the `sidebars.service` to open & close the main sidebar.
Please define the sidebars under `src\app\components\sidebar\editors` and update `src\app\components\sidebar\sidebar.component.html` with the additional logic.
