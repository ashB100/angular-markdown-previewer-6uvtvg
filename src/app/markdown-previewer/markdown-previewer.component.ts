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
    return this.isMinimised ? '50%' : '90%'
  } 

  initialMarkdown = this.markdownService.initialMarkdown;

  markdown = new FormControl(this.initialMarkdown);
  
  html = this.markdownService.parse(this.markdown.value);

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdown.valueChanges.subscribe(markdown => this.html = this.markdownService.parse(markdown))
  }

  onToggleWidth() {
    this.isMinimised = !this.isMinimised;
  }
}