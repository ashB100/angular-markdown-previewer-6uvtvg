import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  parse(text) {
    return marked.parse(text);
  }
}