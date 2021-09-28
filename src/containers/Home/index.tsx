import BasicLayout from "../../components/BasicLayout";
import { Heading, Text, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <BasicLayout>
      <Flex
        h="50vh"
        w="100%"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading>Mtechzilla</Heading>
        <Text>React boilerplate</Text>
      </Flex>
    </BasicLayout>
  );
}
