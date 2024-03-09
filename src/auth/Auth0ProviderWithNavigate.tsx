import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Auth0ProviderWithNavigate({ children }: Props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URI;

  const navigate = useNavigate(); //for navigate to AuthCallBackPage;
  if (!domain || !clientId || !redirectURI) {
    throw new Error("unable to initialize Auth0");
  }

  const redirectCallBack = (AppState?: AppState) => {
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectURI,
      }}
      onRedirectCallback={redirectCallBack}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
