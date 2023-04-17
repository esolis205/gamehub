import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        SortSelctor
        {/* {selectedPlatform?.name || "Platforms"} */}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        {/* {data.map((platform) => (
          <MenuItem
            onClick={() => {}}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
