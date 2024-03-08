import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type createUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const createUserRequest = async (user: createUserRequest) => {
    const res = await fetch(`${API_BASE_URL}/api/my/user/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
