import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageTitleComponent,
    LoginComponent,
    FooterComponent,
    PostComponent,
    CopyrightsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
