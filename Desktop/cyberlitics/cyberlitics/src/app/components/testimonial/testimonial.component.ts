import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../service/config-item';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  testimonial!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.testimonial = this.configService.getPageByName('testimonial');
  }
}
