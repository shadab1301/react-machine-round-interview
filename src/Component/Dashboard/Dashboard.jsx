import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      width={"98vw"}
      m={"20px auto"}
      spacing={10}
    >
      <Box height="auto">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box height="auto">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box height="auto">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box height="auto">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box height="auto">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </Box>
    </SimpleGrid>
  );
};

export default Dashboard;
