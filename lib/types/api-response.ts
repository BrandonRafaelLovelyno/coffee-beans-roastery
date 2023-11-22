import { Profile } from "@prisma/client";

export interface ApiRes {
  data: any;
  success: boolean;
  message: string;
}

export interface ProfileRes extends ApiRes {
  data: Profile;
}
