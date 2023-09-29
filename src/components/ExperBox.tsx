import { Box, Flex, FlexProps, FlexboxProps, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Variants, m, motion } from "framer-motion";
type Props = {
  flexDi: any;
  img: string;
  desc: string;
  id: number;
};

export default function ExperBox({ flexDi, desc, img, id }: Props) {
  const variants: Variants = {
    show: {
      rotate: 10,
      y: 200,
      transition: {
        duration: 1,
        type: "spring",
        staggerChildren: 0.5,
        delay: id * 0.5,
      },
    },
    onscreen: {
      rotate: 0,
      y: 0,
      transition: { duration: 1, type: "easeOut", staggerChildren: 0.5 },
    },
    shadows: {
      boxShadow: "10px 4px 4px rgba(0,150,230,0.5)",
      transition: {
        duration: 1,
        type: "easeOut",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <Flex
      my={5}
      as={motion.div}
      variants={variants}
      whileInView={"onscreen"}
      initial={"show"}
      align={"center"}
      flexDirection={flexDi}
    >
      <Box
        as={motion.div}
        whileInView={"shadows"}
        variants={variants}
        w={300}
        border={"5px"}
        borderStyle={"dashed"}
        borderColor={"blue.400"}
        height={300}
        pos={"relative"}
        borderRadius={"100%"}
        overflow={"hidden"}
      >
        <Image
          layout="fill"
          src={img}
          alt="Skills Competition"
          loading="lazy"
          objectFit="cover"
        />
      </Box>

      <Text
        flex={{ base: 0, lg: 1 }}
        textAlign={{ base: "start", lg: "unset" }}
        m={{ base: "1rem 0", lg: "0 2rem" }}
        wordBreak={{ base: "break-all", lg: "normal" }}
        fontSize={{ lg: "xl", base: "lg" }}
      >
        {desc}
      </Text>
    </Flex>
  );
}
