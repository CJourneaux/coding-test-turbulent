import * as React from "react";
import { ListItem } from "@chakra-ui/react";

export const ReorderableListItem = ({
  value,
  isDragged,
  isSelected,
  props,
}) => {
  return (
    <ListItem
      {...props}
      listStyleType="none"
      boxShadow="md"
      cursor={isDragged ? "grabbing" : "grab"}
      backgroundColor="white"
      borderWidth="1px"
      borderRadius="0.5rem"
      fontSize="md"
      lineHeight="3rem"
      textAlign="center"
    >
      {value}
    </ListItem>
  );
};
