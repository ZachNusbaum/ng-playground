import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarButtonComponent } from './star-button/star-button.component';
import { TitleCaserComponent } from './title-caser/title-caser.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    StarButtonComponent,
    TitleCaserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
