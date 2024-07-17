import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const finnHubApiKey = "cp6g4uhr01qm8p9l1gigcp6g4uhr01qm8p9l1gj0";
  const finnHubUrl = "https://finnhub.io/api/v1";
  const [marketNews, setMarketNews] = useState();
  const [cryptoNews, setCryptoNews] = useState();

  useEffect(() => {
    const marketNewsData = () => {
      const apiUrl = `${finnHubUrl}/news?category=general&token=${finnHubApiKey}`;
      try {
        const data = axios.get(apiUrl).then((res) => {
          const response = res.data;
          // console.log(response);
          // deleting 90 news to only display 10
          let marketNewsResponse = response.splice(0, 10);
          setMarketNews(marketNewsResponse);
        });
      } catch (error) {
        console.error("error getting market news" + error);
      }
    };
    marketNewsData();
  }, []);
  useEffect(() => {
    const cryptoNews = () => {
      const apiUrl = `${finnHubUrl}/news?category=crypto&token=${finnHubApiKey}`;
      try {
        const data = axios.get(apiUrl).then((res) => {
          const response = res.data;
          //   console.log(response);
          let cryptoResponse = response.splice(0, 10);
          setCryptoNews(cryptoResponse);
        });
      } catch (error) {
        console.error("error getting market news" + error);
      }
    };
    cryptoNews();
  }, []);
  // console.log(marketNews);
  // console.log(cryptoNews);
  return (
    <primaryContext.Provider
      value={{
        // names of api calls
        marketNews,
        cryptoNews,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
