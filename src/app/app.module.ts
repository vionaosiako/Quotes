import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteRatingComponent } from './quote/quote-rating/quote-rating.component';
import { GenerateQuoteComponent } from './generate-quote/generate-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsPageComponent,
    HomeComponent,
    FooterComponent,
    QuoteComponent,
    QuoteRatingComponent,
    GenerateQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
