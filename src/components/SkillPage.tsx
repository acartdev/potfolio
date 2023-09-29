import { divider } from "@/utils/divider";
import { headerText, secondText } from "@/utils/theme";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  ScaleFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import SkillBox from "./SkillPage.components";

type Props = {};
interface Skills {
  value: number;
  lang: string;
  color: string;
}
export default function SkillPage({}: Props) {
  const ref = useRef(null);

  const interview = useInView(ref);
  return (
    <Box id="skills" minH={"80vh"} mb={20}>
      <Stack ref={ref}>
        <ScaleFade in={interview} initialScale={0}>
          <Text {...headerText}>สกิลพื้นฐาน</Text>
        </ScaleFade>
        <Text px={5} {...secondText}>
          ระดับความสามารถของสกิลและควมชำนาญหรือพื้นฐานภาษาโปรแกรมเมอร์
        </Text>
        <Divider {...divider} />
        <Grid
          gap={4}
          justifyContent={"center"}
          w={"90%"}
          mx={"auto"}
          templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
        >
          {interview &&
            skill.map((e, index) => (
              <GridItem key={index}>
                <SkillBox {...e} id={index} />
              </GridItem>
            ))}
        </Grid>
      </Stack>
    </Box>
  );
}

const skill: Skills[] = [
  { value: 85, lang: "C/C++", color: "pink" },
  { value: 45, lang: "PHP", color: "purple" },
  { value: 30, lang: "JAVA", color: "orange" },
  { value: 80, lang: "JavaScript", color: "yellow" },
  { value: 70, lang: "CSS", color: "linkedin" },
  { value: 75, lang: "HTML", color: "red" },
  { value: 60, lang: "CMD", color: "gray" },
  { value: 55, lang: "Python", color: "blue" },
  { value: 83, lang: "Full-Stack", color: "facebook" },
  { value: 33, lang: "DevOps", color: "whatsapp" },
  { value: 30, lang: "NetWork", color: "teal" },
  { value: 90, lang: "Technician", color: "pink" },
];
