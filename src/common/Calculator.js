import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import comma from 'lib/comma';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [fixedKimchi, setFixedKimchi] = useState('');

  const { dollar, kimchi } = useSelector((state) => ({
    dollar: state.dollar.dollar,
    kimchi: state.dollar.kimchi,
  }));

  const handleInput = (e) => {
    setValue(e.target.value);
    const resultWon = e.target.value * 1000 * dollar;
    setResult(resultWon + resultWon * kimchi * 0.01);
    setFixedKimchi(kimchi);
  };

  return (
    <Wrapped>
      <Form>
        <span>$</span>
        <input type="number" onChange={handleInput} />
        <strong>K</strong>
      </Form>
      {value && (
        <>
          <Procedure>
            ( {value} X 1,000 X {dollar.toFixed(2)} ) + ( {comma(result.toFixed(2))} X {fixedKimchi.toFixed(2)} X 0.01)
          </Procedure>
          <Result>
            <div> = ₩ {comma(result.toFixed(2))}</div>
          </Result>
        </>
      )}
    </Wrapped>
  );
};

export default Calculator;

const Wrapped = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  > span {
    width: 50px;
    height: 70px;
    line-height: 70px;
    margin-right: -1px;
    display: block;
    text-align: center;
    font-size: 2rem;
    border: 1px solid black;
  }
  > input {
    height: 70px;
    font-size: 2rem;
    width: 200px;
    border: 1px solid black;
  }

  > strong {
    width: 50px;
    height: 70px;
    line-height: 70px;
    margin-left: -1px;
    display: block;
    text-align: center;
    font-size: 2rem;
    border: 1px solid black;
  }
`;

const Procedure = styled.div`
  margin-top: 1.5rem;
`;

const Result = styled.div`
  margin-top: 1.1rem;
  font-weight: bold;
  font-size: 3rem;
`;
