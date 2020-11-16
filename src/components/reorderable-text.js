import React from "react";
import { List as ReactMovable, arrayMove } from "react-movable";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

import splitTextIntoLines from "../utils/split-text-into-lines";
import { ReorderableList } from "./reorderable-list";
import { ReorderableListItem } from "./reorderable-list-item";

const ReorderableText = ({ text, maxLineLength = 80 }) => {
  const originalLines = splitTextIntoLines(text, maxLineLength);
  const isFirstRender = React.useRef(true);

  const [lines, setLines] = React.useState(originalLines);

  const onReorder = ({ oldIndex, newIndex }) => {
    console.log(`Moving item ${oldIndex} to ${newIndex}`);
    const reorderedLines = arrayMove(lines, oldIndex, newIndex);
    setLines(reorderedLines);
  };

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const timeout = setTimeout(() => {
        console.log("effect", lines);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [lines]);

  return (
    <Box>
      <ReactMovable
        values={lines}
        onChange={onReorder}
        renderList={ReorderableList}
        renderItem={ReorderableListItem}
        transitionDuration={500}
        lockVertically
      />
    </Box>
  );
};

ReorderableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLineLength: PropTypes.number.isRequired,
  onReorder: PropTypes.func.isRequired,
};

export { ReorderableText };
