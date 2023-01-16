import styled from "styled-components";

import React from "react";

const Flex = ({ children }) => {
  return <SFlex>{children}</SFlex>;
};

export const SFlex = styled.div`
  display: flex;
`;

export default Flex;
