import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nagivate = useNavigate();
  const [username, setusername] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [password, setpassword] = useState("");
  const StoringPassword = (e) => {
    setpassword(e.target.value);
    console.log(e.target.value);
  };
  const StoringUsername = (e) => {
    setusername(e.target.value);
  };

  // async function postData() {
  //   console.log(username, password);
  //   try {
  //     const response = await fetch("https://apis.ccbp.in/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username: username, password: password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log("Success:", data);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // }

  async function postData() {
    try {
      const response = await axios.post(
        "https://srinivas-nxt-trendz-backend-project.vercel.app/login",
        {
          username: username,
          password: password,
        }
      );
      if (response.status === 200) {
        Cookies.set("akhila_token", response.data.jwtToken, { expires: 7 });
        nagivate("/");
      }
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
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
            <InputElement
              type="text"
              placeholder="Enter Name:Akhila"
              onChange={StoringUsername}
              name="dd"
            />
          </FlexingCon>

          <FlexingCon>
            <Styles>PASSWORD</Styles>
            <InputElement
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter Password:Akhi@2025"
              onChange={StoringPassword}
              name="dds"
            />
          </FlexingCon>
          <CheckBox>
            <div style={{height:"40px"}}>
              <CheckboxInputElement
                type="checkbox"
                onChange={() => setShowPassword((prev) => !prev)}
              />
            </div>
            <Styles>Show Password</Styles>
          </CheckBox>
          <FlexingCon>
            <ButtonStyles onClick={postData}>Login</ButtonStyles>
          </FlexingCon>
        </LoginCredentials>
      </LoginPageContent>
    </EntireLoginPage>
  );
};

export default LoginPage;
