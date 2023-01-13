import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {EvenementsComponent} from './components/evenements/evenements.component';
import {EvenementDetailComponent} from './components/evenement-detail/evenement-detail.component';
import {SaisonsComponent} from './components/saisons/saisons.component';
import {SaisonDetailComponent} from './components/saison-detail/saison-detail.component';
import {FleurDetailComponent} from './components/fleur-detail/fleur-detail.component';
import {ContactComponent} from './components/contact/contact.component';
import {ForumComponent} from './components/forum/forum.component';
import {FleursComponent} from './components/fleurs/fleurs.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ColorsListComponent} from './components/colors-list/colors-list.component';
import {ColorComponent} from './components/color/color.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {MatIconModule} from "@angular/material/icon";
import {FleurComponent} from './components/fleur/fleur.component';
import {SmallDescPipe} from './pipes/small-desc.pipe';
import {CommentaireComponent} from './components/commentaire/commentaire.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import { UpAndDownWidgetComponent } from './components/up-and-down-widget/up-and-down-widget.component';

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
    ForumComponent,
    FleursComponent,
    ColorsListComponent,
    ColorComponent,
    CarouselComponent,
    FleurComponent,
    SmallDescPipe,
    CommentaireComponent,
    SearchComponent,
    UpAndDownWidgetComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
