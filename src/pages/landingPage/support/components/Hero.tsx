import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box pb={"3rem"}>
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={["column", "column", "column", "row"]}
        textAlign={["center", "center", "center", "left"]}
      >
        <Box w={"100%"}>
          <Heading
            className="font"
            as="h1"
            size={["xl", "xl", "2xl", "2xl"]}
            noOfLines={2}
            mb="30px"
            color={"#e9ecef"}
          >
            We're Here to Help
          </Heading>
          <Text mb={"1rem"} color={"#b7b5c8"}>
            Welcome to the Cre8ify Support Center. Whether you're a creator
            looking for guidance, a user with a question, or anyone needing
            assistance, you've come to the right place. Our dedicated support
            team is here to ensure your experience on our platform is smooth and
            enjoyable. Explore our resources, reach out for help, and find the
            answers you need to get the most out of Cre8ify.
          </Text>
        </Box>
        <Box w={"100%"} display={"flex"} justifyContent={"center"}>
          <Image src="./images/support_hero.png" alt="img" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
