import { NgModule } from '@angular/core';
import { MissingTranslationHandler } from 'ng2-translate/ng2-translate';

import {
    JhipsterSharedLibsModule,
    TruncateCharactersPipe,
    TruncateWordsPipe,
    CapitalizePipe,
    FilterPipe,
    OrderByPipe,
    JhiTranslate,
    JhiMissingTranslationHandler,
    JhiLanguageService,
    FindLanguageFromKeyPipe,
    KeysPipe,
    MaxbytesValidator,
    MinbytesValidator,
    ShowValidationDirective,
    JhiItemCountComponent,
    alertServiceProvider,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiSortDirective,
    JhiSortByDirective,
    PaginationUtil,
    ParseLinks,
    DataUtils,
    DateUtils,
    EventManager
} from './';

@NgModule({
    imports: [
        JhipsterSharedLibsModule
    ],
    declarations: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslate,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        JhiItemCountComponent,
        JhiSortDirective,
        JhiSortByDirective,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidationDirective
    ],
    providers: [
        JhiLanguageService,
        { provide: MissingTranslationHandler, useClass: JhiMissingTranslationHandler },
        alertServiceProvider(),
        PaginationUtil,
        ParseLinks,
        DataUtils,
        DateUtils,
        EventManager
    ],
    exports: [
        JhipsterSharedLibsModule,
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslate,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        JhiItemCountComponent,
        JhiSortDirective,
        JhiSortByDirective,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidationDirective
    ]
})
export class JhipsterSharedCommonModule {}
