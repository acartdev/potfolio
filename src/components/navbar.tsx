"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  HStack,
  Stack,
  useColorModeValue,
  useDisclosure,
  ListItem,
  List,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { TbDeviceImacCode } from "react-icons/tb";
import { Tourney } from "next/font/google";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
const exo = Tourney({
  subsets: ["latin"],
  weight: ["800"],
});
interface LinkTo {
  title: string;
  link: string;
}
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navItem: LinkTo[] = [
    { title: "หน้าหลัก", link: "/" },
    { title: "เกี่ยวกับเรา", link: "#about" },
    { title: "ประสบการณ์", link: "#experience" },
    { title: "สกิล", link: "#skills" },
    { title: "ผลงาน", link: "#portfolio" },
  ];
  return (
    <Box>
      <Flex
        bg={"blue.600"}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        maxH={"70px"}
        py={{ base: 1 }}
        px={{ base: 5 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.900", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: "auto" }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <Image src={"/logo.png"} alt="logo" width={70} height={70} />
          <Stack spacing={0} ml={2}>
            <HStack spacing={1} className={exo.className} pt={4} fontSize={20}>
              <Text>AC</Text>
              <TbDeviceImacCode />
              <Text>ART</Text>
            </HStack>
            <Text letterSpacing={"1.3px"} fontSize={"xx-small"}>
              LEARN TO DEV
            </Text>
          </Stack>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          display={{ base: "none", lg: "flex" }}
          spacing={6}
        >
          {navItem.map((e, index) => (
            <Button key={index} colorScheme="white" variant={"link"}>
              <Link href={e.link}>{e.title}</Link>
            </Button>
          ))}
        </Stack>
        <Flex
          flex={{ base: 0, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            color={"white"}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Stack
        as={motion.div}
        display={{ base: "block", lg: "none" }}
        zIndex={3}
        variants={variants}
        overflow={"hidden"}
        initial={"before"}
        animate={isOpen ? "after" : "before"}
        w={"100%"}
        h={"auto"}
        pos={"absolute"}
        bg={"blue.400"}
      >
        <List w={"100%"}>
          {navItem.map((e, index) => (
            <ListItem
              textAlign={"center"}
              color={"white"}
              fontSize={"20"}
              key={index}
              px={"4"}
              py={"4"}
              borderBottom={"1px"}
            >
              <Link href={e.link}>{e.title}</Link>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}
const variants: Variants = {
  before: {
    height: 0,
  },
  after: {
    height: "auto",
    transition: {
      duration: 0.5,
    },
  },
};
