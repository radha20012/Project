// src/utils/logout.js
export const handleLogout = (navigate) => {
    localStorage.clear();
    navigate("/");
  };
  