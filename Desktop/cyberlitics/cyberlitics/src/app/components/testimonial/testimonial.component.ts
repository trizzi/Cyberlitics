import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  testimonial = {
    title: "FEEDBACK",
    description: "What our customers are saying",
    iconBlock: [
      {id:1, img:"../assets/images/user-images/user-1.jpg", name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u  labore et dolore magna aliqua", footer: "John Doe - Happy Customer"},
      {id:2, img:"../assets/images/user-images/user-2.jpg", name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat", footer: "Roslyn Doe - Happy Customer"},
      {id:3, img:"../assets/images/user-images/user-3.jpg", name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", footer: "Thomas Doe - Happy Customer"},
    ]
  }
}
