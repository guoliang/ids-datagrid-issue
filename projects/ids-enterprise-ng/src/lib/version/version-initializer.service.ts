import { Injectable } from '@angular/core';

import { version } from '../../version.json';

/**
 * Initialise the locale service BEFORE the root application component is
 * loaded.  Simply add the module to the root module, and the initialiser
 * will be automatically added.
 */
@Injectable({
  providedIn: 'root'
})
export class SohoVersionInitializerService {
  private readonly VERSION_ATTR_NAME = 'data-ids-enterprise-ng-version';

  /**
   * Initializes the version attribute.
   */
  initialize() {
    $('html').attr(this.VERSION_ATTR_NAME, version);
  }
}

export function SohoVersionInitializerFactory(service: SohoVersionInitializerService) {
    return () => service.initialize();
}
