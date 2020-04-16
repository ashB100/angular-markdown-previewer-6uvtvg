import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarkdownPreviewerComponent } from './markdown-previewer/markdown-previewer.component';



@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, MarkdownPreviewerComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
