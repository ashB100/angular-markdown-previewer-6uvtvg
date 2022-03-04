import { Injectable } from '@angular/core';
import * as marked from 'marked';
import { initialMarkdownText } from './markdown-initial-text';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  initialMarkdown = initialMarkdownText;
  constructor() { }

  parse(text: string) {
    return marked.parse(text);
  }
}