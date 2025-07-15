import styled from "styled-components";


export const EntireLoginPage=styled.div`
    height:100vh;
    width:100%;
    background-color:#FFFFFF;
    display:flex;
   
    flex-direction:row;
    align-items:center;
    justify-content:center;

`;


export const LoginPageContent=styled.div`

    width:100%;
        height: 485px;
    display:flex;
     gap:70px;
    flex-direction:row;
    align-items:center;
    justify-content:center;

     @media (max-width: 1070px) {
    flex-direction:column;
  }
`
 
export const LoginPageImage=styled.div`
       width:40%;
       height:80%;
       display:flex;
    align-items:flex-start;
       flex-direction:row;


`;
export const Image =styled.img`
    width:100%;
   
        height: 100%;
    object-fit: contain;
`;
export const LoginCredentials=styled.div`
gap:18px;
        box-shadow: 0 8px 40px #07070714;
        flex-shrink: 0;
height:400px;
width:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


@media (min-width: 1700px){
    height:550px;
    width:550px;
}
;`

export const Logo=styled.img`
    height:30px;
    width:80%;
`;
export const InputElement=styled.input`
    height:30px;
    width:80%;
        line-height: 16px;
        cursor: pointer;
    margin-bottom: 0;
       background:#d7dfe9;
    border:0px;
`;
export const CheckboxInputElement =styled.input`
    height:100%;
      width:70%;
      background:#FFFFFF;
    border:0px;
`;

export const Styles=styled.div`
    color:#475569;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    width:80%;
    align-items:flex-start;
    
    @media (max-width:1050px){
        font-size:14px;
    }
` ;
export const CheckBox=styled.div`
    display:flex;
    gap:8px;
      width: 68%;
    flex-direction: row;
    align-items:center;
`;

export const ButtonStyles=styled.div`
    background-color: #0b69ff;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
 
    width: 80%;
`;

export const FlexingCon=styled.div`
    width:90%;
    display:flex;
    gap:5px;
    flex-direction:column;
    align-items:center
`