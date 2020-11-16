import * as React from "react";
import { ListItem, ListIcon } from "@chakra-ui/react";
import { MdReorder } from "react-icons/md";

export const ReorderableListItem = ({
  value,
  isDragged,
  isSelected,
  props,
}) => {
  const highlightStyles = {
    backgroundColor: "#ebf8ff",
    boxShadow: "-4px 8px 20px 0px #718096",
  };

  return (
    <ListItem
      {...props}
      listStyleType="none"
      fontSize="md"
      lineHeight="1.75rem"
      role="group"
      padding="0.75rem 1rem"
      cursor={isDragged ? "grabbing" : "grab"}
      backgroundColor="white"
      boxShadow="#CBD5E0 0px 2px 4px, #718096 0px 0.5px 1px"
      _hover={highlightStyles}
      _focus={highlightStyles}
    >
      <ListIcon
        as={MdReorder}
        visibility="hidden"
        _groupHover={{ visibility: "visible" }}
        _groupFocus={{ visibility: "visible" }}
      />
      {value}
    </ListItem>
  );
};
