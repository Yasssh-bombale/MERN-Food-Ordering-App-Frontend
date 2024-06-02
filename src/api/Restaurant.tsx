import { searchState } from "@/pages/SearchPage";
import { Restaurant, SearchRestaurantRequest } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch restaurant");
    }
    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "getRestaurantById",
    getRestaurantByIdRequest,
    {
      enabled: !!restaurantId, //fetch request only when restaurantId is present;
    }
  );

  return { restaurant, isLoading };
};

export const useSearchRestaurant = (
  searchState: searchState,
  city?: string
) => {
  const searchRestaurantReq = async (): Promise<SearchRestaurantRequest> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery); //it will set value in key:"value" pairs
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: result, isLoading } = useQuery(
    ["searchRestaurantQuery", searchState], //whenever search state change we want to make API request again
    searchRestaurantReq,
    {
      enabled: !!city, //!!city for truthy values  if city exists!
    }
  );

  return { result, isLoading };
};
