import { divider } from "@/utils/divider";
import { headerText, secondText } from "@/utils/theme";
import {
  Box,
  Divider,
  Flex,
  ResponsiveValue,
  SlideFade,
  Stack,
  Text,
  UseBreakpointOptions,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import ExperBox from "./ExperBox";

type Props = {};
interface Experience {
  flexDi: ResponsiveValue<"row" | "column" | "row-reverse">;
  img: string;
  desc: string;
}
export default function Experience({}: Props) {
  const ref = useRef(null);
  const experience: Experience[] = [
    {
      img: "/skill-con.jpg",
      desc: "เข้าร่วมร่วมการแข่งขันการแข่งขันทักษะการเขียนโปรแกรมควบคุมอุปกรณ์Kidbright เข้ารอบระดับชาติหนึ่งครั้ง เข้ารอบระดับภาค3ครั้งและเข้ารอบระดับ อศจ.3ครั้งและการแข่งขันอื่น ๆ เช่นการแข่งขันการควบคุมหุ่นยนต์cobotการแข่งการเขียนโปรแกรมควบคุมหุ่นยนต์อัตโนมัติ(เดินตามเส้น)การเขียนโปรแกรมหุ่นยนต์ ABU",
      flexDi: { base: "column", lg: "row" },
    },
    {
      img: "/grand.jpg",
      desc: "การฝึกประสบการณ์ระดับปวชจะเกี่ยวกับการทำงานติดตั้งเครื่องปรับอากาศและการติดตั้งไฟฟ้าภายในบ้านเรือนเนื่องจากศึกษาในสาขาแผนกช่างอิเล็กทรอนิกส์ และในระดับปวสจะฝึกประสบการณืเกี่ยวกับพื้นฐานการเขียนโปรแกรมและเครือข่ายคอมพิวเตอร์เบื้องต้นเช่นการเขียนWeb-Appด้วย Vue(Quasar)และPHP ด้วยหลักการ RestApi และการเรียนรู้การconfig อุปกรณ์Network เช่น Swicth Layer2 AccessPoint Router-Firewall",
      flexDi: { base: "column", lg: "row-reverse" },
    },
    {
      img: "/tecnichain.jpg",
      desc: "เคยมีประสบการณืการทำงานการรับงานเองเนื่องจากมีประสบการณ์จากการฝึกประสบการณืวิชาชีพ โดยจะรับงานติดตั้งกล้องวงจรปิด งานซ่อมเครื่อใช้อิเล็กทรอนิกส์ เช่น การซ่อมแล็ปท็อป มือถือ ลำโพง และอื่น ๆรับงานเดินระบบไฟฟ้าภายในบ้านเรือน งานเดินท่อ งานตีกิ๊บต่าง ๆ งานทำความสะอาดเครื่องปรับอากาศ งานติดตั้งเครื่องปรับอากาศ",
      flexDi: { base: "column", lg: "row" },
    },
  ];
  const interview = useInView(ref);
  return (
    <Box
      id="experience"
      w={"100%"}
      overflow={"hidden"}
      h={{ base: "auto", lg: "1300px" }}
      mb={30}
    >
      <Stack ref={ref}>
        <SlideFade in={interview} delay={0.3}>
          <Text {...headerText} px={"10"}>
            ประสบการณ์และการทำงาน
          </Text>
        </SlideFade>
        <Text {...secondText}>
          ประสบการณ์ด้านกิจกรรมและประสบการณ์ด้านการทำงานรวมไปถึงการฝึกประสบการณ์วิชาชีพ
        </Text>
        <Divider {...divider} />

        <Box w={{ base: "89%", lg: "60%" }} mx={"auto"}>
          {experience &&
            experience.map((items, index) => (
              <ExperBox key={index} {...items} id={index} />
            ))}
        </Box>
      </Stack>
    </Box>
  );
}
