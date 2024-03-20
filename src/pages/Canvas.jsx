import {
  Anchor,
  Box,
  Button,
  ButtonGroup,
  Caption,
  Flex,
  H1,
  H2,
  H3,
  H4,
  IconContainer,
  Input,
  InputGroup,
  Label,
  P,
  Tile,
  Toggle,
} from "@allied-solutions/affinity";
import { Document3Text } from "@allied-solutions/affinity-react-icons/dist/16px";
import React from "react";
import styled from "styled-components";
import Tiled from "../components/Tile";
import { DragDrop } from "../components/DragAndDrop";
import { Link } from "react-router-dom";
export const StyledBtn = styled(ButtonGroup.Button)`
  &:hover,
  :active,
  :focus,
  :focus-visible {
    background: unset !important;
    color: unset !important;
  }

  font-weight: 500 !important;
  text-decoration: unset !important;
  border: none;
`;
export default function Canvas() {
  const [value, setValue] = React.useState(false);
  const content = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <Flex>
      <Flex.Col colWidth={9}>
        <H1>Dashboard</H1>
      </Flex.Col>
      <Flex.Col colWidth={2}>
        <Toggle
          id="page--toggle--waterFlow"
          label="Drag N Drop"
          checked={value}
          onChange={() => setValue((value) => !value)}
        />
      </Flex.Col>
      <Flex.Col colWidth={1}>Reset fields</Flex.Col>
      <Flex.Col>
        <DragDrop>
          {/* <Tile m={12}>
          <Tile.Header display="inline-flex" justifyContent="space-between">
            <div style={{ display: "inline-flex" }}>
              <IconContainer
                icon={Document3Text}
                color="#0070B9"
                backgroundColor="#F0F7FC"
              />
              <H2
                ml={5}
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                Request a Service
              </H2>
            </div>

            <Button as={Link} to={`forgot`}>
              Start a request
            </Button>
          </Tile.Header>
          <P>
            Enter your service type, provider if needed, and VIN to start your
            service request.
          </P>
          <InputGroup size="md">
            {" "}
            <InputGroup.Input id="input" placeholder="I am a text input" />
          </InputGroup>
          <Box
            display="flex"
            alignItems="center"
            borderRadius={2}
            m={4}
            px={3}
            pb={2}
            pt={3}
            border={"1px solid orange"}
            backgroundColor={"#FFF9F5"}
          >
            <div>
              <H3>Important Coverage Updates</H3>
              <IconContainer size="xsmall" backgroundColor="orange" />
              <P typeStyle="label" fontWeight={1} ml={4} mb={0}>
                Flood, Equipment, and Collateral Type Personal Condominium:
                We've temporarily disabled the feature that allows you to upload
                documents within a loan. Don't worry, you can still submit
                information via the form, or upload the insurance files here.
              </P>
            </div>
          </Box>

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
                Submit
              </ButtonGroup.Button>
            </ButtonGroup>
          </Tile.Footer>
        </Tile> */}
          <Tile m={12}>
            <Tile.Header display="inline-flex">
              <IconContainer
                icon={Document3Text}
                color="orange1000"
                backgroundColor="orange200"
              />
              <H2
                ml={5}
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                Submit Insurance
              </H2>
            </Tile.Header>
            <P>
              To submit insurance use the field below to tpe in the known
              information and click "Go to this loan"{" "}
            </P>
            <Label htmlFor="withLabel" mb={1}>
              Find Loan
            </Label>
            <InputGroup size="md">
              {" "}
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
            <Box
              display="flex"
              alignItems="center"
              borderRadius={2}
              m={4}
              px={3}
              pb={2}
              pt={3}
              border={"1px solid orange"}
              backgroundColor={"#FFF9F5"}
            >
              <div>
                <H3>Important Coverage Updates</H3>
                <IconContainer size="xsmall" backgroundColor="orange" />
                <P typeStyle="label" fontWeight={1} ml={4} mb={0}>
                  Flood, Equipment, and Collateral Type Personal Condominium:
                  We've temporarily disabled the feature that allows you to
                  upload documents within a loan. Don't worry, you can still
                  submit information via the form, or upload the insurance files
                  here.
                </P>
              </div>
            </Box>

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
                  Go to this Loan
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>

          <Tile m={12}>
            <Tile.Header display="inline-flex" justifyContent="space-between">
              <div style={{ display: "inline-flex" }}>
                <IconContainer
                  icon={Document3Text}
                  color="red"
                  backgroundColor="#FDF0F1"
                />
                <H2
                  ml={5}
                  fontSize={3}
                  typeStyle={"labelLarge"}
                  color="gray1000"
                  fontWeight="bold"
                >
                  File a New Claim
                </H2>
              </div>
              <Button as={Link} to={`forgot`}>
                View All Open Claims
              </Button>
            </Tile.Header>
            <P>
              Enter your service type, provider if needed, and VIN to start your
              service request.
            </P>
            <Flex>
              <Flex.Col colWidth={6}>
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
              <Flex.Col colWidth={6}>
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
              <Flex.Col>
                {" "}
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
                <Caption color="info">
                  Claim Type and VIN are disabled until a Policy Type is
                  selected.
                </Caption>
              </Flex.Col>
            </Flex>

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
                  Start a claim
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>

          <Tile m={12}>
            <Tile.Header display="inline-flex">
              <IconContainer
                icon={Document3Text}
                color="green"
                backgroundColor="#F3FDF9"
              />
              <H2
                ml={5}
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                Download Reports
              </H2>
            </Tile.Header>
            <P>
              Looking for a report? If you know the name of it, you can search
              by the report name below. To narrow down your results, select a
              date range for when it would have been created, then click “Load
              reports.”{" "}
            </P>
            <Flex>
              <Flex.Col colWidth={12}>
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
              <Flex.Col colWidth={6}>
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
              <Flex.Col colWidth={6}>
                {" "}
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
            </Flex>
            <Tile.Footer>
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
                    Load Reports
                  </ButtonGroup.Button>
                </ButtonGroup>
              </Tile.Footer>
            </Tile.Footer>
          </Tile>
          <Tile m={12}>
            <Tile.Header display="inline-flex">
              <IconContainer
                icon={Document3Text}
                color="#0070B9"
                backgroundColor="#F0F7FC"
              />
              <H2
                ml={5}
                fontSize={3}
                typeStyle={"labelLarge"}
                color="gray1000"
                fontWeight="bold"
              >
                Request a service
              </H2>
            </Tile.Header>
            <P>
              Enter your service type, provider if needed, and VIN to start your
              service request.
            </P>
            <Flex>
              <Flex.Col colWidth={6}>
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
              <Flex.Col colWidth={6}>
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
              </Flex.Col>
              <Flex.Col>
                {" "}
                <Label htmlFor="withLabel" mb={1}>
                  I am a label
                </Label>
                <InputGroup size="md">
                  <InputGroup.Input
                    id="input"
                    placeholder="I am a text input"
                  />
                </InputGroup>
                <Caption color="info">
                  Claim Type and VIN are disabled until a Policy Type is
                  selected.
                </Caption>
              </Flex.Col>
            </Flex>

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
                  Start a request
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>
          {/* {content.map((item) => (
          <Tile m={12}>
            <Tile.Header display="inline-flex" justifyContent="space-between">
              <div style={{ display: "inline-flex" }}>
                <IconContainer
                  icon={Document3Text}
                  color="#0070B9"
                  backgroundColor="#F0F7FC"
                />
                <H2
                  ml={5}
                  fontSize={3}
                  typeStyle={"labelLarge"}
                  color="gray1000"
                  fontWeight="bold"
                >
                  Request a Service
                </H2>
              </div>

              <Button as={Link} to={`forgot`}>
                Start a request
              </Button>
            </Tile.Header>
            <P>
              Enter your service type, provider if needed, and VIN to start your
              service request.
            </P>
            <InputGroup size="md">
              {" "}
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
            <Box
              display="flex"
              alignItems="center"
              borderRadius={2}
              m={4}
              px={3}
              pb={2}
              pt={3}
              border={"1px solid orange"}
              backgroundColor={"#FFF9F5"}
            >
              <div>
                <H3>Important Coverage Updates</H3>
                <IconContainer size="xsmall" backgroundColor="orange" />
                <P typeStyle="label" fontWeight={1} ml={4} mb={0}>
                  Flood, Equipment, and Collateral Type Personal Condominium:
                  We've temporarily disabled the feature that allows you to
                  upload documents within a loan. Don't worry, you can still
                  submit information via the form, or upload the insurance files
                  here.
                </P>
              </div>
            </Box>

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
                  Submit
                </ButtonGroup.Button>
              </ButtonGroup>
            </Tile.Footer>
          </Tile>
        ))} */}
        </DragDrop>
      </Flex.Col>
      <Flex.Col colWidth={12}>
        <Box
          backgroundColor={"#FDE2CA"}
          mt={16}
          mb={36}
          style={{ display: "inline-flex" }}
          p={10}
        >
          <Box p={4} width="-webkit-fill-available">
            <H2>Help us improve CenterPoint</H2>
            <Button size="lg" boxShadow="none">
              Share your feedback
            </Button>
          </Box>
          <Box p={4}>
            Your feedback is invaluable to us. As we strive to enhance our
            platform, understanding how you interact with this dashboard is
            essential. If you encounter any issues or have suggestions on how we
            can serve you better, please let us know. We appreciate your time
            and commitment to helping us refine our services for everyone.
          </Box>
        </Box>
      </Flex.Col>
    </Flex>
  );
}
