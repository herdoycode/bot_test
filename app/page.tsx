"use client";
import { useEffect, useState } from "react";

// Define the user type according to Telegram API
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

const Home = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      const userInfo = window.Telegram.WebApp.initDataUnsafe.user;
      setUser(userInfo);
    }
  }, []);

  return (
    <div>
      <h1>Welcome to My Telegram Web App</h1>
      {user ? (
        <div>
          <p>First Name: {user.first_name}</p>
          {user.last_name && <p>Last Name: {user.last_name}</p>}
          {user.username && <p>Username: {user.username}</p>}
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Home;
