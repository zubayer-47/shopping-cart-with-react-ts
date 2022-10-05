export interface SingleCardType {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  totalOrder: number;
}

export interface StoreInitialState {
  name: string;
  quantity: number;
  price: number;
  cartOpen: boolean;
  data: SingleCardType[];
  carts: SingleCardType[];
}
