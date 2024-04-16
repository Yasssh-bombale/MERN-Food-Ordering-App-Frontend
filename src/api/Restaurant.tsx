import { SearchRestaurantRequest } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const useSearchRestaurant = (city?: string) => {
  const searchRestaurantReq = async (): Promise<SearchRestaurantRequest> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: result, isLoading } = useQuery(
    ["searchRestaurantQuery"],
    searchRestaurantReq,
    {
      enabled: !!city, //!!city for truthy values  if city exists!
    }
  );

  return { result, isLoading };
};
