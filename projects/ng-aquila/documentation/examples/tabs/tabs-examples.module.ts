import { NxIconModule } from '@aposin/ng-aquila/icon';
import { RouterModule } from '@angular/router';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';

import { NgModule } from '@angular/core';
import { TabsAppearanceExampleComponent } from './tabs-appearance/tabs-appearance-example';
import { TabsAutoManualSelectExampleComponent } from './tabs-auto-manual-select/tabs-auto-manual-select-example';
import { TabsBasicExampleComponent } from './tabs-basic/tabs-basic-example';
import { TabsDisabledExampleComponent } from './tabs-disabled/tabs-disabled-example';
import { TabsDynamicExampleComponent } from './tabs-dynamic/tabs-dynamic-example';
import { TabsInjectionTokenExampleComponent } from './tabs-injection-token/tabs-injection-token-example';
import { TabsLazyExampleComponent } from './tabs-lazy/tabs-lazy-example';
import { TabsNavBarExampleComponent } from './tabs-nav-bar/tabs-nav-bar-example';
import { TabsNavBarAppearanceExampleComponent } from './tabs-nav-bar-appearance/tabs-nav-bar-appearance-example';
import { TabsNavBarInjectionTokenExampleComponent } from './tabs-nav-bar-injection-token/tabs-nav-bar-injection-token-example';
import { TabsNegativeExampleComponent } from './tabs-negative/tabs-negative-example';
import { TabsOutputEventsExampleComponent } from './tabs-output-events/tabs-output-events-example';
import { TabsResponsiveExampleComponent } from './tabs-responsive/tabs-responsive-example';
import { TabsStylingExampleComponent } from './tabs-styling/tabs-styling-example';
import { TabsTemplateExampleComponent } from './tabs-template/tabs-template-example';
import { ExamplesSharedModule } from '../examples-shared.module';

const EXAMPLES = [
  TabsAppearanceExampleComponent,
  TabsAutoManualSelectExampleComponent,
  TabsBasicExampleComponent,
  TabsDisabledExampleComponent,
  TabsDynamicExampleComponent,
  TabsInjectionTokenExampleComponent,
  TabsLazyExampleComponent,
  TabsNavBarExampleComponent,
  TabsNavBarAppearanceExampleComponent,
  TabsNavBarInjectionTokenExampleComponent,
  TabsNegativeExampleComponent,
  TabsOutputEventsExampleComponent,
  TabsResponsiveExampleComponent,
  TabsStylingExampleComponent,
  TabsTemplateExampleComponent
];

@NgModule({
  imports: [
    NxTabsModule,
    RouterModule,
    NxIconModule,
    ExamplesSharedModule
  ],
  declarations: [EXAMPLES],
  exports: [EXAMPLES]
})
export class TabsExamplesModule {
  static components() {
    return {
      'tabs-appearance': TabsAppearanceExampleComponent,
      'tabs-auto-manual-select': TabsAutoManualSelectExampleComponent,
      'tabs-basic': TabsBasicExampleComponent,
      'tabs-disabled': TabsDisabledExampleComponent,
      'tabs-dynamic': TabsDynamicExampleComponent,
      'tabs-injection-token': TabsInjectionTokenExampleComponent,
      'tabs-lazy': TabsLazyExampleComponent,
      'tabs-nav-bar': TabsNavBarExampleComponent,
      'tabs-nav-bar-appearance': TabsNavBarAppearanceExampleComponent,
      'tabs-nav-bar-injection-token': TabsNavBarInjectionTokenExampleComponent,
      'tabs-negative': TabsNegativeExampleComponent,
      'tabs-output-events': TabsOutputEventsExampleComponent,
      'tabs-responsive': TabsResponsiveExampleComponent,
      'tabs-styling': TabsStylingExampleComponent,
      'tabs-template': TabsTemplateExampleComponent,
    };
  }
}
