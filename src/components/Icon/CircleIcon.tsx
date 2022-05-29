import React from 'react';

import Box from '../Box';

const CircleIcon = (props: any) => {
  return (
    <Box
      display="inline-block"
      borderRadius="5px"
      height="10px"
      width="10px"
      backgroundColor={props.color ? props.color : 'grey'}
    ></Box>
  );
};
export default CircleIcon;
