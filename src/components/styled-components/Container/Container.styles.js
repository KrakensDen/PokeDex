import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const PokemonPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: row;
`

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  margin: auto;
`