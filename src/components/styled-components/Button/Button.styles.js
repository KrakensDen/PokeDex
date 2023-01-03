import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #1c2128;
  border-radius: 0.5rem;
  background-color: ${(props) => props.variant === 'outline' ? '#22272e' : '#1f1f1f'};
  color: ${(props) => props.variant === 'outline' ? '#0f0f0f' : '#ddd'};
  padding: 12px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
`

export const LoginButton = styled(Button)`
  background-color: #00a8ff;
  color: #111;
  border: none;
  width: 225px;
`