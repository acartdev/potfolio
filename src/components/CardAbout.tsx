import {
  Center,
  Flex,
  GridItem,
  Heading,
  ResponsiveValue,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  rowSpan: ResponsiveValue<number>;
  Icon: React.ElementType<{}>;
  desc: string;
  head: string;
  index: number;
};

export default function CardAbout({ rowSpan, Icon, desc, index, head }: Props) {
  const varitancs: Variants = {
    visible: {
      x: 100,
      y: 150,
      opacity: 0.2,
      transition: { duration: 1, delay: index * 0.2, staggerChildren: 0.5 },
    },
    onscreen: {
      y: 0,
      x: 0,
      boxShadow: "8px 8px 5px rgba(0, 0,0,0.5)",
      opacity: 1,
      transition: { duration: 1, delay: index * 0.2 },
    },
    mobile: {
      opacity: 0.2,
      x: 200,
      transition: { duration: 1, delay: index * 0.2, staggerChildren: 0.5 },
    },
  };
  return (
    <GridItem
      px={{ lg: "3.5", base: "7" }}
      color={"white"}
      as={motion.div}
      variants={varitancs}
      initial={useBreakpointValue({ base: "mobile", lg: "visible" })}
      whileInView={"onscreen"}
      bg={"blue.500"}
      rowSpan={rowSpan}
      alignItems={"flex-start"}
      rounded={"3xl"}
    >
      <Flex
        flexDirection={"column"}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
      >
        <Icon fontSize={100} />
        <Heading mt={4} fontSize={"lg"}>
          {head}
        </Heading>
        <Text
          wordBreak={"break-all"}
          mt={5}
          textAlign={"center"}
          fontSize={"sm"}
        >
          {desc}
        </Text>
      </Flex>
    </GridItem>
  );
}
