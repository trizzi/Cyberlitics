import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
gallery = {
  ancors: [
    {id:1,  link:"../assets/images/gallery-images/gallery-image-1.jpg", img:"../assets/images/gallery-images/gallery-image-1.jpg"},
    {id:2,  link:"../assets/images/gallery-images/gallery-image-2.jpg", img:"../assets/images/gallery-images/gallery-image-2.jpg"},
    {id:3,  link:"../assets/images/gallery-images/gallery-image-3.jpg", img:"../assets/images/gallery-images/gallery-image-3.jpg"},
    {id:4,  link:".../assets/images/gallery-images/gallery-image-4.jpg",img:"../assets/images/gallery-images/gallery-image-4.jpg"},
    {id:5,  link:"../assets/images/gallery-images/gallery-image-5.jpg", img:"../assets/images/gallery-images/gallery-image-5.jpg"},
    {id:6,  link:"../assets/images/gallery-images/gallery-image-6.jpg", img:"../assets/images/gallery-images/gallery-image-6.jpg"},
  ]
}
}
