import React from "react";
import { Container, Box, VStack, HStack, Text, Image, Button, Heading, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const editorials = [
  {
    id: 1,
    title: "The Future of AI",
    description: "An in-depth look at the future of artificial intelligence and its impact on various industries.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGZ1dHVyZXxlbnwwfHx8fDE3MTY4MjQ5NTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Climate Change and You",
    description: "Understanding the effects of climate change and what you can do to make a difference.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDbGltYXRlJTIwY2hhbmdlfGVufDB8fHx8MTcxNjgyNDk1MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "The Rise of Remote Work",
    description: "Exploring the rise of remote work and how it's changing the modern workplace.",
    price: "$17.99",
    image: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSZW1vdGUlMjB3b3JrfGVufDB8fHx8MTcxNjgyNDk1MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Header />
        <EditorialList editorials={editorials} />
        <Footer />
      </VStack>
    </Container>
  );
};

const Header = () => (
  <Box w="100%" bg="teal.500" p={4} color="white">
    <HStack justifyContent="space-between">
      <Heading as="h1" size="lg">
        Editorial Store
      </Heading>
      <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
    </HStack>
  </Box>
);

const EditorialList = ({ editorials }) => (
  <VStack spacing={8} w="100%">
    {editorials.map((editorial) => (
      <EditorialItem key={editorial.id} editorial={editorial} />
    ))}
  </VStack>
);

const EditorialItem = ({ editorial }) => (
  <HStack spacing={4} w="100%" p={4} borderWidth="1px" borderRadius="lg">
    <Image boxSize="150px" objectFit="cover" src={editorial.image} alt={editorial.title} />
    <VStack align="start" spacing={2}>
      <Heading as="h2" size="md">
        {editorial.title}
      </Heading>
      <Text>{editorial.description}</Text>
      <Text fontWeight="bold">{editorial.price}</Text>
      <Button colorScheme="teal">Buy Now</Button>
    </VStack>
  </HStack>
);

const Footer = () => (
  <Box w="100%" bg="teal.500" p={4} color="white" textAlign="center">
    <Text>&copy; 2023 Editorial Store. All rights reserved.</Text>
  </Box>
);

export default Index;
