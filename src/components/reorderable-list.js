import * as React from "react";
import { List } from "@chakra-ui/react";

export const ReorderableList = ({ children, isDragged, props: { ref } }) => (
  <List as="ol" ref={ref} isDragged={isDragged}>
    {children}
  </List>
);
