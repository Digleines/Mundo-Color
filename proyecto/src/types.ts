export interface Product {
  id: string;
  name: string;
  category: 'bouquets' | 'desayunos' | 'cajas' | 'carteleras' | 'peluches' | 'rosas';
  categoryLabel: string;
  badge?: string;
  description: string;
  price: string;
  priceNum: number;
  image: string;
  secondaryImage?: string;
  inclusions: string[];
  occasions: string[];
  buttonText: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  occasion: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CustomGiftState {
  baseType: string;
  occasion: string;
  colorPalette: string;
  extras: string[];
  recipientName: string;
  senderName: string;
  cardMessage: string;
  deliveryDate: string;
  deliveryAddress: string;
}
