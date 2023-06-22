import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
import axios from "axios";
import newsImg from "../images/newsletter_bg_light.svg";

import TableManager from "../components/TableManager/TableManager";

const Wrapper = styled.div`
  background: linear-gradient(
    rgb(248, 250, 255) 0%,
    rgba(248, 250, 253, 0) 200px
  );
`;

const SubHeader = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
`;

const InformationPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 87%;
  max-width: 1400px;
  margin: auto;
`;

const InformationTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
`;

const InformationDescription = styled.p`
  display: flex;
  color: ${(props) => props.theme.colors.darkBlue};
`;

const TableWrapper = styled.div`
  overflow-x: scroll;
`;

const StyledTable = styled.table`
  width: 87%;
  max-width: 1400px;
  margin: auto;
  border-spacing: 0;
`;

const TableHeader = styled.th`
  padding: 0.8em 1em;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: ${(props) => (props.textalign ? "start" : "end")};
  border-top: 1px solid ${(props) => props.theme.colors.greySecondary};
`;

const TableRow = styled.tr`
  &:hover {
    background-color: ${(props) =>
      props.nobg ? "#FFFFFF" : props.theme.colors.lightBlue};
  }
`;

const TableCell = styled.td`
  padding: 1.8em 1em;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.darkBlue};
  white-space: nowrap;
  text-align: ${(props) => (props.textalign ? "start" : "end")};
  border-top: 1px solid ${(props) => props.theme.colors.greySecondary};
`;

const StyledImage = styled.img`
  height: 24px;
  padding-right: 0.5em;
`;

const CellInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-weight: ${(props) => props.$bold || "400"};
  span {
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 400;
  }
`;

const StyledChange = styled(StyledSpan)`
  color: ${(props) => (props.red ? "red" : "green")};
`;

const StyledTicker = styled.span`
  color: ${(props) => props.theme.colors.darkBlue};
`;

const CryptoNewsWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const CryptoNews = styled.div`
  display: flex;
  width: 87%;
  max-width: 1400px;
  margin: auto;
  margin-top: 5em;
`;

const NewsLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  height: 460px;
  padding-left: 1em;
`;

const NewsMainText = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  padding-top: 2.5em;
  span {
    font-weight: bold;
  }
`;

const NewsParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  padding-top: 1.5em;
  color: ${(props) => props.theme.colors.darkBlue};
`;

const NewsSubscribeButton = styled.button`
  width: fit-content;
  margin-top: 2.5em;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  padding: 1em 1.6em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.darkBlueBtn};
  &:hover {
    background-color: ${(props) => props.theme.hover.darkBlueBtn};
  }
`;

const NewsImgWrapper = styled.img`
  padding-top: 1.5em;
  object-fit: cover;
`;

const Home = ({ globalData }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [marketData, setMarketData] = useState([]);

  const formatMarketCap = (number) => (number / 1e12).toFixed(2);

  const colorizeMarketCap = (data) => {
    data = data.toFixed(1);
    if (data < 0)
      return (
        <StyledChange $bold="bold" red="true">
          {data}% <span>decrease</span>
        </StyledChange>
      );
    if (data > 0)
      return (
        <StyledChange $bold="bold">
          {data}% <span>increase</span>
        </StyledChange>
      );
    return (
      <StyledSpan $bold="bold">
        {data}% <span>change</span>
      </StyledSpan>
    );
  };

  const colorizePercentageChange = (data) => {
    if (data < 0) {
      return <StyledChange red="true">{data}%</StyledChange>;
    } else {
      return <StyledChange>{data}%</StyledChange>;
    }
  };

  const marketAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C%207d%2C&locale=en`;

  useEffect(() => {
    axios
      .get(marketAPI)
      .then((response) => setMarketData(response.data))
      .catch((error) => console.log(error));
  }, [page, perPage]);

  console.log(marketData);
  // console.log(globalData);

  return (
    <Wrapper>
      <ScrollToTop smooth />
      <SubHeader>
        <InformationPanel>
          <InformationTitle>
            Today's Cryptocurrency Prices by Market Cap
          </InformationTitle>
          <InformationDescription>
            The global crypto market cap is
            {globalData &&
              globalData.total_market_cap &&
              globalData.total_market_cap.usd && (
                <StyledSpan $bold="bold">
                  &nbsp;${formatMarketCap(globalData.total_market_cap.usd)}T
                </StyledSpan>
              )}
            , a&nbsp;
            {globalData.market_cap_change_percentage_24h_usd &&
              colorizeMarketCap(
                globalData.market_cap_change_percentage_24h_usd
              )}
            &nbsp; over the last day.
          </InformationDescription>
        </InformationPanel>
      </SubHeader>
      <TableWrapper>
        <StyledTable>
          <thead>
            <TableRow nobg="true">
              <TableHeader textalign="true">#</TableHeader>
              <TableHeader textalign="true">Name</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>1h%</TableHeader>
              <TableHeader>24h%</TableHeader>
              <TableHeader>Market Cap</TableHeader>
              <TableHeader>Circulating Supply</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {marketData &&
              marketData.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell textalign="true">{coin.market_cap_rank}</TableCell>
                  <TableCell textalign="true">
                    <CellInnerWrapper>
                      <StyledImage src={coin.image} />
                      <StyledSpan $bold="bold">{coin.name}</StyledSpan>
                      <StyledTicker>
                        &nbsp;{coin.symbol.toUpperCase()}
                      </StyledTicker>
                    </CellInnerWrapper>
                  </TableCell>
                  <TableCell>
                    {coin.current_price
                      ? `$${coin.current_price.toFixed(2)}`
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {coin.price_change_percentage_1h_in_currency
                      ? colorizePercentageChange(
                          coin.price_change_percentage_1h_in_currency.toFixed(2)
                        )
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {coin.price_change_percentage_24h
                      ? colorizePercentageChange(
                          coin.price_change_percentage_24h.toFixed(2)
                        )
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {coin.market_cap ? coin.market_cap.toLocaleString() : "-"}
                  </TableCell>
                  <TableCell>
                    {coin.circulating_supply && coin.symbol
                      ? `${coin.circulating_supply.toLocaleString()}  ${coin.symbol.toUpperCase()}`
                      : "-"}
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
      <TableManager
        marketData={marketData}
        globalData={globalData}
        perPage={perPage}
        page={page}
        setPage={setPage}
        setPerPage={setPerPage}
      />
      <CryptoNewsWrapper>
        <CryptoNews>
          <NewsLeftSideWrapper>
            <NewsMainText>
              Be the first to know about <span>crypto news every day</span>
            </NewsMainText>
            <NewsParagraph>
              Get crypto analysis, news and updates right to your inbox! Sign up
              here so you don't miss a single newsletter.
            </NewsParagraph>
            <NewsSubscribeButton>Subscribe Now</NewsSubscribeButton>
          </NewsLeftSideWrapper>
          {/* <NewsImgWrapper src={newsImg} /> */}
        </CryptoNews>
      </CryptoNewsWrapper>
    </Wrapper>
  );
};

export default Home;
