import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

import { HttpClientModule } from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './today/today.component';
import { WorkComponent } from './work/work.component';
import { DoneComponent } from './done/done.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    DashboardComponent,
    TodayComponent,
    WorkComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
