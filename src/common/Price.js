import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Price = () => {
  const [binance, setBinance] = useState('');
  const [upbit, setUpbit] = useState('');

  const a = useRef();

  useEffect(() => {
    a.current = new WebSocket('wss://api.upbit.com/websocket/v1');
    console.log(a);
  }, []);

  return <div></div>;
};

export default Price;
