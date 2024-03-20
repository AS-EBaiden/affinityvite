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
import Tiled from "../../components/Tile";
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
export default function Dashboard() {
  const [value, setValue] = React.useState(false);
  return (
    <Flex
      className="Dashboard-Flex-Main"
      margin={"9rem 0 0 0 !important"}
      mt={36}
    >
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
      <Tiled
        icon={Document3Text}
        colWidth={[6]}
        mb={18}
        iconColor="orange1000"
        color="orange1000"
        iconBackgroundColor="orange200"
        headerText={" Submit Insurance"}
        descriptionParagraph={
          'To submit insurance use the field below to tpe in the known information and click "Go to this loan"'
        }
        submitText="Go to this loan"
      >
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
              Flood, Equipment, and Collateral Type Personal Condominium: We've
              temporarily disabled the feature that allows you to upload
              documents within a loan. Don't worry, you can still submit
              information via the form, or upload the insurance files here.
            </P>
          </div>
        </Box>
      </Tiled>

      <Tiled
        icon={Document3Text}
        colWidth={[6]}
        mb={18}
        iconColor="red"
        iconBackgroundColor="#FDF0F1"
        headerText={"File a New Claim"}
        descriptionParagraph={
          "Enter your policy type, claim type, and VIN to begin. Keep in mind that different policies allow you to submit different types of claims."
        }
        submitText="Start a claim"
        headerLink={"View All Open Claims"}
      >
        <Flex>
          <Flex.Col colWidth={6}>
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
          <Flex.Col colWidth={6}>
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
          <Flex.Col>
            {" "}
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
            <Caption color="info">
              Claim Type and VIN are disabled until a Policy Type is selected.
            </Caption>
          </Flex.Col>
        </Flex>
      </Tiled>

      <Tiled
        icon={Document3Text}
        colWidth={[6]}
        mb={18}
        iconColor="green"
        iconBackgroundColor="#F3FDF9"
        headerText={"Download Reports"}
        descriptionParagraph={`Looking for a report? If you know the name of it, you can search by
the report name below. To narrow down your results, select a date
range for when it would have been created, then click “Load
reports.”`}
        submitText="Load reports"
      >
        <Flex>
          <Flex.Col colWidth={12}>
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
          <Flex.Col colWidth={6}>
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
          <Flex.Col colWidth={6}>
            {" "}
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
        </Flex>
      </Tiled>

      <Tiled
        icon={Document3Text}
        colWidth={[6]}
        mb={18}
        iconColor="#0070B9"
        iconBackgroundColor="#F0F7FC"
        headerText={" Request a Service"}
        descriptionParagraph={`Enter your service type, provider if needed, and VIN to start your
        service request.`}
        submitText="Start a request"
      >
        <Flex>
          <Flex.Col colWidth={6}>
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
          <Flex.Col colWidth={6}>
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
          </Flex.Col>
          <Flex.Col>
            {" "}
            <Label htmlFor="withLabel" mb={1}>
              I am a label
            </Label>
            <InputGroup size="md">
              <InputGroup.Input id="input" placeholder="I am a text input" />
            </InputGroup>
            <Caption color="info">
              Provider and VIN are disabled until a Service Type is selected.{" "}
            </Caption>
          </Flex.Col>
        </Flex>
      </Tiled>

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
