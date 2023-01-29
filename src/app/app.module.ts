import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentiComponent } from './commenti/commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
