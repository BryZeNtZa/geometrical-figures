import { Type } from '@angular/core';
import { mount, MountConfig } from 'cypress/angular';
import { AppComponent } from "src/app/app.component";
import { UnitsService } from "src/app/units.service";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof customMount
    }
  }
}

const declarations = [AppComponent, UnitsService];

function customMount<T>(component: string | Type<T>, config?: MountConfig<T>) {
  if (!config) {
    config = { declarations }
  } else {
    config.declarations = [...(config?.declarations || []), ...declarations]
  }
  return mount<T>(component, config)
}

Cypress.Commands.add('mount', customMount)
