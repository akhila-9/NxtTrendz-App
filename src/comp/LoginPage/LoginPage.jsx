import React, { useState } from "react";
import {
  ButtonStyles,
  CheckBox,
  CheckboxInputElement,
  EntireLoginPage,
  FlexingCon,
  Image,
  InputElement,
  LoginCredentials,
  LoginPageContent,
  LoginPageImage,
  Logo,
  Styles,
} from "./LoginPage.styled";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [password,setpassword]=useState("");
  const StoringPassword=(e)=>{
 setpassword(e.target.value);
 console.log(e.target.value);
  }
 


  return (
    <EntireLoginPage>
      <LoginPageContent>
        <LoginPageImage>
          <Image src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png " />
        </LoginPageImage>
        <LoginCredentials>
          <div>
            <Logo src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" />
          </div>
         
          <FlexingCon>
             <Styles>USERNAME</Styles>
            <InputElement type="text" placeholder="Enter Name:Akhila"/>
          </FlexingCon>
         
          <FlexingCon>
             <Styles>PASSWORD</Styles>
            <InputElement type={`${showPassword? "text": "password"}`} placeholder="Enter Password:Akhi@2025" onChange={StoringPassword}/>
          </FlexingCon>
          <CheckBox>
            <div >
              <CheckboxInputElement type="checkbox"   onChange={() => setShowPassword((prev) => !prev)} />
            </div>
            <Styles>Show Password</Styles>
          </CheckBox>
          <FlexingCon>
 <ButtonStyles>
            Login
          </ButtonStyles>
          </FlexingCon>
         
        </LoginCredentials>
      </LoginPageContent>
    </EntireLoginPage>
  );
};

export default LoginPage;
