import React from "react";
import { List as ReactMovable, arrayMove } from "react-movable";
import { Stack, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { MdCloudDone, MdCloudUpload } from "react-icons/md";
import PropTypes from "prop-types";

import splitTextIntoLines from "../utils/split-text-into-lines";
import { ReorderableList } from "./reorderable-list";
import { ReorderableListItem } from "./reorderable-list-item";

const ReorderableText = ({ text, maxLineLength = 80 }) => {
  const originalLines = splitTextIntoLines(text, maxLineLength);
  const isFirstRender = React.useRef(true);
  const [isOrderSaved, setIsOrderSaved] = React.useState(true);

  const [lines, setLines] = React.useState(originalLines);

  const onReorder = ({ oldIndex, newIndex }) => {
    setIsOrderSaved(false);
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
        setIsOrderSaved(true);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isFirstRender, lines, setIsOrderSaved]);

  return (
    <Stack spacing="1rem">
      <ReactMovable
        values={lines}
        onChange={onReorder}
        renderList={ReorderableList}
        renderItem={ReorderableListItem}
        transitionDuration={500}
        lockVertically
      />
      {isOrderSaved ? (
        <Tag size="md" color="green" alignSelf="flex-end">
          <TagLabel>Saved</TagLabel>
          <TagRightIcon as={MdCloudDone}></TagRightIcon>
        </Tag>
      ) : (
        <Tag size="md" color="blue" alignSelf="flex-end">
          <TagLabel>Saving</TagLabel>
          <TagRightIcon as={MdCloudUpload}></TagRightIcon>
        </Tag>
      )}
    </Stack>
  );
};

ReorderableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLineLength: PropTypes.number.isRequired,
  onReorder: PropTypes.func.isRequired,
};

export { ReorderableText };
