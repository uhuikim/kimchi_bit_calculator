import React, { useEffect, useRef, useState } from 'react';

const Price = () => {
  const [tickers, setTickers] = useState({});
  const scRef = useRef(null);

  useEffect(() => {
    if (!scRef.current) {
      scRef.current = new WebSocket('wss://api.upbit.com/websocket/v1');
      scRef.current.binaryType = 'arraybuffer';
      scRef.current.onopen = () => {
        console.log('u connected');
        if (scRef.current !== null && scRef.current.readyState === 1) {
          const data = [
            { ticket: 'test' },
            {
              type: 'ticker',
              codes: ['KRW-BTC'],
            },
          ];
          scRef.current.send(JSON.stringify(data));
        }
      };

      scRef.current.onmessage = (e) => {
        const enc = new TextDecoder('utf-8');
        const arr = new Uint8Array(e.data);
        const {
          code,
          trade_price: tradePrice,
          opening_price: openPrice,
          high_price: highPrice,
          low_price: lowPrice,
          trade_date: tradeDate,
        } = JSON.parse(enc.decode(arr));

        const symbol = code.slice(code.indexOf('-') + 1, code.length);

        setTickers((prev) => {
          const ticker = {
            ...prev,
            [`KRW-${symbol}`]: {
              tradePrice,
              highPrice,
              lowPrice,
              openPrice,
              date: tradeDate,
              symbol,
            },
          };
          return ticker;
        });
      };
    }

    scRef.current.onclose = () => {
      if (scRef.current !== null) {
        scRef.current.close();
        scRef.current = null;
        console.log('u disconnected');
      }
    };

    scRef.current.onerror = (e) => {
      console.log(e);
    };
  }, []);

  return <div>업비트 가격 : {tickers['KRW-BTC']?.tradePrice}</div>;
};

export default Price;
