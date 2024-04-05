import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/Manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  const { restaurant } = useGetMyRestaurant();

  return (
    <ManageRestaurantForm
      onSave={createRestaurant}
      isLoading={isLoading}
      restaurant={restaurant}
    />
  );
};

export default ManageRestaurantPage;
