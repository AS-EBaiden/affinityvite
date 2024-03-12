import React from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
  Anchor,
  Box,
  H2,
  P,
  ButtonGroup,
  ButtonAnchor,
  ButtonUnstyled,
  Span,
  Modal,
  Button,
  useSessionTimer,
} from "@allied-solutions/affinity";
import styled from "styled-components";
import { ArrowLeft } from "@allied-solutions/affinity-react-icons/dist/16px";
import { IdleTimeout } from "../components/IdleTimeout";
const StyledBtn = styled(ButtonGroup.Button)`
  color: pink;
  @media screen and (max-height: 600px) {
    margin-top: unset;
  }
`;
const StyledAnchorLink = styled(Anchor)`
  text-decoration: none;
`;
const EmailSent = ({ startingEndpoint }) => {
  const [value, setValue] = React.useState(5);
  const [isOpen, setIsOpen] = React.useState(false);
  let location = useNavigate();

  const sessionTimer = useSessionTimer({
    expireSessionFn: () => Promise.resolve(console.log("session expired")), // must return a Promise
    extendSessionFn: () => Promise.resolve(console.log("session extended")), // must return a Promise
    sessionDuration: 3,
    warningThreshold: 40,
  });
  return (
    <>
      <>
        <IdleTimeout
          {...sessionTimer}
          logoutButtonProps={{
            onClick: () => {
              console.log("logged out");
              sessionTimer.handleExpireSession(); // may not call this here, this is just for the example
            },
          }}
          loginButtonProps={{
            onClick: () => {
              sessionTimer.handleExtendSession(); // definitely wouldn't call this here, this is just for the example
              setTimeout(() => {
                location(`/newpassword`);
              }, 200);
            },
          }}
        />
      </>
      <H2 textAlign="left" typeStyle="h5">
        Email Sent
      </H2>
      <P textAlign="left" typeStyle="bodySmall">
        We've received your request to reset your password. Please check your
        email for instructions on how to complete the process.
      </P>
      <P textAlign="left" typeStyle="caption">
        Didn’t receive the email? That’s ok, click{" "}
        <StyledAnchorLink
          as={Link}
          to={`/newpassword`}
          typeStyle="caption"
          fontWeight="500"
          color="blue"
        >
          send again
        </StyledAnchorLink>{" "}
        to or{" "}
        <StyledAnchorLink
          textDecoration="none"
          as={Link}
          to={`/newpassword`}
          typeStyle="caption"
          fontWeight="500"
          color="blue"
        >
          chat with support
        </StyledAnchorLink>{" "}
        to solve this issue.
      </P>
      <ButtonGroup
        stretch
        justifyContent="unset"
        // width={[null, "max-content !important"]}
      >
        <StyledBtn
          mt={26}
          id={`EmailSent_ButtonGroup--submit`}
          rounded
          forwardedAs={Link}
          to={`/`}
          iconPos="left"
          icon={ArrowLeft}
          size="md"
        >
          Back to Sign In
        </StyledBtn>
      </ButtonGroup>
    </>
  );
};

export default EmailSent;
