import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`

const Title = styled.h1`
  white-space: pre-line;
`

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const ConfirmPasswordField = styled(PasswordField)`
  height: 40px;
  font-size: 24px;
`

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`

class SignUpComponent extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
  }

  handleSubmit(values, actions) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        alert(JSON.stringify(values))
      }, 5000)
    });
  }

  handleValidation(values) {
    const errors = {};

    if(!values.email) {
      errors.email = "Email can't be empty"
    }
    return errors
  }

  validatePassword(value) {
    if(!value) {
      return "Password can't be empty" 
    } else if (value.length < 5) {
      return "Very weak" 
    } else if (value.length < 8) {
      return "Weak"
    }
    return undefined
  }

  render() {
       return (
        <Container>
          <ContentContainer>
          <Title>{"Sign Up"}</Title>
          
          <Formik initialValues={{ email: '', password: '', confirmPassword: '' }} 
                  onSubmit={this.handleSubmit}
                  validate={this.handleValidation}>

            {props => (

              <SignUpForm>
                <Label>Email</Label>
                <EmailField name="email" type="email"/>

                <ErrorMessage name="email">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>

                <Label>Password</Label>
                <PasswordField name="password" validate={this.validatePassword} type="password"/>

                <ErrorMessage name="password">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>

                <Label>Confirm Password</Label>
                <PasswordField name="confirmPassword" validate={this.validatePassword} type="password"/>

                <ErrorMessage name="confirmPassword">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>

                <SubmitButton type="submit" disabled={props.isSubmitting}/>
              </SignUpForm>

            )}
          </Formik>

          </ContentContainer>
        </Container>
      ); 
    }
  }

export default SignUpComponent;
