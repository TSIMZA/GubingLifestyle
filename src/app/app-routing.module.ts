import { ContactUsComponent } from './contact-us/contact-us.component';
import { LifestyleEventsComponent } from './lifestyle-events/lifestyle-events.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothingComponent } from './clothing/clothing.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: LifestyleEventsComponent},
  {path: 'clothing', component: ClothingComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
