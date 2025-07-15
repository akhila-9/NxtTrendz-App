import styled from "styled-components";

export const HomePageEntireContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const HomePageContent = styled.div`
  flex: 1;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  justify-content: center;

  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: flex-start;
    /* padding-top: 110px; */
  }

`;

export const HomePageIcon = styled.img`
 
 ;

`;
export const Heading = styled.div`
  color: #1e293b;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 43px;


 
`;
export const Content = styled.div`
  display: flex;
height: calc(100% - 80px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
export const Para = styled.div`
  font-family: "Roboto";
  font-size: 24px;
  color: #475569;


`;
export const HomeInformation = styled.div`
  width: 50%;
  width:554px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  /* padding: 110px; */
  justify-content: center;

`;
export const HomeIcon = styled.div`
  width: 550px;
  display: flex;
 
  height: 600px;

  flex-direction: row;
`;

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;

  align-items: center;
  justify-content: center;
`;
