
export type LoginResponse = {
  name: string;
  avatar: string;
  id: number | null;
  token?:string;
};

export type OrderResponse = {
  date: string;
  category: string;
  id: number;
  brand: {
    brandName: string;
  };
  cost: number;
  status: string;
  customer: string;
  paid: boolean;
  phone: string;
};

