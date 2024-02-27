import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServiceComponent } from './components/service/service.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ClientsComponent, PricingComponent, TestimonialComponent, GalleryComponent, NavigationComponent, ServiceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cyberlitics';
}
