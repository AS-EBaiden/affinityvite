import React from "react";

import {
  H1,
  Section,
  Nav,
  Flex,
  Box,
  Span,
  NavLink,
  css,
} from "@allied-solutions/affinity";
import styled from "styled-components";
import LoginForm from "./pages/LoginForm";
import Forgot from "./pages/Forgot";
import EmailSent from "./pages/EmailSent";
import NewPassword from "./pages/NewPassword";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/CPimg.svg";

const StyledHeader = styled(Nav)`
  a {
    text-decoration: none;
    color: white !important;
  }
  .nav-item + .nav-item {
    border-left: 1px solid white;
    padding-left: 0.7rem;
  }
`;
const StyledFlex = styled(Flex)`
  * {
    transition: all 0.25s linear;
  }
`;
const Example = styled(Box)`
  @media screen and (max-height: 600px) {
    margin-top: -4rem;
  }
`;
const StyledFlexCol = styled(Flex.Col)`
  @media screen and (min-width: 774px) {
    max-width: 550px !important;
  }
  @media screen and (max-width: 773px) {
    max-width: 100% !important;
  }
  @media screen and (min-width: 600px) {
    text-align: center !important;
    flex: unset !important;
    min-width: 550px !important;
  }

  @media only screen and (max-width: 776px) and (min-width: 640px) {
    /* min-height: 75vh !important; */
  }
`;

// @media screen and (min-width: 640px) {
//   text-align: center !important;
//   width: 550px !important;
//   flex: unset !important;
//   max-width: unset !important;
// }

export default function ContainerElement({ startingEndpoint }) {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <StyledFlex
      className="login-page"
      margin="auto !important"
      minHeight={[null, "100vh"]}
      flexDirection={["column", "row"]}
    >
      <Flex.Col
        pb={["10vh", "unset"]}
        className="left-panel"
        // gradient="heroBlue"
        style={{
          backgroundImage: `radial-gradient(
            at right top,
            hsl(199deg 73% 52%) 0%,
            hsl(200deg 74% 50%) 21%,
            hsl(202deg 76% 49%) 30%,
            hsl(205deg 74% 50%) 39%,
            hsl(208deg 71% 51%) 46%,
            hsl(213deg 67% 52%) 54%,
            hsl(218deg 63% 54%) 61%,
            hsl(225deg 57% 55%) 69%,
            hsl(234deg 51% 57%) 79%,
            hsl(246deg 46% 55%) 100%
          )`,
        }}

        // css={`
        //   background: radial-gradient(
        //     at right top,
        //     hsl(199deg 73% 52%) 0%,
        //     hsl(200deg 74% 50%) 21%,
        //     hsl(202deg 76% 49%) 30%,
        //     hsl(205deg 74% 50%) 39%,
        //     hsl(208deg 71% 51%) 46%,
        //     hsl(213deg 67% 52%) 54%,
        //     hsl(218deg 63% 54%) 61%,
        //     hsl(225deg 57% 55%) 69%,
        //     hsl(234deg 51% 57%) 79%,
        //     hsl(246deg 46% 55%) 100%
        //   );
        // `}
      >
        <StyledHeader
          className="header-nav"
          marginLeft={16}
          marginTop={16}
          display="inline-flex"
          style={{ gap: "0.7rem" }}
        >
          <NavLink
            as={Link}
            to={`${startingEndpoint}dashboard`}
            id="NavLink--Terms"
            className="nav-item"
            style={{ padding: "0px" }}
          >
            Terms
          </NavLink>
          <NavLink
            as={Link}
            to={`${startingEndpoint}dashboard`}
            id="NavLink--Conditions"
            className="nav-item"
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            Conditions
          </NavLink>
        </StyledHeader>

        <Section
          display={["none", "unset"]}
          className="welcome-text"
          position={["relative", "absolute"]}
          textAlign={["center !important", "left !important"]}
          color="white"
          bottom={["-25%", 26]}
          left={[null, "5rem !important"]}
        >
          <Box typeStyle="h3" color="lightBlue400">
            Welcome to
          </Box>
          <H1 typeStyle="displayLarge" fontWeight={900}>
            CenterPoint
          </H1>
          <Box typeStyle="h6" color="lightBlue400">
            Your risk mitigation platform
          </Box>
        </Section>
      </Flex.Col>

      <StyledFlexCol
        className="right-panel"
        // colWidth={5}
        colWidth={[12, 4]}
        justifyContent="center"
        display={"flex"}
        textAlign="center"
        // alignItems="center"
        backgroundColor="white"
        mt={[160, null]}
        pb={[5, null]}
      >
        <Box width="75%">
          <Example mb={10} mt={["-3rem", 10]}>
            <img src={logo} alt="CenterPoint Logo" width={200} />
          </Example>
          <Box>
            <Routes>
              <Route path={`/`}>
                <Route
                  index
                  element={
                    <LoginForm
                      startingEndpoint={startingEndpoint}
                      passwordVisible={passwordVisible}
                      setPasswordVisible={setPasswordVisible}
                    />
                  }
                />
                <Route
                  path="/forgot/"
                  element={<Forgot startingEndpoint={startingEndpoint} />}
                />
                <Route
                  path="/emailsent"
                  element={<EmailSent startingEndpoint={startingEndpoint} />}
                />
                <Route
                  path="newpassword"
                  element={<NewPassword startingEndpoint={startingEndpoint} />}
                />
              </Route>
            </Routes>
          </Box>
        </Box>
      </StyledFlexCol>
    </StyledFlex>
  );
}
