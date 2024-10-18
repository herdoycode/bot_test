"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.telegram.org/bot7863360864:AAH6qjVchEI_IhEAqTWC3KqXd5ZQOVDoTpY/getUpdates"
      )
      .then((res) => setUser(res.data.result.date))
      .catch((err) => console.log(err));
  }, []);
  return <div> hello {user} </div>;
};

export default Home;
