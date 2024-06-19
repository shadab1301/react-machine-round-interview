import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, IconButton, Input, InputGroup, InputRightElement, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const component = [
  {
    name: "searchbar",
    desc: "A searchbar  ",
    image: "",
    path: "searchbar",
  },
  {
    name: "searchbar with pagination",
    desc: "searchbar with pagination",
    image: "",
    path: "searchbar-with-pagination",
  },
  {
    name: "Employee Toggle",
    desc: "Employee Toggle",
    image: "",
    path: "emp-toggle",
  },
  {
    name: "star-rating",
    desc: "star-rating",
    image: "",
    path: "star-rating",
  },
  {
    name: "stopwatch",
    desc: "stopwatch",
    image: "",
    path: "stopwatch",
  },
  {
    name: "countdown-timer",
    desc: "countdown timer",
    image: "",
    path: "countdown-timer",
  },
  {
    name: "password-generator",
    desc: "password-generator",
    image: "",
    path: "password-generator",
  },
  {
    name: "to-do-list",
    desc: "to-do-list",
    image: "",
    path: "to-do-list",
  },
  {
    name: "modal",
    desc: "modal with overlay property",
    image: "",
    path: "modal",
  },
  {
    name: "Progress bar",
    desc: "Progress bar",
    image: "",
    path: "progress-bar",
  },
  {
    name: "File explorer",
    desc: "file explorer",
    image: "",
    path: "#",
  },
  {
    name: "EMI calculator",
    desc: "EMI calculator",
    image: "",
    path: "#",
  },
  {
    name: "Dark mode and Light mode",
    desc: "Dark mode and Light mode",
    image: "",
    path: "#",
  },
  {
    name: "Grid lighting",
    desc: "Grid lighting--roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "Breadcrumbs ",
    desc: "Breadcrumbs --roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "OTP Login ",
    desc: "OTP Login --roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "Quiz App  ",
    desc: "Quiz App  --roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "Currency Converter  ",
    desc: "Currency Converter  --roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe --roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "Toast Component",
    desc: "Toast Component --roadsideCoder",
    image: "",
    path: "#",
  },
  {
    name: "Auto suggestion",
    desc: "Auto suggestion --learnerbucket",
    image: "",
    path: "#",
  },
  {
    name: "Infinite scroll",
    desc: "Infinite scroll --learnerbucket",
    image: "",
    path: "#",
  },
  {
    name: "Editable To-Do list",
    desc: "Editable To-Do list --learnerbucket",
    image: "",
    path: "#",
  },
  {
    name: "lightbox ",
    desc: "lightbox  --learnerbucket",
    image: "",
    path: "#",
  },
  {
    name: " WeatherApp ",
    desc: " Weather App",
    image: "",
    path: "#",
  },
  {
    name: " Accordian ",
    desc: " accordian",
    image: "",
    path: "accordian",
  },
  {
    name: " Tab ",
    desc: " Tab",
    image: "",
    path: "#",
  },
];

const Dashboard = () => {
  const [searchTem,setSearchTerm]=useState("")
  const [result,setResult]=useState([])
  useEffect(()=>{
   const filteredData = component.filter(
     (val, i) =>
       val.name.toLowerCase().includes(searchTem.toLowerCase()) ||
       val.desc.toLowerCase().includes(searchTem.toLowerCase())
   );
    setResult(filteredData)
  },[searchTem])
  return (
    <>
      <Box width="100%" maxWidth="400px" margin="0 auto" p={5}>
        <InputGroup>
          <Input
            type="search"
            placeholder={"Search..."}
            value={searchTem}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              bgColor={"transparent"}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 4 }}
        width={"98vw"}
        m={"5px auto"}
        spacing={3}
      >
        {result.length > 0 &&
          result.map((val, index) => (
            <Box height="auto" key={index}>
              <Card>
                <CardHeader style={{ padding: "10px 20px" }}>
                  <Heading size="sm">{val.name}</Heading>
                </CardHeader>
                <CardBody
                  style={{
                    height: "80px",
                    padding: "0px 20px",
                  }}
                >
                  <Text>{val.desc}</Text>
                </CardBody>
                <CardFooter
                  style={{
                    height: "50px",
                    padding: "0px 20px",
                  }}
                >
                  <Link to={val.path}>
                    <Button>View</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Box>
          ))}
      </SimpleGrid>
      {!result.length && (
        <Box
          width={"100vw"}
          height="auto"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card width={"auto"}>
            <CardHeader style={{ padding: "10px 100px" }}>
              <Heading size="sm">No Data available</Heading>
            </CardHeader>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
