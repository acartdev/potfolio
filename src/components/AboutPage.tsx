"use client";

import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  ResponsiveValue,
  ScaleFade,
  Slide,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { divider } from "@/utils/divider";
import { Variants, motion, useInView } from "framer-motion";
import { LiaToolsSolid } from "react-icons/lia";
import { TbDeviceImacCode } from "react-icons/tb";
import { BsFileEarmarkText } from "react-icons/bs";
import CardAbout from "./CardAbout";
import { headerText, secondText, thirdText } from "@/utils/theme";
type Props = {};
interface Des {
  Icon: React.ElementType<{}>;
  desc: string;
  rowSpan: ResponsiveValue<number>;

  head: string;
}
export default function AboutPage({}: Props) {
  const ref = useRef(null);

  const interview = useInView(ref);
  const varitance: Variants = {
    unscreen: {
      opacity: 0,
      y: 100,
      x: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
    mobile: {
      x: 100,
      opacity: 0,
    },
  };
  const descript: Des[] = [
    {
      head: "Technician",
      Icon: LiaToolsSolid,
      desc: "ติดตั้งไฟฟ้าภายในบ้าน ติดตั้งเครื่องปรับอากาศ ทำความสะอาดเครื่องปรับอากาศ ซ่อมเครื่องใช้อิเล็กทรอนิกส์ ติดตั้งจานดาวเทียม",
      rowSpan: { base: 1 },
    },
    {
      head: "Developer",
      Icon: TbDeviceImacCode,
      desc: "Web-Application Mobile-App Full-Stack Rest-Api MicroController Robot DevOps Docker NetWork Server",
      rowSpan: { base: 1, lg: 2 },
    },
    {
      head: "Skills Competition",
      Icon: BsFileEarmarkText,
      desc: "MicroController Kidbright-Set Arduino Control-Robot Line-Tracking-Robot ",
      rowSpan: { base: 1 },
    },
  ];

  return (
    <Box
      id="about"
      h={{ base: "auto", lg: "100vh" }}
      w={{ base: "100vw", lg: "100%" }}
      overflow={"hidden"}
      py={4}
    >
      <Stack ref={ref} px={4} spacing={0}>
        <ScaleFade in={interview} initialScale={0}>
          <Text {...headerText}>เกี่ยวกับเรา</Text>
        </ScaleFade>
        <Text {...secondText}>
          ความสามารถเทคนิคพื้นฐานต่าง ๆ รวมถึงผลงานด้านกิจกรรม
        </Text>
        <Divider {...divider} />

        <Grid
          px={"15%"}
          templateRows={{ lg: "270px 5px", base: "repeat(3,1fr)" }}
          gap={20}
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}
        >
          {descript &&
            descript.map((key, index) => (
              <CardAbout {...key} key={index} index={index} />
            ))}
        </Grid>
        <Box
          as={motion.div}
          variants={varitance}
          initial={useBreakpointValue({ base: "mobile", lg: "unscreen" })}
          whileInView={"show"}
        >
          <Text
            {...thirdText}
            w={{ base: "100%", lg: "66%" }}
            mx={"auto"}
            mt={20}
          >
            มีทักษะพื้นฐานช่างไฟฟ้า และอิเล็กทรอนิกส์
            รวมถึงทักษะพื้นฐานการเป็นนักพัฒนาซอฟต์แวร์
            และยังเคยเข้าร่วมการแข่งขันทักษะต่าง ๆ
            เช่นการเขียนโปรแกรมควบคุมอุปกรณ์
            การเขียนโปรแกรมควบคุมหุ่นยนต์ทั้งการCoding และ Low-Code
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
