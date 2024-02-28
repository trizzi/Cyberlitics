import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../service/config-item';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css',
})
export class SocialComponent {
  social!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.social = this.configService.getPageByName('social');
  }
}
