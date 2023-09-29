import {
  Box,
  Grid,
  Text,
  GridItem,
  UnorderedList,
  List,
  ListItem,
  ListIcon,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};
interface Item {
  list: string;
  link: string;
}
interface Footer {
  header: string;
  list: Item[];
}
export default function Footer({}: Props) {
  const footerList: Footer[] = [
    {
      header: "WebFrameWork",
      list: [
        { list: "Chakra-UI", link: "https://chakra-ui.com/" },
        { list: "Tailwind", link: "https://tailwindcss.com/" },
        { list: "NextJs", link: "https://nextjs.org/" },
        { list: "Framer-Motion", link: "https://www.framer.com/motion/" },
      ],
    },
    {
      header: "Contact-Me",
      list: [
        {
          list: "Facebook",
          link: "https://web.facebook.com/profile.php?id=100021946217046",
        },
        { list: "GitHub", link: "https://github.com/acartdev/" },
        { list: "Email", link: "tnpkng@gmail.com" },
        { list: "Line", link: "https://line.me/ti/p/9MYGyI-W25" },
      ],
    },
    {
      header: "Tools",
      list: [
        { list: "VsCode", link: "https://code.visualstudio.com/" },
        { list: "Figma", link: "https://www.figma.com/" },
      ],
    },
  ];
  return (
    <Box p={4} h={"auto"} bg={"blue.600"}>
      <Grid
        pt={5}
        mx={"auto"}
        w={"80%"}
        templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
      >
        {footerList.map((items, index) => (
          <GridItem key={index}>
            <Center>
              <Box w={"90%"} mx={"auto"}>
                <Text textAlign={"left"} color={"white"}>
                  {items.header}
                </Text>
                <List color={"blackAlpha.700"}>
                  {items.list.map((e, index) => (
                    <ListItem
                      key={index}
                      color={"whiteAlpha.700"}
                      textAlign={"left"}
                    >
                      <ListIcon />
                      <Link href={e.link}> {e.list}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
