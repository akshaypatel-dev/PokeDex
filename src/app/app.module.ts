import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { Pokemon0listComponent } from './pokemon0list/pokemon0list.component';
import {NgxPaginationModule} from "ngx-pagination";
import { CustompipePipe } from './custompipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NetworkInterceptor} from "./network.interceptor";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { HeightpipePipe } from './heightpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Pokemon0listComponent,
    CustompipePipe,
    HeightpipePipe
  ],
  imports: [
    BrowserModule,HttpClientModule,NgxPaginationModule,
    BrowserAnimationsModule, MatProgressBarModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:NetworkInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
