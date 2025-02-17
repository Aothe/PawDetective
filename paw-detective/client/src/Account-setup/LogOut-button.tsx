import React, { MouseEventHandler } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./account-button.css";

// interface IButtonProps {
//   children?: React.ReactNode;
//   onClick?:
//   | ((event: React.MouseEvent<HTMLButtonElement>) => void)
//   | undefined;
// }

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="account-button"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};


export default LogoutButton;
