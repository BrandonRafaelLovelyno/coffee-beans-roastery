import fetcher from "@/lib/fetcher";
import { CoffeeRes, OrderRes } from "@/lib/types/api-response";
import useSwr from "swr";

const useOrder = () => {
  const { data, isLoading, mutate } = useSwr<OrderRes>("/api/order", fetcher);
  return { data, isLoading, mutate };
};

export default useOrder;
