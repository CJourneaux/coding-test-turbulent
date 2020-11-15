import React from "react";
import PropTypes from "prop-types";

import { List, ListItem, Box } from "@chakra-ui/react";
import { List as ReactMovable, arrayMove } from "react-movable";

import splitTextIntoLines from "../utils/split-text-into-lines";

function ReorderableText({ text, maxLineLength = 80 }) {
  const originalLines = splitTextIntoLines(text, maxLineLength);

  const [lines, setLines] = React.useState(originalLines);

  const onReorder = ({ oldIndex, newIndex }) => {
    console.log(`Moving item ${oldIndex} to ${newIndex}`);
    setLines(arrayMove(lines, oldIndex, newIndex));
  };

  return (
    <ReactMovable
      values={lines}
      onChange={onReorder}
      renderList={ReorderableList}
      renderItem={ReorderableItem}
      transitionDuration={500}
      lockVertically
    />
  );
}

const ReorderableList = ({ children, isDragged, props: { ref } }) => (
  <List as="ol" ref={ref} isDragged padding="2rem">
    {children}
  </List>
);

const ReorderableItem = ({ value, isDragged, isSelected, props }) => {
  return (
    <ListItem {...props} listStyleType="none" boxShadow="md" padding="0.5rem">
      <Box
        backgroundColor="white"
        borderWidth="1px"
        borderRadius="0.5rem"
        fontSize="md"
        lineHeight="3rem"
        textAlign="center"
      >
        {value}
      </Box>
    </ListItem>
  );
};

ReorderableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLineLength: PropTypes.number.isRequired,
};

export default ReorderableText;
