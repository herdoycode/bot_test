"use client";

import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.telegram.org/bot7863360864:AAH6qjVchEI_IhEAqTWC3KqXd5ZQOVDoTpY/getUpdates"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div>Home</div>;
};

export default Home;
