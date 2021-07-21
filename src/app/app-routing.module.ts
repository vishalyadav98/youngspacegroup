import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ShowlistComponent } from './admin/showlist/showlist.component';
import { AboutComponent } from './home/about/about.component';
import { CareerComponent } from './home/career/career.component';
import { ComponentComponent } from './home/component.component';
import { ContactComponent } from './home/contact/contact.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { HomeComponent } from './home/home/home.component';
import { MessageComponent } from './home/message/message.component';
import { ServicesComponent } from './home/services/services.component';

const routes: Routes = [
  
    {path: '' , component:HomeComponent},
    {path: 'about' , component:AboutComponent},
  {path: 'career' , component:CareerComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'message' , component:MessageComponent},
  {path: 'gallery' , component:GalleryComponent},
  {path: 'services' , component:ServicesComponent},
  
  {path: 'admin' , component:AdminComponent},
    {path: 'admin/:id' , component:AdminComponent},
    {path: 'show' , component:ShowlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
