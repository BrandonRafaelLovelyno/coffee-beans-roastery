import { Coffee } from "@prisma/client";
import React from "react";
import { Category, SubCategory, SubCategoryMap } from "@/lib/types/coffee";

interface CoffeeCarouselProps {
  category: Category;
  coffee: Coffee[];
}

const coffeesPerSub = {
  Africa: [] as Coffee[],
  "South America": [] as Coffee[],
  "Central America": [] as Coffee[],
  Asia: [] as Coffee[],
  "North America": [] as Coffee[],
  Light: [] as Coffee[],
  Medium: [] as Coffee[],
  Dark: [] as Coffee[],
  Arabica: [] as Coffee[],
  Robusta: [] as Coffee[],
  Washed: [] as Coffee[],
  Natural: [] as Coffee[],
  Honey: [] as Coffee[],
  Fruity: [] as Coffee[],
  Nutty: [] as Coffee[],
  Spicy: [] as Coffee[],
  Chocolatey: [] as Coffee[],
};

const CoffeeCarousel: React.FC<CoffeeCarouselProps> = ({
  category,
  coffee,
}) => {
  const subCategories: SubCategory[] = SubCategoryMap.get(category)!;

  subCategories.map((sub) => {
    const coffees: Coffee[] = coffee.filter(
      (coffee) =>
        coffee.roastLevel == sub ||
        coffee.beanType == sub ||
        coffee.flavor == sub ||
        coffee.method == sub ||
        coffee.origin == sub
    );
    coffeesPerSub[sub] = coffees;
  });

  return (
    <div>
      {coffeesPerSub["Africa"].map((c) => (
        <span>{c.name}</span>
      ))}
    </div>
  );
};

export default CoffeeCarousel;
