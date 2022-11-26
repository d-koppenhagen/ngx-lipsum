import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { LipsumService } from './lipsum.service';
import { ILoremIpsumParams } from 'lorem-ipsum';

const SHORT_EL_DEFAULTS: ILoremIpsumParams = {
  units: 'words',
  count: 4,
};
const SENTENCE_DEFAULTS: ILoremIpsumParams = {
  units: 'sentences',
  count: 1,
};
const PARAGRAPHS_DEFAULTS: ILoremIpsumParams = {
  units: 'paragraphs',
  count: 5,
};
const CONFIG_MAP = new Map<string, ILoremIpsumParams>([
  ['a', SHORT_EL_DEFAULTS],
  ['article', PARAGRAPHS_DEFAULTS],
  ['aside', PARAGRAPHS_DEFAULTS],
  ['b', SHORT_EL_DEFAULTS],
  ['button', SHORT_EL_DEFAULTS],
  ['caption', SENTENCE_DEFAULTS],
  ['cite', SENTENCE_DEFAULTS],
  ['code', SENTENCE_DEFAULTS],
  ['del', SHORT_EL_DEFAULTS],
  ['details', SENTENCE_DEFAULTS],
  ['dialog', SENTENCE_DEFAULTS],
  ['div', PARAGRAPHS_DEFAULTS],
  ['em', SHORT_EL_DEFAULTS],
  ['figcaption', SENTENCE_DEFAULTS],
  ['footer', PARAGRAPHS_DEFAULTS],
  ['h1', SHORT_EL_DEFAULTS],
  ['h2', SHORT_EL_DEFAULTS],
  ['h3', SHORT_EL_DEFAULTS],
  ['h4', SHORT_EL_DEFAULTS],
  ['h5', SHORT_EL_DEFAULTS],
  ['h6', SHORT_EL_DEFAULTS],
  ['header', SENTENCE_DEFAULTS],
  ['input', SHORT_EL_DEFAULTS],
  ['label', SHORT_EL_DEFAULTS],
  ['li', SENTENCE_DEFAULTS],
  ['main', PARAGRAPHS_DEFAULTS],
  ['nav', SENTENCE_DEFAULTS],
  [
    'ol',
    { ...PARAGRAPHS_DEFAULTS, paragraphLowerBound: 1, paragraphUpperBound: 1 },
  ],
  ['option', SHORT_EL_DEFAULTS],
  ['output', SENTENCE_DEFAULTS],
  ['p', { ...PARAGRAPHS_DEFAULTS, count: 1 }],
  ['pre', SENTENCE_DEFAULTS],
  ['s', SHORT_EL_DEFAULTS],
  ['section', PARAGRAPHS_DEFAULTS],
  ['small', SHORT_EL_DEFAULTS],
  ['span', SHORT_EL_DEFAULTS],
  ['strong', SHORT_EL_DEFAULTS],
  ['sub', SHORT_EL_DEFAULTS],
  ['summary', SENTENCE_DEFAULTS],
  ['sup', SHORT_EL_DEFAULTS],
  ['td', SHORT_EL_DEFAULTS],
  ['template', SENTENCE_DEFAULTS],
  ['textarea', SENTENCE_DEFAULTS],
  ['th', SHORT_EL_DEFAULTS],
  [
    'ul',
    { ...PARAGRAPHS_DEFAULTS, paragraphLowerBound: 1, paragraphUpperBound: 1 },
  ],
]);

@Directive({
  selector: '[lipsum]',
  standalone: true,
})
export class LipsumDirective implements OnInit {
  @Input('lipsum') config?: ILoremIpsumParams = {};

  constructor(
    readonly el: ElementRef<any>,
    private renderer: Renderer2,
    private lipsum: LipsumService,
  ) {}

  get params(): ILoremIpsumParams {
    return {
      ...(CONFIG_MAP.get(this.el.nativeElement.localName) || {}),
      ...this.config,
    };
  }

  ngOnInit() {
    const el = this.el.nativeElement;
    if (['input', 'textarea', 'output'].includes(el.localName)) {
      this.setLipsumForInputElements(this.el);
    } else if (['ul', 'ol'].includes(el.localName)) {
      this.setLipsumForListElements(this.el);
    } else {
      this.setLipsumForCommonElements(this.el);
    }
  }

  private setLipsumForInputElements(
    ref: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    ref.nativeElement.value = this.lipsum.get(this.params);
  }

  private setLipsumForListElements(
    ref: ElementRef<HTMLOListElement | HTMLLIElement>,
  ) {
    const paragraphs = this.lipsum.get(this.params).split('\n');
    paragraphs.forEach(p => {
      const liEl = this.renderer.createElement('li');
      liEl.innerText = p;
      ref.nativeElement.appendChild(liEl);
    });
  }

  private setLipsumForCommonElements(ref: ElementRef<HTMLElement>) {
    ref.nativeElement.innerText = this.lipsum.get(this.params);
  }
}
