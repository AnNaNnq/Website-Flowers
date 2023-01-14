import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {EvenementsComponent} from "./components/evenements/evenements.component";
import {EvenementDetailComponent} from "./components/evenement-detail/evenement-detail.component";
import {SaisonsComponent} from "./components/saisons/saisons.component";
import {FleursComponent} from "./components/fleurs/fleurs.component";
import {FleurDetailComponent} from "./components/fleur-detail/fleur-detail.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ForumComponent} from "./components/forum/forum.component";
import {ColorsListComponent} from "./components/colors-list/colors-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: LandingPageComponent},
  {path: 'evenements', component: EvenementsComponent},
  {path: 'evenements/:event', component: EvenementDetailComponent},
  {path: 'saisons', component: SaisonsComponent},
  {path: 'saisons/:name', component: SaisonsComponent},
  {path: 'fleurs', component: FleursComponent},
  {path: 'fleurs/:id', component: FleurDetailComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'couleurs', component: ColorsListComponent},
  {path: 'forum', component: ForumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
