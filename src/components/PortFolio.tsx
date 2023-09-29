"use client";

import { divider } from "@/utils/divider";
import { headerText, secondText } from "@/utils/theme";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Variants, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import PortBox from "./PortBox";
import ImageOverlay from "./ImageOverlay";

type Props = { img: string; isOpen: boolean; onClose(): void };
interface Port {
  desc: string;
  img: string;
}

export default function PortFolio(props: Props) {
  const [page, setPage] = useState<number>(4);
  const perPage = 4;
  const [perpage, setPerpage] = useState<number>(0);
  const [count, setcount] = useState<number>(Math.ceil(port.length / page));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [images, setImages] = useState<string>("");

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = (img: string) => {
    setImages(img);
    setIsOpen(true);
  };
  const changePage = (page: number) => {
    setPerpage(perPage * page);
    setPage(perPage * (page + 1));
  };
  const handlePage = () => {
    setPage((prev) => {
      return prev + 4;
    });
  };
  const ref = useRef(null);
  const interview = useInView(ref);

  return (
    <Box
      id="portfolio"
      w={"100%"}
      minH={"100vh"}
      h={"auto"}
      mb={"6"}
      pos={"relative"}
    >
      <Stack ref={ref} w={"100%"} mx={"auto"}>
        <Box>
          <Text {...headerText}>ผลงานและเกียรติบัตร</Text>

          <Text {...secondText} px={"4"}>
            แฟ้มเก็บชิ้นงานโปรเจคและผลงานเกียรติบัตรเพื่อจัดทำ Portfolio
          </Text>
        </Box>
        <Divider {...divider} />
        <Box pos={"relative"}>
          <Grid
            w={{ base: "90%", lg: "70%" }}
            templateColumns={{ lg: "repeat(4,1fr)", base: "repeat(2,1fr)" }}
            mt={10}
            gap={4}
            mx={"auto"}
          >
            {interview &&
              port.slice(perpage, page).map((items, index) => (
                <GridItem onClick={() => onOpen(items.img)} key={index} mt={2}>
                  <PortBox {...items} id={index} />
                </GridItem>
              ))}
          </Grid>
        </Box>
        <ButtonGroup
          mx={"auto"}
          mt={5}
          colorScheme="blue"
          display={{ base: "block", lg: "none" }}
        >
          {Array(count)
            .fill(0)
            .map((e, index) => (
              <Button key={index} onClick={() => changePage(index)}>
                {index + 1}
              </Button>
            ))}
        </ButtonGroup>
        <Button
          display={{ base: "none", lg: "block" }}
          onClick={() => handlePage()}
          mt={"10"}
          w={"28"}
          mx={"auto"}
          variant={"outline"}
          colorScheme="blue"
        >
          ดูเพิ่มเติม
        </Button>
      </Stack>
      <ImageOverlay img={images} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
const variants: Variants = {
  show: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 1,
      type: "spring",
      staggerChildren: 0.5,
      delay: 1.5,
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const port: Port[] = [
  {
    desc: "รางวัลรองชนะเลิศอันดับ 2 เหรียญทองทักษะการออกแบบพัฒนาโปรแกรมควบคุมอุปกรณ์ระดับภาคตะวันออกเฉียงเหนือ ครั้งที่ 31",
    img: "/port3.jpg",
  },
  {
    desc: "รางวัลชนะเลิศอันดับ 1 เหรียญทองทักษะการออกแบบพัฒนาโปรแกรมควบคุมอุปกรณ์ระดับอาชีวศึกษา ครั้งที่ 31",
    img: "/port2.jpg",
  },
  {
    desc: "รางวัลรองชนะเลิศอันดับ 3 เหรียญเงินทักษะการออกแบบพัฒนาโปรแกรมควบคุมอุปกรณ์ระดับภาคตะวันออกเฉียงเหนือ ครั้งที่ 30",
    img: "/port1.jpg",
  },
  {
    desc: "รางวัลชมเชย ทักษะการออกแบบพัฒนาโปรแกรมควบคุมอุปกรณ์ระดับภาคตะวันออกเฉียงเหนือ ครั้งที่ 29",
    img: "/port4.jpg",
  },
  {
    desc: "รางวัลเหรียญทองแดง หุ่นยนต์ขนถ่ายพัสดุ สุดยอดนวัตกรรมหุ่นยนต์อาชีวศึกษา ระดับชาติ",
    img: "/port6.jpg",
  },
  {
    desc: "การแข่งขันชิงถ้วยพระราขทาน การแข่งขันเขียนโปรแกรม Codding ควบคุม Cobot",
    img: "/port5.jpg",
  },
  {
    desc: "การสัมมนาเชิงปฏิบัติการหุนยนต์ การแข่งขันเขียนโปรแกรมควบคุมหุ่นยนต์ Cobot ชิงถ้วยพระราชทาน",
    img: "/port7.jpg",
  },
  {
    desc: "การอบรมพื้นฐาน CYBER SECURITY FOR ICT ACADEMY STUDENT ของ HUAWEI",
    img: "/port8.jpg",
  },
  {
    desc: "เข้าร่วมงานHuawei connect 2022 มหกรรมการจัดแสดงเทคโนโลยีและนวัตกรรมของHuawei",
    img: "/port9.jpg",
  },
  {
    desc: "ใบผ่านการฝึกประสบการณืวิชาชีพประเภทวิชาเทคโนโลยีสารสนเทศ สาขางานนักพัฒนาซอฟต์แวร์ บริษัท Grand ATS.",
    img: "/port10.jpg",
  },
  {
    desc: "กิจกรรมแสดงละครประกอบเพลงเนื่องในกิจกรรมวันภาษาไทย",
    img: "/port11.jpg",
  },
  {
    desc: "กองทุนการศึกษาพระปัญญาพิศาลเถร ได้รับทุนการศึกษาเพราะเป็นผู้ที่มีความประพฤติดี มีความกตัญญู และมีความเสียสละ",
    img: "/port12.jpg",
  },
];
