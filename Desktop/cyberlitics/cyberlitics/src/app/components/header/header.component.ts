import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../service/config-item';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  header!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.header = this.configService.getPageByName('header');
  }
}
