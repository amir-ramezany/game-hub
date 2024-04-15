//@ts-ignore
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    //Horizontal Stack
    <HStack>
      <Image src={logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;