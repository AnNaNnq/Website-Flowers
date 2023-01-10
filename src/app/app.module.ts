import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { EvenementDetailComponent } from './components/evenement-detail/evenement-detail.component';
import { SaisonsComponent } from './components/saisons/saisons.component';
import { SaisonDetailComponent } from './components/saison-detail/saison-detail.component';
import { FleurDetailComponent } from './components/fleur-detail/fleur-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { CouleursComponent } from './components/couleurs/couleurs.component';
import { ForumComponent } from './components/forum/forum.component';
import { FleursComponent } from './components/fleurs/fleurs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    EvenementsComponent,
    EvenementDetailComponent,
    SaisonsComponent,
    SaisonDetailComponent,
    FleurDetailComponent,
    ContactComponent,
    CouleursComponent,
    ForumComponent,
    FleursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
