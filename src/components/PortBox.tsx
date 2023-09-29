import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./port.module.css";
import { AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import { Variants, motion } from "framer-motion";
import ImageOverlay from "./ImageOverlay";
import PortFolio from "./PortFolio";
type Props = {
  desc: string;
  img: string;
  id: number;
};

export default function PortBox({ desc, img, id }: Props) {
  const variants: Variants = {
    show: {
      x: 140,
      opacity: 0,
      rotate: -30,
      y: 140,
      scale: 0,
    },
    mobile: {
      scale: 0,
      opacity: 0,
      rotate: -30,
    },
    onscreen: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: id * 0.1,
        staggerChildren: id * 0.5,
      },
    },
  };

  return (
    <>
      <Box
        as={motion.div}
        variants={variants}
        initial={useBreakpointValue({ base: "mobile", lg: "show" })}
        animate={"onscreen"}
        bg={"blue.300"}
        w={{ base: 180, lg: 230 }}
        h={{ base: 220, lg: 230 }}
        pos={"relative"}
        borderRadius={"2xl"}
      >
        <Box
          zIndex={-1}
          pos={"absolute"}
          top={0}
          left={0}
          filter={"blur(20px)"}
          w={180}
          opacity={0.9}
          h={220}
          bg={"blue.300"}
        ></Box>
        <Flex
          w="100%"
          h={"100%"}
          px={5}
          py={3}
          zIndex={2}
          flexDirection={"column"}
        >
          <HStack
            color={"whiteAlpha.700"}
            cursor={"pointer"}
            _hover={{ color: "white", transition: "all .3s ease" }}
            transition={"all .3s ease"}
          >
            <AiFillFolderOpen fontSize={30} />
            <Text>คลิกเพื่อดูไฟล์</Text>
          </HStack>
          <Divider my={2} />
          <Text color={"white"} fontSize={"sm"}>
            {desc}
          </Text>
        </Flex>
      </Box>
    </>
  );
}
