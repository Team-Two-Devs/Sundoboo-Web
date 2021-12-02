import React from 'react';
import styled from '@emotion/styled';

type textType = {
  primary?: boolean;
};

const P = styled.p<textType>`
  color: ${(props) => (props.primary ? 'purple' : 'blue')};
`;

const Test = () => {
  return (
    <>
      <P primary>This is a primary</P>
      <P>Yeah</P>
    </>
  );
};

export default Test;
