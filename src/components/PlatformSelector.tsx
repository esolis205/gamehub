import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platfroms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuList key={platform.id}>{platform.name}</MenuList>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
