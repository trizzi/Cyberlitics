import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
   clients = {
    title: "TRUST",
    description: "Companies who use our services",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    iconBlock: [
      {id:1, img:"../assets/images/company-images/company-logo1.png", name:"Tree"},
      {id:2, img:"../assets/images/company-images/company-logo2.png", name:"Fingerprint"},
      {id:3, img:"../assets/images/company-images/company-logo3.png", name:"The Man"},
      {id:4, img:"../assets/images/company-images/company-logo4.png", name:"Mustache"},
      {id:5, img:"../assets/images/company-images/company-logo5.png", name:"Goat"},
      {id:6, img:"../assets/images/company-images/company-logo6.png", name:"Justice"},
      {id:7, img:"../assets/images/company-images/company-logo7.png", name:"Ball"},
      {id:8, img:"../assets/images/company-images/company-logo8.png", name:"Cold"},
      {id:9, img:"../assets/images/company-images/company-logo9.png", name:"Cold"},
    ]
   }
}
