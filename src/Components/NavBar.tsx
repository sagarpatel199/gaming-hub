import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import PlatformSelector from "./PlatformSelector";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
