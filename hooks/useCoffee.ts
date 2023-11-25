import fetcher from "@/lib/fetcher";
import { CoffeeRes } from "@/lib/types/api-response";
import useSwr from "swr";

const useCoffee = () => {
  const { data, isLoading, mutate } = useSwr<CoffeeRes>("/api/coffee", fetcher);
  return { data, isLoading, mutate };
};

export default useCoffee;
