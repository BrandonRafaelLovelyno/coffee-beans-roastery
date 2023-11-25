import { Coffee, Profile } from "@prisma/client";

export interface ApiRes {
  data: any;
  success: boolean;
  message: string;
}

export interface CoffeeRes extends ApiRes {
  data: Coffee[];
}

export interface ProfileRes extends ApiRes {
  data: Profile;
}
