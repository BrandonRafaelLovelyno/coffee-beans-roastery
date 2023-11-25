import { Coffee } from "@prisma/client";

export type Category =
  | "ORIGIN"
  | "ROAST LEVEL"
  | "BEAN TYPE"
  | "METHOD"
  | "FLAVOR";

export type SubCategory =
  | "Africa"
  | "South America"
  | "Central America"
  | "Asia"
  | "North America"
  | "Light"
  | "Medium"
  | "Dark"
  | "Arabica"
  | "Robusta"
  | "Washed"
  | "Natural"
  | "Honey"
  | "Fruity"
  | "Nutty"
  | "Spicy"
  | "Chocolatey";

export const SubCategoryMap: Map<Category, SubCategory[]> = new Map([
  [
    "ORIGIN",
    ["Africa", "South America", "Central America", "Asia", "North America"],
  ],
  ["ROAST LEVEL", ["Light", "Medium", "Dark"]],
  ["BEAN TYPE", ["Arabica", "Robusta"]],
  ["METHOD", ["Washed", "Natural", "Honey"]],
  ["FLAVOR", ["Fruity", "Nutty", "Spicy", "Chocolatey"]],
]);
