import { Directive, OnInit, ElementRef, Renderer} from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';

@Directive({
    selector: '[active-menu]',
    inputs: ['language:active-menu']
})
export class ActiveMenuDirective implements OnInit {
    language: string;

    constructor(private el: ElementRef, private renderer: Renderer, private translateService: TranslateService) {}

    ngOnInit() {
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
         this.updateActiveFlag(event.lang);
      });
      this.updateActiveFlag(this.translateService.currentLang);
    }

    updateActiveFlag(selectedLanguage) {
      if (this.language === selectedLanguage) {
          this.renderer.setElementClass(this.el.nativeElement, 'active', true);
      } else {
          this.renderer.setElementClass(this.el.nativeElement, 'active', false);
      }
    }
}
