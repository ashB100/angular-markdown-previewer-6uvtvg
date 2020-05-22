import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-markdown-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrls: ['./markdown-previewer.component.css']
})
export class MarkdownPreviewerComponent implements OnInit {
  isMinimised = true;
  @HostBinding('style.--width') get width() {
    return this.isMinimised ? '45%' : '90%'
  } 

  initialMarkdown =
  `
**\u21af Edit this content:**

# Heading One

## Heading Two

**Bold Text**

### Image
![Beautiful Nature](https://images.unsplash.com/photo-1550184816-3eeadf82295f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60)

### List
- item one
- item two
- item three

### *Italic*

### Inline Code 
\`const pi = Math.pi\`

### Multiline Code
\`\`\`
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}
\`\`\`

### Link
[Twitter](https://twitter.com/ashnita01)
  `;

  markdown = new FormControl(this.initialMarkdown);
  
  html = this.markdownService.parse(this.markdown.value);

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdown.valueChanges.subscribe(markdown => this.html = this.markdownService.parse(markdown))
  }

  onToggleMinimise(event) {
    this.isMinimised = !this.isMinimised;
    console.log('toggle', event);
  }
}