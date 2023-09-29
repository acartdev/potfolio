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
        { list: "Chakra-UI", link: "" },
        { list: "Tailwind", link: "" },
        { list: "NextJs", link: "" },
        { list: "Framer-Motion", link: "" },
      ],
    },
    {
      header: "Contact-Me",
      list: [
        { list: "Facebook", link: "" },
        { list: "GitHub", link: "" },
        { list: "Email", link: "" },
        { list: "Line", link: "https://line.me/ti/p/9MYGyI-W25" },
      ],
    },
    {
      header: "Tools",
      list: [
        { list: "VsCode", link: "" },
        { list: "Figma", link: "" },
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
                      {e.list}
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
