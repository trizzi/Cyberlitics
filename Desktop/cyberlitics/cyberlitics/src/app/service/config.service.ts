import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configuration: ConfigItem[] = [
    {
      id: 1,
      name: 'about',
      data: {
        icon: 'fa-html5',
        title: 'SUCCESS',
        description: 'How We Help You To Sell Your Product',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        iconBlock: [
          {
            id: 1,
            icon: 'fa-html5',
            title: 'HTML5 &amp; CSS3',
            description:
              'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico',
          },
          {
            id: 2,
            icon: 'fa-bolt',
            title: 'Easy to Use',
            description:
              'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi',
          },
          {
            id: 3,
            icon: 'fa-tablet',
            title: 'Fully Responsive',
            description:
              'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi',
          },
          {
            id: 4,
            icon: 'fa-rocket',
            title: 'Parallax Effect',
            description:
              'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'clients',
      data: {
        title: 'TRUST',
        description: 'Companies who use our services',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        clientBlock: [
          {
            id: 1,
            img: '../assets/images/company-images/company-logo1.png',
            name: 'Tree',
          },
          {
            id: 2,
            img: '../assets/images/company-images/company-logo2.png',
            name: 'Fingerprint',
          },
          {
            id: 3,
            img: '../assets/images/company-images/company-logo3.png',
            name: 'The Man',
          },
          {
            id: 4,
            img: '../assets/images/company-images/company-logo4.png',
            name: 'Mustache',
          },
          {
            id: 5,
            img: '../assets/images/company-images/company-logo5.png',
            name: 'Goat',
          },
          {
            id: 6,
            img: '../assets/images/company-images/company-logo6.png',
            name: 'Justice',
          },
          {
            id: 7,
            img: '../assets/images/company-images/company-logo7.png',
            name: 'Ball',
          },
          {
            id: 8,
            img: '../assets/images/company-images/company-logo8.png',
            name: 'Cold',
          },
          {
            id: 9,
            img: '../assets/images/company-images/company-logo9.png',
            name: 'Cold',
          },
        ],
      },
    },
    {
      id: 3,
      name: 'gallery',
      data: {
        ancors: [
          {
            id: 1,
            link: '../assets/images/gallery-images/gallery-image-1.jpg',
            img: '../assets/images/gallery-images/gallery-image-1.jpg',
          },
          {
            id: 2,
            link: '../assets/images/gallery-images/gallery-image-2.jpg',
            img: '../assets/images/gallery-images/gallery-image-2.jpg',
          },
          {
            id: 3,
            link: '../assets/images/gallery-images/gallery-image-3.jpg',
            img: '../assets/images/gallery-images/gallery-image-3.jpg',
          },
          {
            id: 4,
            link: '.../assets/images/gallery-images/gallery-image-4.jpg',
            img: '../assets/images/gallery-images/gallery-image-4.jpg',
          },
          {
            id: 5,
            link: '../assets/images/gallery-images/gallery-image-5.jpg',
            img: '../assets/images/gallery-images/gallery-image-5.jpg',
          },
          {
            id: 6,
            link: '../assets/images/gallery-images/gallery-image-6.jpg',
            img: '../assets/images/gallery-images/gallery-image-6.jpg',
          },
        ],
      },
    },
    {
      id: 4,
      name: 'header',
      data: {
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae voluptatum necessitatibus recusandae nemo, officiis ad dignissimos, laborum exercitationem maiores repellat neque quam dolore, provident adipisci dolorem qui. Harum, possimus? Officiis, sint, iste fuga facilis quasi adipisci architecto at tempora soluta, mollitia cum maiores beatae deleniti error consequatur eum neque ipsa. Distinctio voluptas velit rem tenetur quisquam fugit, nulla tempora. Repellat quaerat illum natus repudiandae sed sit, reiciendis, iusto officia, possimus rem dignissimos mollitia corporis fugit earum? Est autem saepe aliquam iure, debitis possimus similique ipsum praesentium vitae maiores esse!',
        url: '#',
        buttontext: 'START CREATING TODAY',
      },
    },
    {
      id: 5,
      name: 'pricing',
      data: {
        title: 'YOUR CHOICE',
        description: 'We have the right package for you',
        pricingBlock: [
          {
            id: 1,
            title: 'Personal',
            description: 'The standard version',
            currency: '$',
            price: '19',
            featured: false,
            priceDetails:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            downloads: '5 Downloads',
            extentions: '2 Extentions',
            tutorials: 'Tutorials',
            forumSupport: 'Forum Support',
            freeUpdates: '1 Year Free Updates',
            buttonText: 'Buy Now',
          },
          {
            id: 2,
            title: 'Student',
            description: 'Most Popular Choice',
            currency: '$',
            price: '29',
            featured: true,
            priceDetails:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            downloads: '15 Downloads',
            extentions: '5 Extentions',
            tutorials: 'Tutorials with files',
            forumSupport: 'Forum Support',
            freeUpdates: '2 Year Free Updates',
            buttonText: 'Buy Now',
          },
          {
            id: 3,
            title: 'Business',
            description: 'For the whole team',
            currency: '$',
            price: '49',
            featured: false,
            priceDetails:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            downloads: 'Unlimited Downloads',
            extentions: 'Unlimited Extentions',
            tutorials: 'HD Video Tutorials',
            forumSupport: 'Chat Support',
            freeUpdates: 'Lifetime Free Updates',
            buttonText: 'Buy Now',
          },
        ],
      },
    },
    {
      id: 6,
      name: 'testimonial',
      data: {
        title: 'FEEDBACK',
        description: 'What our customers are saying',
        testimonialBlock: [
          {
            id: 1,
            img: '../assets/images/user-images/user-1.jpg',
            name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u  labore et dolore magna aliqua',
            footer: 'John Doe - Happy Customer',
          },
          {
            id: 2,
            img: '../assets/images/user-images/user-2.jpg',
            name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat',
            footer: 'Roslyn Doe - Happy Customer',
          },
          {
            id: 3,
            img: '../assets/images/user-images/user-3.jpg',
            name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            footer: 'Thomas Doe - Happy Customer',
          },
        ],
      },
    },
    {
      id: 7,
      name: 'service',
      data: {
        title: 'BELIEVING',
        description: 'Focusing On What Matters Most',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
      },
    },
    {
      id: 8,
      name: 'footer',
      data: {
        title: 'Made with love by',
        url: 'https://www.patrickakhamiogu.org',
        developer: 'Trizzi',
      },
    },
    {
      id: 9,
      name: 'social',
      data: {
        socialBlock: [
          {
            id: 1,
            title: 'Facebook',
            target: '_blank',
            username: 'trizzi',
            url: 'https://www.facebook.com',
            icon: 'facebook',
          },
          {
            id: 2,
            title: 'Behance',
            target: '_blank',
            username: 'trizzi',
            url: 'https://www.behance.net',
            icon: 'behance',
          },
          {
            id: 3,
            title: 'Instagram',
            target: '_blank',
            username: 'trizzi',
            url: 'https://www.instagram.com',
            icon: 'instagram',
          },
          {
            id: 4,
            title: 'X',
            target: '_blank',
            username: 'trizzi',
            url: 'https://www.twitter.com',
            icon: 'twitter',
          },
          {
            id: 5,
            title: 'Google',
            target: '_blank',
            username: 'trizzi',
            url: 'https://www.google.com',
            icon: 'google',
          },
        ],
      },
    },
  ];

  constructor() {}
  getAllPages(): ConfigItem[] {
    return this.configuration;
  }

  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find(
      (configItem) => configItem.name === pageName
    );
  }
}
