import React from "react";
import { ButtonSections, CartButton, HomeButton, Icon, LoginButton, NavbarDiv, ProductsButton } from "../navbar/Navbar.styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const nagivateFunc=()=>{
    navigate("/HomePage")
  }
  const AddClick=()=>{
    navigate("/login")
  }
  return (

    <NavbarDiv>
      <div>
        <Icon src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png " />
      </div>
      <ButtonSections>
        <HomeButton onClick={nagivateFunc}>HOME</HomeButton>
        <ProductsButton>PRODUCTS</ProductsButton>
        <CartButton>CART</CartButton>
        <LoginButton onClick={AddClick}>Logout</LoginButton>
      </ButtonSections>
    </NavbarDiv>
  );
};

export default Navbar;
