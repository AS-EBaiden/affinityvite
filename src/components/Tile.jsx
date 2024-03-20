import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  H2,
  H3,
  IconContainer,
  InputGroup,
  Label,
  P,
  Tile,
} from "@allied-solutions/affinity";
import { Link } from "react-router-dom";

import React from "react";
import { StyledBtn } from "../pages/Dashboard/Dashboard";

export default function Tiled({
  children,
  icon,
  colWidth,
  mb,
  iconColor,
  iconBackgroundColor,
  headerText,
  descriptionParagraph,
  submitText,
  headerLink,
}) {
  return (
    <Flex.Col colWidth={colWidth} mb={mb}>
      <Tile m={12}>
        <Tile.Header display="inline-flex" justifyContent="space-between">
          <div style={{ display: "inline-flex" }}>
            <IconContainer
              icon={icon}
              color={iconColor}
              backgroundColor={iconBackgroundColor}
            />
            <H2
              ml={5}
              fontSize={3}
              typeStyle={"labelLarge"}
              color="gray1000"
              fontWeight="bold"
            >
              {headerText}
            </H2>
          </div>
          {headerLink ? (
            <Button as={Link} to={`forgot`}>
              {headerLink}
            </Button>
          ) : (
            ""
          )}
        </Tile.Header>
        <P>{descriptionParagraph} </P>
        {children}
        <Tile.Footer>
          <ButtonGroup justifyContent="flex-end">
            <StyledBtn
              id="Tile__Button--cancel"
              variant="darkGray"
              outlined
              rounded
            >
              Reset Fields
            </StyledBtn>
            <ButtonGroup.Button id="Tile__Button--next" rounded>
              {submitText}
            </ButtonGroup.Button>
          </ButtonGroup>
        </Tile.Footer>
      </Tile>
    </Flex.Col>
  );
}
