import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type createUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: createUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/my/user/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Failed to create user");
    }
  };
  const {
    mutateAsync: createUser,
    isError,
    isLoading,
    isSuccess,
  } = useMutation(createUserRequest);

  return { createUser, isError, isLoading, isSuccess };
};
