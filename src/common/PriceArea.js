import React from 'react';
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

  return (
    <Wrapped>
      <Card>
        <ImgBox>
          <img
            src="https://res.cloudinary.com/dccey8yhf/image/upload/v1639104500/upbit_text_xuxbld.svg"
            alt="업비트 아이콘"
          />
        </ImgBox>
        업비트 가격 : {upbitPrice}
      </Card>
      <Card>
        <ImgBox>
          <img src="https://res.cloudinary.com/dccey8yhf/image/upload/v1639104591/binance_p8mqux.svg" alt="바이낸스" />
        </ImgBox>
        바이낸스 가격 : {binancePrice}
      </Card>
      <Card>{dollar?.data?.rate}</Card>
      <Card>김프 </Card>
    </Wrapped>
  );
};

export default PriceArea;

const Wrapped = styled.div`
  display: flex;
`;

const Card = styled.div`
  > img:nth-child(1) {
    width: 80px;
  }
`;

const ImgBox = styled.div`
  width: 100px;
  height: 20px;
`;
