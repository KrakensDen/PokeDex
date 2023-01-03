import styled from "styled-components";


export const TextInput = styled.input`
& {
  max-width: 250px;
  min-width: 175px;
  height: 30px;
  border: thin;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #fc4727ee;
  border-radius: 0rem;
  padding: 0.75rem;
  font-size: 15px;
}
`
export const AuthTextInput = styled.input`
  & {
    max-width: 250px;
    min-width: 175px;
    height: 30px;
    border: thin;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #2f3136;
    border-radius: 0rem;
    padding: 0.75rem;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }
`;

