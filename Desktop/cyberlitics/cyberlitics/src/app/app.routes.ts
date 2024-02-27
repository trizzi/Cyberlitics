import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServiceComponent } from './components/service/service.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    // {path:'/', component:HeaderComponent },
    {path:'header', component:HeaderComponent },
    {path:'about', component:AboutComponent},
    {path:'clients', component:ClientsComponent},
    {path:'pricing', component:PricingComponent},
    {path:'testimonial', component:TestimonialComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'service', component:ServiceComponent},
    {path:'**', component:NotFoundComponent},
   
];
