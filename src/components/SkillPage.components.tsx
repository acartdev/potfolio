import { Box, Progress, Stack, Text } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import React from "react";
type Props = {
  value: number;
  lang: string;
  color: string;
  id: number;
};
export default function SkillBox({ color, lang, value, id }: Props) {
  const variants: Variants = {
    before: {
      opacity: 0,
      scale: 0,
      x: 30,
      rotate: 45,
    },
    after: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: id * 0.2,
        type: "easeOut",
        staggerChildren: id * 0.2,
      },
    },
  };
  return (
    <Box
      as={motion.div}
      variants={variants}
      initial={"before"}
      animate={"after"}
      mt={"3"}
      p={"2"}
      w={{ base: "44", lg: "64" }}
      boxShadow={
        "-15px -15px 15px rgba(255, 255, 255, 0.2),15px 15px 15px rgba(0,0,0,0.1),    inset -50px -50px 50px rgba(255, 255, 255, 0.5),inset 50px 50px 50px rgba(0,0,0,0.1)"
      }
      borderRadius={"2xl"}
      h={"20"}
    >
      <Stack>
        <Text fontSize={"large"}>{lang}</Text>
        <Progress w={"100%"} value={value} size="sm" colorScheme={color} />
      </Stack>
    </Box>
  );
}
