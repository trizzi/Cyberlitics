import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricing = {
    title: "YOUR CHOICE",
    description: 'We have the right package for you',
    pricingBlock: [
      {id: 1, title:"Personal", 
      description: 'The standard version', 
      currency: "$", 
      price: "19", 
      featured: false,
      priceDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      downloads: '5 Downloads',
      extentions: '2 Extentions',
      tutorials: 'Tutorials',
      forumSupport: 'Forum Support',
      freeUpdates: '1 Year Free Updates',
      buttonText: 'Buy Now',
    },
    {id: 2, title:"Student", 
    description: 'Most Popular Choice', 
    currency: "$", 
    price: "29", 
    featured: true,
    priceDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    downloads: '15 Downloads',
    extentions: '5 Extentions',
    tutorials: 'Tutorials with files',
    forumSupport: 'Forum Support',
    freeUpdates: '2 Year Free Updates',
    buttonText: 'Buy Now',
  },
  {id: 3, title:"Business", 
  description: 'For the whole team', 
  currency: "$", 
  price: "49", 
  featured: false,
  priceDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  downloads: 'Unlimited Downloads',
  extentions: 'Unlimited Extentions',
  tutorials: 'HD Video Tutorials',
  forumSupport: 'Chat Support',
  freeUpdates: 'Lifetime Free Updates',
  buttonText: 'Buy Now',
},
    ]
  }
}
