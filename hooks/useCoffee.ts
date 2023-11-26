import fetcher from "@/lib/fetcher";
import { CoffeeRes, CoffeesRes } from "@/lib/types/api-response";
import useSwr from "swr";

const useCoffee = (coffeeId?: string) => {
  if (coffeeId) {
    const { data, isLoading, mutate } = useSwr<CoffeeRes>(
      `/api/coffee/${coffeeId}`,
      fetcher
    );
    return { data, isLoading, mutate };
  } else {
    const { data, isLoading, mutate } = useSwr<CoffeesRes>(
      "/api/coffee",
      fetcher
    );
    return { data, isLoading, mutate };
  }
};

export default useCoffee;
