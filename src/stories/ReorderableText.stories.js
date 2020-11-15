import React from "react";

import ReorderableText from "./ReorderableText";

export default {
  title: "Example/ReorderableText",
  component: ReorderableText,
};

const Template = (args) => <ReorderableText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum felis eget viverra efficitur. Etiam in leo eu diam convallis interdum. Pellentesque rhoncus, tellus eget efficitur sodales, elit mauris vehicula mi, eget placerat ipsum ipsum egestas ex. Proin ultricies nisi enim, quis cursus magna egestas vel. Cras turpis magna, ultrices eu mi a, bibendum pharetra magna. Nam nibh magna, sagittis eu mauris quis, ornare aliquet augue. Cras commodo lectus ut luctus sagittis. Donec malesuada ultricies ex vitae convallis. Fusce dapibus vel mi vitae finibus. Praesent elit ipsum, feugiat eget turpis non, efficitur pellentesque arcu. Cras pretium porttitor ex ac suscipit.`,
};
