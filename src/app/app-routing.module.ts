import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./components/listings/listings-page/listings-page.component').then(l=>l.ListingsPageComponent)},
  {path:'edit-listing/:id', loadComponent:()=>import('./components/listings/edit-listing/edit-listing.component').then(e=>e.EditListingComponent)},
  {path:'listing-detail/:id', loadComponent:()=>import('./components/listings/listing-detail/listing-detail.component').then(k=>k.ListingDetailComponent)},
  {path:'my-listings', loadComponent:()=>import('./components/listings/my-listings/my-listings.component').then(m=>m.MyListingsComponent)},
  {path:'contact/:id', loadComponent:()=>import('./components/contact/contact.component').then(c=>c.ContactComponent)},
  {path:'new-listing', loadComponent:()=>import('./components/listings/new-listing/new-listing.component').then(n=>n.NewListingComponent)},
  {path:'**', loadComponent:() => import('./components/page-not-found/page-not-found.component').then(n=>n.PageNotFoundComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
