import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  onClose(): void;
  isOpen: boolean;
  img: string | "/404not.png";
};

export default function ImageOverlay({ img, isOpen, onClose }: Props) {
  const variants: Variants = {
    before: {
      opacity: 0,
      scale: 0,

      transition: {
        duration: 1,
      },
    },
    after: {
      scale: 1,
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <Box
      as={motion.div}
      variants={variants}
      initial={"before"}
      whileInView={"after"}
      onClick={() => onClose()}
      display={isOpen ? "block" : "none"}
      w={"100%"}
      h={"100%"}
      pos={"fixed"}
      top={0}
      left={0}
      bg={"blackAlpha.700"}
    >
      <Flex w={"100%"} h={"100%"}>
        <CloseIcon
          onClick={() => onClose()}
          cursor={"pointer"}
          color={"white"}
          boxSize={{ base: "6" }}
          top={{ lg: "5%", base: "3%" }}
          right={{ lg: "5%", base: "4%" }}
          pos={"absolute"}
        />
        <Box
          w={{ base: "sm", lg: "4xl" }}
          h={{ base: "sm", lg: "4xl" }}
          pos={"relative"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
        >
          <Image
            loading="lazy"
            src={img ? img : "/404not.png"}
            objectFit="contain"
            alt="portfolio"
            fill
          />
        </Box>
      </Flex>
    </Box>
  );
}
