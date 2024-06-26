export type User = {
  _id: string;
  email: string;
  name: string;
  addressline1: string;
  city: string;
  country: string;
};

export type menuItem = {
  _id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  _id: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: menuItem[];
  imageUrl: string;
};

export type SearchRestaurantRequest = {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
