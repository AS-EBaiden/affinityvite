import React from "react";
import { Check } from "@allied-solutions/affinity-react-icons/dist/16px";
import Navigation from "../components/Navigation";
import "../components/Navigation/styles/index.css";
import {
  H1,
  Section,
  Nav,
  Flex,
  Box,
  Span,
  NavLink,
  Tile,
  ButtonGroup,
  H2,
  P,
  css,
} from "@allied-solutions/affinity";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../assets/CPimg.svg";

const StyledHeader = styled(Nav)``;
const StyledFlex = styled(Flex)``;
const StyledFlexCol = styled(Flex.Col)`
  max-width: 250px !important;
`;

export default function Sample({ startingEndpoint }) {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <StyledFlex
      className="login-page"
      margin="auto !important"
      minHeight={["100vh"]}
    >
      <StyledFlexCol
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
            to={`dashboard`}
            id="NavLink--Terms"
            className="nav-item"
            style={{ padding: "0px" }}
          >
            Terms
          </NavLink>
          <NavLink
            as={Link}
            to={`dashboard`}
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
          textAlign={["center !important", "left !important"]}
          color="white"
        >
          <Box typeStyle="h3" color="lightBlue400">
            Welcome to
          </Box>
          <h1>hello world</h1>
          <Box typeStyle="h6" color="lightBlue400">
            Your risk mitigation platform
          </Box>
        </Section>
      </StyledFlexCol>

      <Flex.Col>
        <Box>
          <Tile m={12}>
            <Tile.Header>
              <H2
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                This is a tile
              </H2>
            </Tile.Header>
            <P>
              Some content Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non doloribus omnis, architecto soluta quisquam molestiae
              nisi voluptate libero dolor harum aspernatur est exercitationem
              deleniti tempore perferendis impedit vitae earum aliquid.
            </P>
            <Tile.Footer>
              <ButtonGroup justifyContent="space-between">
                <ButtonGroup.Button
                  id="Tile__Button--cancel"
                  variant="darkGray"
                  outlined
                  rounded
                >
                  Cancel
                </ButtonGroup.Button>
                <ButtonGroup.Button id="Tile__Button--next" rounded>
                  Next
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>

          <Tile m={12}>
            <Tile.Header>
              <H2
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                This is a tile
              </H2>
            </Tile.Header>
            <P>
              Some content Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non doloribus omnis, architecto soluta quisquam molestiae
              nisi voluptate libero dolor harum aspernatur est exercitationem
              deleniti tempore perferendis impedit vitae earum aliquid.
            </P>
            <Tile.Footer>
              <ButtonGroup justifyContent="space-between">
                <ButtonGroup.Button
                  id="Tile__Button--cancel"
                  variant="darkGray"
                  outlined
                  rounded
                >
                  Cancel
                </ButtonGroup.Button>
                <ButtonGroup.Button id="Tile__Button--next" rounded>
                  Next
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>

          <Tile m={12}>
            <Tile.Header>
              <H2
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                This is a tile
              </H2>
            </Tile.Header>
            <P>
              Some content Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non doloribus omnis, architecto soluta quisquam molestiae
              nisi voluptate libero dolor harum aspernatur est exercitationem
              deleniti tempore perferendis impedit vitae earum aliquid.
            </P>
            <Tile.Footer>
              <ButtonGroup justifyContent="space-between">
                <ButtonGroup.Button
                  id="Tile__Button--cancel"
                  variant="darkGray"
                  outlined
                  rounded
                >
                  Cancel
                </ButtonGroup.Button>
                <ButtonGroup.Button id="Tile__Button--next" rounded>
                  Next
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>
        </Box>
      </Flex.Col>
    </StyledFlex>
  );
}
