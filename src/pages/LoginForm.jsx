import React from "react";
import * as yup from "yup";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Box,
  FormGroup,
  sleep,
  SubmitButton,
  ButtonGroup,
  Icon,
  ButtonDiv,
} from "@allied-solutions/affinity";
import { Form, Formik } from "formik";
import { Eye, EyeOff } from "@allied-solutions/affinity-react-icons/dist/16px";
import styled from "styled-components";
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
`;
const LoginForm = ({ passwordVisible, setPasswordVisible }) => {
  const location = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          username: "", // key must match `id` of `FormGroup`
          password: "",
        }}
        validationSchema={yup.object().shape({
          username: yup.string().required("Please fill out this field."),
          password: yup
            .string()
            .oneOf(
              ["ball"],
              'Incorrect password. Please try again or click "Forgot password" to reset your password.'
            )
            .required("Please fill out this field."),
        })}
        onSubmit={async (values, formProps) => {
          await sleep(2000);
          // submit(values, { method: "post" });
          if (values.password === "ball") {
            location("/dashboard");
          }
        }}
      >
        {(formProps) => {
          return (
            <Form>
              <Box>
                <FormGroup id="username" required>
                  <FormGroup.Label visible>Username</FormGroup.Label>
                  <FormGroup.InputGroup size={"md"}>
                    <FormGroup.InputGroup.Input placeholder="I am a text input" />
                  </FormGroup.InputGroup>
                  <FormGroup.Caption />
                </FormGroup>

                <FormGroup id="password" required>
                  <FormGroup.Label visible>Password</FormGroup.Label>
                  <FormGroup.InputGroup
                    size={"md"}
                    append={
                      <ButtonDiv
                        id="password-visibility"
                        typeStyle="input"
                        textAlign="center"
                        color="gray400"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        <Icon
                          src={passwordVisible ? Eye : EyeOff}
                          alt={"see password icon"}
                        />
                      </ButtonDiv>
                    }
                  >
                    <FormGroup.InputGroup.Input
                      placeholder="password"
                      type={passwordVisible ? "text" : "password"}
                    />
                  </FormGroup.InputGroup>
                  <FormGroup.Caption />
                </FormGroup>
                <ButtonGroup
                  stretch
                  display="grid !important"
                  justifyContent="unset"
                  mt={[0, 58]}
                >
                  <ButtonGroup.Button
                    id="EntryForm_ButtonGroup--submit"
                    as={SubmitButton}
                    rounded
                    formikProps={formProps}
                  >
                    Submit
                  </ButtonGroup.Button>
                  <StyledBtn
                    as={Link}
                    to="/forgot"
                    id="buttongroup-forgot-password"
                    size="sm"
                    style={{
                      marginLeft: "unset",
                      marginTop: "26px",
                    }}
                  >
                    Forgot Password
                  </StyledBtn>
                </ButtonGroup>
              </Box>{" "}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
