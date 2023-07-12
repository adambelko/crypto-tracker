import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  width: 97%;
`;

const ConverterHeader = styled.div`
  color: #222531;
  font-size: 1.6rem;
  font-weight: bold;
`;
const ConverterBody = styled.div`
  display: flex;
  position: relative;
  border-radius: 15px;
  margin-top: 0.5em;
  border: 2px solid #eff2f5;
`;

const ConverterImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 35px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 2em;
  background: ${(props) => (props.$bg ? "#f8fafd" : "")};
`;

const CurrencyWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  img {
    height: 32px;
    width: auto;
    margin-right: 0.9em;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 0.5em;
  }

  input {
    display: flex;
    font-size: 1.7em;
    text-align: end;
    width: 100%;
    background: transparent;
    border: none;
  }
`;

const Ticker = styled.p`
  color: #58667e;
  font-size: 0.9rem;
`;

const Currency = styled.p`
  color: #222531;
  font-size: 1.1em;
  font-weight: bold;
  white-space: nowrap;
`;

const Converter = ({ coin }) => {
  return (
    <Wrapper>
      <ConverterHeader>
        {coin.symbol.toUpperCase()} to USD Converter
      </ConverterHeader>
      <ConverterBody>
        <InnerWrapper>
          <CurrencyWrapper>
            <img src={coin.image} alt="coin" />
            <div>
              <Ticker>{coin.symbol.toUpperCase()}</Ticker>
              <Currency>{coin.name}</Currency>
            </div>
            <input type="number" />
          </CurrencyWrapper>
        </InnerWrapper>
        <InnerWrapper $bg="true">
          <CurrencyWrapper>
            <img
              src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"
              alt="coin"
            />
            <div>
              <Ticker>USD</Ticker>
              <Currency>United States Dollar</Currency>
            </div>
            <input type="number" />
          </CurrencyWrapper>
        </InnerWrapper>
        <ConverterImage src="https://s2.coinmarketcap.com/static/cloud/img/converter.png?_=8b517e5" />
      </ConverterBody>
    </Wrapper>
  );
};

export default Converter;