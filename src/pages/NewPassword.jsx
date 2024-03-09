import React from 'react'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import {
  H2,
  Box,
  FormGroup,
  sleep,
  SubmitButton,
  ButtonGroup,
  Ul,
  Li,
  P,
  Icon,
  ButtonDiv,
} from '@allied-solutions/affinity'
import { Form, Formik } from 'formik'
import { Check } from '@allied-solutions/affinity-react-icons/dist/16px'
import styled from 'styled-components'
export const StyledBtn = styled(ButtonGroup.Button)`
  &:hover,
  :active,
  :focus,
  :focus-visible {
    background: unset !important;
    color: unset !important;
  }

  font-weight: 500 !important;
`

const StyledInput = styled(FormGroup.InputGroup)`
  ${(props) => props.isMatched && `border-color: ${props.theme.colors.success} !important;`};
`
const NewPassword = ({ passwordVisible, setPasswordVisible }) => {
  const location = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          passwordconfirm: '', // key must match `id` of `FormGroup`
          password: '',
        }}
        validationSchema={yup.object().shape({
          passwordconfirm: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required('Please fill out this field.'),

          password: yup.string().required('Please fill out this field.'),
        })}
        onSubmit={async (values, formProps) => {
          await sleep(2000)
          formProps.setStatus('success')
          if (values.password === 'ball') {
            location('/dashboard')
          }
        }}
      >
        {(formProps) => {
          console.log('formProps', formProps)
          return (
            <Form>
              <Box>
                <H2 textAlign="left" typeStyle="h5">
                  Create a new password
                </H2>
                <P textAlign="left" typeStyle="caption">
                  Your new password must:
                </P>
                <Ul textAlign="left" resetStyles={false} typeStyle="caption" pl="18px !important" mb={10}>
                  <Li>Be at least 10 characters </Li>
                  <Li> Include one upper case letter</Li>
                  <Li> Include one lower case letter </Li>
                  <Li> Include a special character</Li>
                </Ul>
                <FormGroup id="password" required>
                  <FormGroup.Label visible>New Password</FormGroup.Label>
                  <FormGroup.InputGroup size={'md'}>
                    <FormGroup.InputGroup.Input variant={'success'} placeholder="I am a text input" type={'password'} />
                  </FormGroup.InputGroup>
                  <FormGroup.Caption />
                </FormGroup>
                <FormGroup id="passwordconfirm" required>
                  <FormGroup.Label visible>Confirm Password</FormGroup.Label>
                  <StyledInput
                    size={'md'}
                    isMatched={
                      formProps.values.passwordconfirm.length > 0 &&
                      formProps.values.passwordconfirm === formProps.values.password
                    }
                    append={
                      formProps.values.passwordconfirm.length > 0 &&
                      formProps.values.passwordconfirm === formProps.values.password ? (
                        <Icon color="success" src={Check} alt={'see password icon'} />
                      ) : null
                    }
                  >
                    <FormGroup.InputGroup.Input placeholder="password" type={'password'} />
                  </StyledInput>
                  <FormGroup.Caption />
                </FormGroup>
                <ButtonGroup stretch display="grid !important" justifyContent="unset" mt={[0, 58]}>
                  <ButtonGroup.Button
                    id="EntryForm_ButtonGroup--submit"
                    as={SubmitButton}
                    rounded
                    formikProps={formProps}
                  >
                    Save and continue
                  </ButtonGroup.Button>
                </ButtonGroup>
              </Box>{' '}
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default NewPassword
