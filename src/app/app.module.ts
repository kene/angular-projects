import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';

import {  BugService } from './shared/bug.service';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    EditIssueComponent,
    IssuesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
