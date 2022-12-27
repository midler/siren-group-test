import React from "react";

import "../../styles/index.scss";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Main = Template.bind({});
Main.args = {
  wide: false,
};
