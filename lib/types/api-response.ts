import { Coffee, Order, Profile } from "@prisma/client";

export interface ApiRes {
  data: any;
  success: boolean;
  message: string;
}

export interface CoffeeRes extends ApiRes {
  data: Coffee;
}

export interface CoffeesRes extends ApiRes {
  data: Coffee[];
}

export interface OrderRes extends ApiRes {
  data: Order[];
}

export interface ProfileRes extends ApiRes {
  data: Profile;
}
