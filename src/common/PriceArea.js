import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { dollarToWon, setKimchiPre } from 'ducks/dollar';
import { useDispatch } from 'react-redux';
import comma from 'lib/comma';
import Loading from './Loading';

import { useGetUpbitPrice, useGetBinancePrice } from 'hooks';

const PriceArea = () => {
  const [upbitPrice, upbitLoading] = useGetUpbitPrice();
  const [binancePrice, binanceLoading] = useGetBinancePrice();

  const dispatch = useDispatch();

  const { data: dollar, isLoading: dollarLoading } = useQuery(
    'usd',
    () => axios.get('https://coinat.herokuapp.com/currency'),
    {
      refetchInterval: 3600000,
      cacheTime: 1000 * 60 * 60,
    },
  );
  dispatch(dollarToWon(dollar?.data?.rate));

  const kimchi =
    ((upbitPrice['KRW-BTC']?.tradePrice - dollar?.data?.rate * binancePrice['BTCU']?.tradePrice) /
      (dollar?.data?.rate * binancePrice['BTCU']?.tradePrice)) *
    100;
  dispatch(setKimchiPre(kimchi));

  return (
    <Wrapped>
      <Card>
        <ImgBox width="60px">
          <img
            src="https://res.cloudinary.com/dccey8yhf/image/upload/v1639104500/upbit_text_xuxbld.svg"
            alt="업비트 아이콘"
          />
        </ImgBox>
        {upbitLoading || dollarLoading ? (
          <Loading />
        ) : (
          <>
            ₩ {comma(upbitPrice['KRW-BTC']?.tradePrice)}
            <Convert> ( $ {comma((upbitPrice['KRW-BTC']?.tradePrice / dollar?.data?.rate).toFixed(2))} )</Convert>
          </>
        )}
      </Card>
      <Card>
        <ImgBox width="105px">
          <img src="https://res.cloudinary.com/dccey8yhf/image/upload/v1639104591/binance_p8mqux.svg" alt="바이낸스" />
        </ImgBox>
        {binanceLoading || dollarLoading ? (
          <Loading />
        ) : (
          <>
            $ {comma(binancePrice['BTCU']?.tradePrice)}
            <Convert> ( ₩ {comma((binancePrice['BTCU']?.tradePrice * dollar?.data?.rate).toFixed(2))} )</Convert>
          </>
        )}
      </Card>
      <Card>
        <p>환율</p>
        {dollarLoading ? <Loading /> : <>{dollar?.data?.rate.toFixed(2)}</>}
      </Card>
      <Card>
        <p>김프</p>
        {upbitLoading || binanceLoading || dollarLoading ? <Loading /> : <> {kimchi.toFixed(2)} %</>}
      </Card>
    </Wrapped>
  );
};

export default PriceArea;

const Wrapped = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid gray;
  width: 240px;
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

const Convert = styled.p`
  font-size: 0.9rem;
  color: gray;
  font-weight: 400;
`;
