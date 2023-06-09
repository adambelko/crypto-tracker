import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 87%;
  max-width: 1400px;
  margin: auto;
  margin-top: 3em;

  @media (max-width: 675px) {
    display: none;
  }
`;

const MobileStyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2em;

  @media (min-width: 675px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.3em 2em 0.3em;

  @media (max-width: 675px) {
    width: 25%;
  }
`;

const ColumnHeader = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 1em;
`;

const ColumnItem = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: none;
  margin-top: 1em;
  &:hover {
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
  }
`;

const Footer = () => {
  const defaultFooter = (
    <StyledFooter>
      <Column>
        <ColumnHeader>Products</ColumnHeader>
        <ColumnItem>Blockchain Explorer</ColumnItem>
        <ColumnItem>Crypto API</ColumnItem>
        <ColumnItem>Job Boards</ColumnItem>
        <ColumnItem>Sitemap</ColumnItem>
        <ColumnItem>Crypto Indices</ColumnItem>
      </Column>
      <Column>
        <ColumnHeader>Company</ColumnHeader>
        <ColumnItem>About us</ColumnItem>
        <ColumnItem>Terms of use</ColumnItem>
        <ColumnItem>Privacy Policy</ColumnItem>
        <ColumnItem>Cookie preferences</ColumnItem>
        <ColumnItem>Community Ryles</ColumnItem>
        <ColumnItem>Disclaimer</ColumnItem>
      </Column>
      <Column>
        <ColumnHeader>Support</ColumnHeader>
        <ColumnItem>Request Form</ColumnItem>
        <ColumnItem>Contact Support</ColumnItem>
        <ColumnItem>FAQ</ColumnItem>
        <ColumnItem>Glossary</ColumnItem>
      </Column>
      <Column>
        <ColumnHeader>Socials</ColumnHeader>
        <ColumnItem>Facebook</ColumnItem>
        <ColumnItem>Twitter</ColumnItem>
        <ColumnItem>Telegram</ColumnItem>
        <ColumnItem>Instagram</ColumnItem>
        <ColumnItem>Interactive Chat</ColumnItem>
      </Column>
    </StyledFooter>
  );

  const mobileFooter = (
    <MobileStyledFooter>
      <Wrapper>
        <Column>
          <ColumnHeader>Products</ColumnHeader>
          <ColumnItem>Blockchain Explorer</ColumnItem>
          <ColumnItem>Crypto API</ColumnItem>
          <ColumnItem>Job Boards</ColumnItem>
          <ColumnItem>Sitemap</ColumnItem>
          <ColumnItem>Crypto Indices</ColumnItem>
        </Column>
        <Column>
          <ColumnHeader>Company</ColumnHeader>
          <ColumnItem>About us</ColumnItem>
          <ColumnItem>Terms of use</ColumnItem>
          <ColumnItem>Privacy Policy</ColumnItem>
          <ColumnItem>Cookie preferences</ColumnItem>
          <ColumnItem>Community Ryles</ColumnItem>
          <ColumnItem>Disclaimer</ColumnItem>
        </Column>
      </Wrapper>
      <Wrapper>
        <Column>
          <ColumnHeader>Support</ColumnHeader>
          <ColumnItem>Request Form</ColumnItem>
          <ColumnItem>Contact Support</ColumnItem>
          <ColumnItem>FAQ</ColumnItem>
          <ColumnItem>Glossary</ColumnItem>
        </Column>
        <Column>
          <ColumnHeader>Socials</ColumnHeader>
          <ColumnItem>Facebook</ColumnItem>
          <ColumnItem>Twitter</ColumnItem>
          <ColumnItem>Telegram</ColumnItem>
          <ColumnItem>Instagram</ColumnItem>
          <ColumnItem>Interactive Chat</ColumnItem>
        </Column>
      </Wrapper>
    </MobileStyledFooter>
  );

  return (
    <React.Fragment>
      {defaultFooter}
      {mobileFooter}
    </React.Fragment>
  );
};

export default Footer;
