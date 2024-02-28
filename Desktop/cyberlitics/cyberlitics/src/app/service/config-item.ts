export interface ConfigItem {
  id: number;
  name: string;
  data: {
    icon?: string;
    title?: string;
    description?: string;
    detail?: string;
    url?: string;
    buttontext?: string;
    developer?: string;
    iconBlock?: {
      id: number;
      icon: string;
      title: string;
      description: string;
    }[];
    clientBlock?: {
      id: number;
      img: string;
      name: string;
    }[];
    ancors?: {
      id: number;
      link: string;
      img: string;
    }[];
    pricingBlock?: {
      id: number;
      title: string;
      description: string;
      currency: string;
      price: string;
      featured: boolean;
      priceDetails: string;
      downloads: string;
      extentions: string;
      tutorials: string;
      forumSupport: string;
      freeUpdates: string;
      buttonText: string;
    }[];
    testimonialBlock?: {
      id: number;
      img: string;
      name: string;
      footer: string;
    }[];
    socialBlock?: {
      id: number;
      title: string;
      target: string;
      username: string;
      url: string;
      icon: string;
    }[];
  };
}
