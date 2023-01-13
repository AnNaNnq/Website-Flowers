import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {EvenementsComponent} from "./components/evenements/evenements.component";
import {EvenementDetailComponent} from "./components/evenement-detail/evenement-detail.component";
import {SaisonsComponent} from "./components/saisons/saisons.component";
import {SaisonDetailComponent} from "./components/saison-detail/saison-detail.component";
import {FleursComponent} from "./components/fleurs/fleurs.component";
import {FleurDetailComponent} from "./components/fleur-detail/fleur-detail.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ForumComponent} from "./components/forum/forum.component";
import {ColorsListComponent} from "./components/colors-list/colors-list.component";
import {SearchComponent} from "./components/search/search.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: LandingPageComponent}, // Anna
  {path: 'evenements', component: EvenementsComponent}, // Anton
  {path: 'evenements/:id', component: EvenementDetailComponent}, // Loïc
  {path: 'saisons', component: SaisonsComponent}, // Anton
  {path: 'saisons/:id', component: SaisonDetailComponent}, // Anton
  {path: 'fleurs', component: FleursComponent}, // Loïc
  {path: 'fleurs/:id', component: FleurDetailComponent}, //Loïc
  {path: 'contacts', component: ContactComponent}, // Anton
  {path: 'couleurs', component: ColorsListComponent}, // Anna
  {path: 'forum', component: ForumComponent}, // Anna
  {path: 'recherche', component: SearchComponent}, // Anna
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
