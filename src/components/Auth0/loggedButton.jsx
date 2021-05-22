import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoggedButton = () => {
  const { logout, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};

export default LoggedButton;
