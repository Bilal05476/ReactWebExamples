import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Profile Data... 🙂 </div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user?.picture} alt={user.name} />
        <h2>{user.nickname} 👨 </h2>
        <p>{user.email} 🚀 </p>
      </div>
    )
  );
};

export default Profile;
