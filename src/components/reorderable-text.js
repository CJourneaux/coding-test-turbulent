import React from "react";
import { List as ReactMovable, arrayMove } from "react-movable";
import { Stack, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { MdCloudDone, MdCloudUpload } from "react-icons/md";
import PropTypes from "prop-types";

import splitTextIntoLines from "../utils/split-text-into-lines";
import { ReorderableList } from "./reorderable-list";
import { ReorderableListItem } from "./reorderable-list-item";

const UPLOAD_URL = "https://jsonplaceholder.typicode.com/posts";

const ReorderableText = ({ text, maxLineLength = 80, saveDelay = 2000 }) => {
  const originalLines = splitTextIntoLines(text, maxLineLength);
  const isFirstRender = React.useRef(true);
  const [isOrderSaved, setIsOrderSaved] = React.useState(true);

  const [lines, setLines] = React.useState(originalLines);

  const onReorder = ({ oldIndex, newIndex }) => {
    const reorderedLines = arrayMove(lines, oldIndex, newIndex);
    setLines(reorderedLines);
    setIsOrderSaved(false);
    console.log(`Moving element from position ${oldIndex} to ${newIndex}`);
  };

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const timeout = setTimeout(async () => {
        console.log("Saving start");
        fetch(UPLOAD_URL, {
          method: "POST",
          mode: "cors",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(lines),
        }).then((response) => {
          if (response.ok) {
            console.log("Saved list order");
            setIsOrderSaved(true);
          } else {
            console.log("Error while saving list order", response);
          }
        });
      }, saveDelay);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isFirstRender, lines, saveDelay, setIsOrderSaved]);

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
        <Tag color="green" alignSelf="flex-end">
          <TagLabel lineHeight="1.75">Saved</TagLabel>
          <TagRightIcon as={MdCloudDone}></TagRightIcon>
        </Tag>
      ) : (
        <Tag color="blue" alignSelf="flex-end">
          <TagLabel lineHeight="1.75">Changed</TagLabel>
          <TagRightIcon as={MdCloudUpload}></TagRightIcon>
        </Tag>
      )}
    </Stack>
  );
};

ReorderableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLineLength: PropTypes.number,
  saveDelay: PropTypes.number,
};

export { ReorderableText };
