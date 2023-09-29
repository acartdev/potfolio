import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <Flex
      flexDirection={"column"}
      h={"calc(100vh - 79px)"}
      justify={"center"}
      align={"center"}
    >
      <Image src={"/404not.png"} alt="not-found" width={400} height={400} />
      <Text my={2} color={"gray.400"}>
        ERROR PAGE NOT FOUND.
      </Text>
      <Button rightIcon={<TiArrowBack />} colorScheme="blue">
        <Link href={"/"}>Go Back</Link>
      </Button>
    </Flex>
  );
}
