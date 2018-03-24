import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import {inject} from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let sanitizer: DomSanitizer;

  beforeEach(inject([DomSanitizer], (ds: DomSanitizer) => {
    sanitizer = ds;
  }));

  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
