import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <Flex direction="column" w="100%" align="center" minHeight="100vh">
        {children}
      </Flex>
    </>
  );
}
