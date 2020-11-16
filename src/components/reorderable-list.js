import * as React from "react";
import { List } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ReorderableList = ({ children, props: { ref } }) => (
  <List as="ol" ref={ref}>
    {children}
  </List>
);

ReorderableList.propTypes = {
  children: PropTypes.element.isRequired,
  isDragged: PropTypes.bool,
  props: PropTypes.shape({
    ref: PropTypes.any.isRequired,
  }).isRequired,
};

export { ReorderableList };
