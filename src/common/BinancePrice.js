import React, { useEffect, useRef, useState } from 'react';

const BinancePrice = () => {
  const [tickers, setTickers] = useState({});
  const scRef = useRef(null);

  useEffect(() => {
    if (!scRef.current) {
      scRef.current = new WebSocket(`wss://stream.binance.com:9443/stream?streams=btcusdt@ticker`);
      scRef.current.onopen = () => {
        if (scRef.current !== null && scRef.current.readyState === 1) {
          console.log('b connected');
        }
      };

      scRef.current.onmessage = (e) => {
        if (scRef.current.readyState === 1) {
          const {
            data: { s, c, h, l, o },
          } = JSON.parse(e.data);

          const symbol = s.slice(0, s.length - 3);

          setTickers((prev) => {
            const ticker = {
              ...prev,
              [`${symbol}`]: {
                tradePrice: parseFloat(c),
                highPrice: h,
                lowPrice: l,
                openPrice: o,
                symbol,
              },
            };
            return ticker;
          });
        }
      };
    }

    scRef.current.onclose = () => {
      if (scRef.current !== null) {
        scRef.current.close();
        scRef.current = null;
        console.log('v disconnected');
      }
    };

    scRef.current.onerror = (e) => {
      console.log(e);
    };
  }, []);

  return <div>바이낸스 가격 : {tickers['BTCU']?.tradePrice}</div>;
};

export default BinancePrice;
