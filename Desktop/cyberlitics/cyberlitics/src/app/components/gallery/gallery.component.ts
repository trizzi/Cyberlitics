import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../service/config-item';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  gallery!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.gallery = this.configService.getPageByName('gallery');
  }
}
