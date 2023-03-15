import styled from "styled-components";


export const CardStyles = styled.button`
background: transparent;

.card {
  width: 190px;
  height: 254px;
  background: rgb(19,110,16);
  background: linear-gradient(0deg, rgba(19,110,16,1) 36%, rgba(241,19,19,1) 100%);
  border-radius: 20px;
  transition: all .3s;
  cursor: pointer;
 }
 
 .card2 {
  width: 190px;
  height: 254px;
  background-color: #1a1a1a;
  border-radius:;
  transition: all .2s;
 }
 
 .card2:hover {
  transform: scale(0.96);
  border-radius: 20px;
 }
 
 .card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
 }
`;