
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  imageHint?: string; // For placeholder image AI hint
  category: 'Starters' | 'Mains';
  isVegetarian: boolean;
  isSpecial?: boolean;
  reviews?: string[];
}
