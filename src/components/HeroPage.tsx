"use client";

import {
  Box,
  BoxProps,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import { TbDeviceImacCode } from "react-icons/tb";
import { Inter } from "next/font/google";
import { Variants, motion } from "framer-motion";
import { ChevronUpIcon } from "@chakra-ui/icons";
const exo = Inter({
  subsets: ["latin"],
  weight: ["600"],
  style: "normal",
});
type Props = {};
const ContainImage = motion<BoxProps>(Box);
const variants: Variants = {
  show: {
    y: -40,
    transition: {
      duration: 1,

      repeatType: "mirror",
      repeat: Infinity,
    },
  },
  scrolls: {
    y: -30,
    opacity: 0.3,
    transition: {
      duration: 1,
      repeatType: "mirror",
      type: "spring",
      repeat: Infinity,
    },
  },
  hidden: {
    y: 0,
  },
};
export default function HeroPage({}: Props) {
  const scrollRef = useRef(null);
  return (
    <Box
      h={{ lg: "calc(100vh - 70px)", base: "40vh" }}
      overflow={"hidden"}
      w={{ base: "100vw" }}
      color={"white"}
    >
      <Box
        h={{ lg: "100%", base: "100%" }}
        w={{ lg: "100%", base: "150%" }}
        pos={"relative"}
        clipPath={"inset(0 0 0 0)"}
      >
        <ContainImage
          variants={variants}
          animate={"hidden"}
          viewport={{ root: scrollRef }}
          whileInView={useBreakpointValue({ base: "", lg: "show" })}
          pos={{ base: "absolute", lg: "fixed" }}
          w={"100%"}
          h={{ base: "90%", lg: "100%" }}
          top={0}
          left={0}
        >
          <Image
            loading="lazy"
            src={"/banner.jpg"}
            alt="banner "
            objectFit={useBreakpointValue({
              base: "cover",
              lg: "cover",
            })}
            objectPosition={useBreakpointValue({
              base: "10% 15%",
              lg: "0 15%",
            })}
            layout="fill"
            style={{ filter: "brightness(0.25)" }}
          />
        </ContainImage>
        <Flex
          w={"100vw"}
          h={"100%"}
          pos={"absolute"}
          justify={"space-between"}
          align={"center"}
        >
          <Stack w={"60%"} spacing={0} px={{ lg: 10, base: 3 }}>
            <Text
              // letterSpacing={2.5}
              color={"white"}
              fontSize={{ base: "2xl", lg: "7xl" }}
              fontWeight={"light"}
            >
              ยินดีต้อนรับสู่เว็บไซต์
            </Text>
            <HStack
              spacing={1}
              lineHeight={1}
              className={exo.className}
              fontSize={{ lg: "8xl", base: "2xl" }}
              fontWeight={"extrabold"}
            >
              <Text>AC</Text>
              <Box mx={1}>
                <TbDeviceImacCode
                  size={useBreakpointValue({ base: "1.4rem", lg: "4rem" })}
                />
              </Box>
              <Text>ART</Text>
            </HStack>

            <Text
              letterSpacing={1.2}
              mt={2}
              fontSize={{ base: "small", lg: "large" }}
              color={"whiteAlpha.700"}
            >
              เว็บไซต์สำหรับเก็บข้อมูลส่วนตัว ผลงาน และประสบการณ์{" "}
              {useBreakpointValue({ lg: <br /> })}
              จัดทำขึ้นเพื่อใช้เป็นผลงานแนบในการเข้าศึกษาต่อและการจัดหางาน
            </Text>
          </Stack>
          <Box flex={{ base: 0, lg: 1 }}>
            <Image
              src={"/logo.png"}
              alt="banner log"
              width={350}
              style={{
                borderRadius: "100%",
                margin: " auto",
                transform: "translateY(-13%)",
              }}
              height={350}
            />
          </Box>
        </Flex>
        <ContainImage
          pos={"absolute"}
          variants={variants}
          animate={"scrolls"}
          bottom={{ base: 10, lg: 24 }}
          left={{ lg: "50%", base: "29%" }}
          w={50}
          h={50}
          translateX={"-100%"}
        >
          <ChevronUpIcon boxSize={50} />
          <Text textAlign={"center"}>Scroll</Text>
        </ContainImage>
      </Box>
    </Box>
  );
}
