import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {HttpClientModule} from '@angular/common/http';

import { PanelModule } from 'primeng/primeng';

import {DataViewModule} from 'primeng/dataview'

import { AppComponent } from './app.component';
import { CommentsService } from './services/comments.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    HttpClientModule,
    PanelModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
