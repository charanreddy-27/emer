export interface StatusCheck {
  id: string;
  client_name: string;
  timestamp: Date;
}

export interface StatusCheckCreate {
  client_name: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  original_price: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  fabric: string;
  occasion: string;
  is_featured: boolean;
  is_new_arrival: boolean;
  created_at: Date;
}

export interface ProductCreate {
  name: string;
  category: string;
  price: number;
  original_price: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  image: string;
  badge?: string;
  fabric: string;
  occasion: string;
  is_featured?: boolean;
  is_new_arrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export interface CategoryCreate {
  name: string;
  description: string;
  image: string;
  count?: number;
}

export interface CartItem {
  id: string;
  client_id: string;
  product_id: string;
  quantity: number;
  created_at: Date;
}

export interface CartItemCreate {
  client_id: string;
  product_id: string;
  quantity?: number;
}

export interface CartItemUpdate {
  quantity: number;
}

export interface WishlistItem {
  id: string;
  client_id: string;
  product_id: string;
  created_at: Date;
}

export interface WishlistItemCreate {
  client_id: string;
  product_id: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: Date;
  is_active: boolean;
}

export interface NewsletterSubscribe {
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  product_bought: string;
  created_at: Date;
}
