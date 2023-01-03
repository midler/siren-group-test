import React, { useState } from "react";

import "../../styles/index.scss";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(e.target.value);
  };
  return <Input {...args} onChange={handleClick} value={value} />;
};

export const Primary = Template.bind({});

Primary.args = {
  label: "Label",
  placeholder: "Placeholder text",
  error: 'Error'
};


// export const Second = Template.bind({})
// Second.args={
//   ...Primary.args,

// };
