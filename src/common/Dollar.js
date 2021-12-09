import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dollar = () => {
  const [exchange, setExchange] = useState({});
  const handleDollar = async () => {
    const test = await axios.get('https://exchange.jaeheon.kr:23490/query/USDKRW');
    setExchange({
      time: new Date(test?.data?.update),
    });
    console.log(test);
  };
  useEffect(() => {
    handleDollar();
  }, []);

  console.log(exchange);
  return <div></div>;
};

export default Dollar;
