import styled from "styled-components";



export const formBody  = styled.aside`
  body{
    background-color: cadetblue;

}
  `;


export const formh1 = styled.h1`
  h1{
    font-size: 38px;
}`;


export const formInputforText = styled.input`
input[type=text] {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 15px;
    background-color: rgb(255, 249, 249);
    color: rgb(10, 10, 10);
    font-family: Arial, Helvetica, sans-serif;
}`;

export const formInputForPassword = styled.input`

input[type=password] {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 15px;
    background-color: rgb(255, 249, 249);
    color: rgb(10, 10, 10);
    font-family: Arial, Helvetica, sans-serif;
}`;

export const formInputForSubmit = styled.input`

input[type=submit] {
    background-color: #ddd;
    border: none;
    color: black;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    /* cursor: pointer; */
    border-radius: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 22px;
}`;


export const formSelect = styled.select`

select {
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    color: rgb(10, 10, 10);
    font-family: Arial, Helvetica, sans-serif;
}`;



export const formContainer = styled.aside`
    background-color: antiquewhite;
    border-style: hidden;
    border-radius: 15px;
    padding:18px;
    text-align: center;
    box-shadow: 0 8px 6px -6px black;
  @media screen and (max-width:900px) {
  }
  
`;




export const formMainContainer = styled.aside`
  
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;

    `;



