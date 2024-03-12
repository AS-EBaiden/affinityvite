import React from "react";
import * as yup from "yup";
import * as Cherr from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  P,
  H2,
  FormGroup,
  sleep,
  SubmitButton,
  ButtonGroup,
} from "@allied-solutions/affinity";
import { Form, Formik } from "formik";
import { StyledBtn } from "./LoginForm";

const Forgot = ({ startingEndpoint }) => {
  let location = useNavigate();
  return (
    <Formik
      initialValues={{
        username: "", // key must match `id` of `FormGroup`
      }}
      validationSchema={yup.object().shape({
        username: yup.string().required("Please fill out this field."),
      })}
      onSubmit={async (values, formProps) => {
        await sleep(2000);
        location(`/emailsent`);
      }}
    >
      {(formProps) => {
        return (
          <Form>
            <Box>
              <H2 textAlign="left" typeStyle="h5">
                Reset Password
              </H2>
              <P textAlign="left" typeStyle="bodySmall" mb={10}>
                Please enter the email address associated with your account to
                receive instructions on how to reset your password.
              </P>
              <FormGroup id="username" required>
                <FormGroup.Label>Username</FormGroup.Label>
                <FormGroup.InputGroup size={"md"}>
                  <FormGroup.InputGroup.Input placeholder="I am a text input" />
                </FormGroup.InputGroup>
                <FormGroup.Caption />
              </FormGroup>

              <ButtonGroup
                stretch
                display="grid !important"
                justifyContent="unset"
              >
                <ButtonGroup.Button
                  id="SendEmail_ButtonGroup--submit"
                  as={SubmitButton}
                  rounded
                  formikProps={formProps}
                >
                  Send Email
                </ButtonGroup.Button>
                <StyledBtn
                  as={Link}
                  to={`/`}
                  id="buttongroup-forgot-password"
                  size="sm"
                  style={{
                    marginLeft: "unset",
                    marginTop: "26px",
                  }}
                >
                  Back to CenterPoint sign in
                </StyledBtn>
              </ButtonGroup>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forgot;
