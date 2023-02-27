import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 5px;
`;
export const FormContainer = styled.main`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: 90vh;
  
`;
export const Input = styled.input`
 padding:15px;

`;
export const LoginButton = styled.button`
 padding:15px;
 background-color: blueviolet;
 border: none;

`;