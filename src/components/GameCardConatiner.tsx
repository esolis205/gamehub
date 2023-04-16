import { Box } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardConatiner = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardConatiner;
