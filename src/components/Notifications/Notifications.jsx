import React, { useContext, useState } from "react";
import "./notifications.scss";
import PrimaryProvider, { primaryContext } from "../../context/primaryContext";

const Notifications = () => {
  const { marketNews, cryptoNews } = useContext(primaryContext);
  const [displayMarketNews, setDisplayMarketNews] = useState(5);
  const [displayCryptoNews, setDisplayCryptoNews] = useState(5);

  const marketData = marketNews;
  const cryptoData = cryptoNews;
  console.log(marketData);

  return (
    <section id="highlightsContainer">
      <h2>Todays Highlights</h2>
      <div className="marketNews">
        <h3>Market News</h3>
        <ul className="newsContainer">
          {marketData.map((data) => {
            return (
              <li className="eachNews" key={data.id}>
                <a href={data.url} target="_blank">
                  {data.headline}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cryptoNews">
        <h3>Crypto News</h3>
        <ul className="newsContainer">
          {cryptoData.map((data) => {
            return (
              <li className="eachNews">
                <a href={data.url} target="_blank">
                  {data.headline}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Notifications;
