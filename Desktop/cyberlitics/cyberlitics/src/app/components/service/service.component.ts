import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../service/config-item';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  service!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.service = this.configService.getPageByName('service');
  }
}
