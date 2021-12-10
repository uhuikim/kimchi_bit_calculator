import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';

import { useGetUpbitPrice, useGetBinancePrice } from 'hooks';

const PriceArea = () => {
  const upbitPrice = useGetUpbitPrice()['KRW-BTC']?.tradePrice;
  const binancePrice = useGetBinancePrice()['BTCU']?.tradePrice;

  const { data: dollar, isLoading } = useQuery('usd', () => axios.get('https://coinat.herokuapp.com/currency'), {
    refetchInterval: 3600000,
  });
  const kimchi = ((upbitPrice - dollar.data.rate * binancePrice) / (dollar.data.rate * binancePrice)) * 100;

  const comma = (num) => {
    return num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapped>
      <Card>
        <ImgBox width="60px">
          <img
            src="https://res.cloudinary.com/dccey8yhf/image/upload/v1639104500/upbit_text_xuxbld.svg"
            alt="업비트 아이콘"
          />
        </ImgBox>
        ₩ {comma(upbitPrice)}
      </Card>
      <Card>
        <ImgBox width="105px">
          <img src="https://res.cloudinary.com/dccey8yhf/image/upload/v1639104591/binance_p8mqux.svg" alt="바이낸스" />
        </ImgBox>
        $ {comma(binancePrice)}
      </Card>
      <Card>
        <p>오늘의 환율</p>
        {dollar?.data?.rate.toFixed(2)}
      </Card>
      <Card>
        <p>김프</p>
        {kimchi.toFixed(2)} %
      </Card>
    </Wrapped>
  );
};

export default PriceArea;

const Wrapped = styled.div`
  display: flex;
`;

const Card = styled.div`
  border: 1px solid gray;
  width: 25%;
  margin-right: -1px;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
`;

const ImgBox = styled.div`
  width: ${(props) => props.width};
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;
