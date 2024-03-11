import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
  Anchor,
  Box,
  H2,
  P,
  ButtonGroup,
  ButtonAnchor,
  ButtonUnstyled,
  Span,
} from "@allied-solutions/affinity";
import styled from "styled-components";
import { ArrowLeft } from "@allied-solutions/affinity-react-icons/dist/16px";
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
  return (
    <>
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
          to={`${startingEndpoint}newpassword`}
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
          to={`${startingEndpoint}newpassword`}
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
          to={`${startingEndpoint}`}
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
