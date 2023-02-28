import styled from "styled-components"

export const CardContainer=styled.div`

display: flex;
flex-direction: column;
border-radius: 20px;
margin: 10px;
border: 2px solid blueviolet;
width:20vw;
height:30vh;

cursor: pointer;


:hover{
    box-shadow:1px 5px 20px white;
   
}
`

export const Text = styled.p`
  margin: 10px;
  

`
export const DivTitle = styled.div`
background-color: blueviolet;
  padding: 20px;
  border-radius: 20px 20px 0px 0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  h3{
    color: white;
    font-size: 1.3rem;
  }
`
export const DivText = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  
  
`