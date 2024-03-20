import React, { useState, useRef } from "react";
import { links, footerLinks } from "../Navigation/SideBarData";
import logo from "../../assets/CPimg.svg";
import {
  ChevronDown,
  ChevronUp,
  CollapseLeft,
  CollapseRight,
} from "@allied-solutions/affinity-react-icons/dist/16px";
import {
  Aside,
  Avatar,
  Box,
  Button,
  ButtonDiv,
  ButtonUnstyled,
  Collapse,
  Header,
  Icon,
  Li,
  Span,
  Ul,
} from "@allied-solutions/affinity";
import styled, { ThemeProvider, css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalNavStyle = createGlobalStyle`
:root {
  --white: #fffdff;
  --dark-blue: #0f0d18;
  --dark-purple: #1e1b30;
  --light-blue: #e5e9f6;
  --rounded-xs: 0.2rem;
  --rounded-sm: 0.5rem;
  --rounded-md: 1rem;
}
  html {
    font-size: 62.5% !important;
  }


  header,
  main {
    transition: left .5s;
  }
.header-content {
    margin-left: 0;
    left: 8rem;
    /* position: absolute;  */
}
.main-content {
    margin-left: 0;
    left: 8rem;
    position: absolute; 
}

.header-content.with-sidebar,
  .main-content.with-sidebar {
    margin-left: 0;
    position: absolute;
    /* background: orange; */
    left: 250px;
  }

`;

const StyledAside = styled(Aside)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  height: 100%;
  width: 25rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: linear-gradient(177deg, #1d253f 0.12%, #231d39 99.88%);
  overflow-x: hidden;
  transition: width 0.3s ease-in-out;
  padding: 3rem 2rem 2rem 2rem;
  z-index: 9999;
  ${(props) =>
    props.activeBar &&
    css`
      width: 8rem;
    `}
`;
const StyledSpan = styled(Span)`
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;

  ${(props) =>
    props.activeBar &&
    css`
      opacity: 0;
      display: none;
    `}
`;

const StyledSpanName = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;

  ${(props) =>
    props.activeBar &&
    css`
      opacity: 0;
    `}
`;
const StyledIconButton = styled(ButtonUnstyled)``;

const StyledHeader = styled(Header)`
  position: relative;
  display: flex;
  align-items: center;
  height: 4rem;
  margin-bottom: 3rem;

  ${(props) =>
    props.activeBar &&
    css`
      figure {
        opacity: 0;
      }
    `}
  img {
    width: 100%;
  }

  ${StyledIconButton} {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    color: var(--light-blue);
    background-color: var(--dark-purple);
    font-size: 2rem;
    border-radius: var(--rounded-md);
  }
`;

const StyledButtonTrigger = styled(ButtonDiv)`
  display: flex;
  align-items: center;
  height: 4rem;
  color: var(--light-blue);
  border-radius: var(--rounded-md);
  text-decoration: none;
  transition: background-color, color, 0.3s ease-in-out;

  &:hover {
    background-color: #0070b9;
    color: white;
  }
`;

const StyledListItems = styled(Ul)`
  list-style: none;
  font-weight: 700;
  ${Li} {
    position: relative;
    margin-bottom: 1rem;
  }

  ${StyledButtonTrigger} {
    position: relative;
    margin-bottom: 1rem;

    ${Icon} {
      display: grid;
      place-content: center;
      min-width: 4rem;
      min-height: 4rem;
      font-size: 1.6rem;
    }

    ${Span} {
      font-size: 1.3rem;
      white-space: nowrap;
      transition: opacity 0.3s ease-in-out;

      ${(props) => {
        return (
          props.theme.activeBar &&
          css`
            opacity: 0;
          `
        );
      }}
    }
  }
`;

const StyledAccountBtnDiv = styled(ButtonDiv)`
  /* position: absolute; */
  left: 0;
  /* bottom: 0; */
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 0.5rem 2rem;
  color: var(--light-blue);
  background-color: var(--dark-purple);
  white-space: nowrap;
`;

const StyledCollapse = styled(Collapse)`
  margin-left: 3rem;

  ${(props) => {
    return (
      props.activeBar &&
      css`
        max-height: 500px; /* Set a maximum height for animation */
        transition: max-height 0.3s ease-in-out; /* Add transition for smooth animation */
      `
    );
  }}
`;

export default function Navigation({ activeBar, setActiveBar }) {
  const triggerRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(true);

  const [subListVisibility, setSubListVisibility] = useState(
    links.map((i) => false)
  );
  const [activeSublistIndices, setActiveSublistIndices] = useState([]);

  const toggleSubList = (index) => {
    setSubListVisibility((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Function to toggle the visibility of all sublists for when leaving endpoint
  const toggleAllSublists = (isVisible) => {
    setSubListVisibility(links.map(() => isVisible));
  };
  const handleStyledIconButtonClick = () => {
    // If activeBar is false, uncollapse originally collapsed sublists
    if (!activeBar) {
      // Find the indices of the currently expanded sublists
      const expandedIndices = subListVisibility.reduce(
        (indices, visibility, index) => {
          if (visibility) {
            indices.push(index);
          }
          return indices;
        },
        []
      );

      // Save the indices of the currently expanded sublists
      setActiveSublistIndices(expandedIndices);

      // Uncollapse all sublists
      setSubListVisibility(links.map(() => activeBar));
      // Toggle the state of activeBar
      setTimeout(() => {
        setActiveBar(!activeBar);
      }, 300);
    } else {
      // If activeBar is true, restore the sublists that were expanded before
      if (activeSublistIndices.length > 0) {
        const updatedSubListVisibility = subListVisibility.map(
          (visibility, index) => {
            // Restore the sublists that were expanded before
            return activeSublistIndices.includes(index);
          }
        );

        // Update the state to restore the previously expanded sublists

        setTimeout(() => {
          setSubListVisibility(updatedSubListVisibility);
        }, 300);
      }
      // Toggle the state of activeBar

      setActiveBar(!activeBar);
    }
  };
  console.log("subvisibility");
  const triggerFooterRef = React.useRef(null);
  const [isFooterOpen, setIsFooterOpen] = React.useState(false);
  console.log("APPLE", activeBar);
  return (
    <>
      <GlobalNavStyle />
      <StyledAside
        activeBar={activeBar}
        className={`sidebar ${activeBar && "active"}`}
      >
        <StyledHeader activeBar={activeBar} className="header">
          <figure className="logo-container">
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ filter: "invert(1)" }}
            />
          </figure>

          <StyledIconButton
            id="toggle-sidebar-btn"
            className="toggle-sidebar-btn"
            onClick={handleStyledIconButtonClick}
            // onClick={() => {
            //   setActiveBar(!activeBar), toggleAllSublists(false);
            // }}
          >
            <Icon
              src={activeBar ? CollapseRight : CollapseLeft}
              color="white"
            />
          </StyledIconButton>
        </StyledHeader>
        {/* <button onClick={() => toggleAllSublists(false)}>HAPPY</button> */}

        <ThemeProvider theme={{ activeBar: activeBar }}>
          <StyledListItems className="list-items">
            {links.map((item, index) => (
              <div key={index} style={{ color: "white" }}>
                <StyledButtonTrigger onClick={() => toggleSubList(index)}>
                  <Icon src={item.icon} />
                  <Span>{item.title}</Span>
                  {item.subList && (
                    <StyledSpan activeBar={activeBar}>
                      <Icon
                        src={subListVisibility[index] ? ChevronUp : ChevronDown}
                      />
                    </StyledSpan>
                  )}
                </StyledButtonTrigger>
                {item.subList && !activeBar && (
                  <StyledCollapse
                    // isOpen={false}
                    isOpen={subListVisibility[index]}
                    triggerRef={triggerRef}
                    onHide={() => console.log("hide")}
                    onHidden={() => console.log("hidden")}
                    onShow={() => console.log("show")}
                    onShown={() => console.log("shown")}
                  >
                    <ul style={{ listStyle: "none" }}>
                      {item.subList.map((subItem, subIndex) => (
                        <StyledButtonTrigger
                          key={subIndex}
                          style={{ padding: "0rem 1rem" }}
                        >
                          {subItem.title}
                        </StyledButtonTrigger>
                      ))}
                    </ul>
                  </StyledCollapse>
                )}
              </div>
            ))}
          </StyledListItems>
        </ThemeProvider>

        <footer style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
          <ThemeProvider theme={{ activeBar: activeBar }}>
            <StyledListItems
              className="list-items"
              style={{ margin: "0 2rem" }}
            >
              {footerLinks.map(({ title, icon, link }, index) => (
                <Li key={index} className="item">
                  <StyledButtonTrigger className="link" href={link}>
                    <Icon src={icon} className="link-icon" />

                    <Span className="link-name">{title}</Span>
                  </StyledButtonTrigger>
                </Li>
              ))}
            </StyledListItems>
          </ThemeProvider>

          <StyledAccountBtnDiv
            className="logout-btn"
            ref={triggerFooterRef}
            id="Button--collapseBasicUsage"
            onClick={() => {
              setIsFooterOpen((isFooterOpen) => !isFooterOpen);
              toggleAllSublists(false);
            }}
          >
            <div>
              <Avatar>WW</Avatar>
            </div>
            <div>
              <StyledSpanName activeBar={activeBar}>
                Hello, Waldo
              </StyledSpanName>
            </div>
            <StyledSpan activeBar={activeBar}>
              <Icon src={ChevronDown} />
            </StyledSpan>
          </StyledAccountBtnDiv>
          <Collapse
            color="white"
            backgroundColor={"#1e1b30"}
            padding="0px 1rem"
            id="Collapse--basicUsage"
            isOpen={isFooterOpen}
            triggerRef={triggerFooterRef}
            onHide={() => console.log("hide")}
            onHidden={() => console.log("hidden")}
            onShow={() => console.log("show")}
            onShown={() => console.log("shown")}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              alias sed commodi a vero accusamus molestiae quidem excepturi
              libero animi suscipit deleniti eveniet cupiditate, non odit, et
              sequi molestias voluptatibus!
            </p>
          </Collapse>
        </footer>
      </StyledAside>
    </>
  );
}
