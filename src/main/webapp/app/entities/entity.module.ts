import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { MyappSharedModule } from '../shared';

let ENTITY_STATES = [

];

@NgModule({
    imports: [
        MyappSharedModule,
        UIRouterModule.forChild({ states: ENTITY_STATES })
    ],
    declarations: [

    ],
    entryComponents: [

    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyappEntityModule {}
