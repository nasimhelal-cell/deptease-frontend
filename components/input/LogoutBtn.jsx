"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutBtn = () => {
  const router = useRouter();
  async function handleLogout() {
    try {
      // Make a DELETE request to the logout endpoint
      let res = await fetch("http://localhost:4444/api/v1/students/logout", {
        method: "DELETE",
        credentials: "include", // Include credentials (cookies) for authentication
      });

      if (res.ok) {
        // Successful logout, perform any additional actions if needed
        Cookies.remove("my_token");
        let cookie = Cookies.get("my_token");
        if (!cookie) {
          toast.success("Logout successful");
          router.push("/");
        }
      } else {
        // Handle errors or failed logout
        toast.error("Logout failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred during logout", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-red-50 py-3 px-4 text-sm rounded-md capitalize"
    >
      log-out
    </button>
  );
};

export default LogoutBtn;
