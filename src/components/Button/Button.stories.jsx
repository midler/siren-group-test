import React from "react";

import "../../styles/index.scss";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

// const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = () => {
  return (
    <div>
      <Button>Button</Button>
      <hr />
      <Button wide={true}>Button</Button>
      <hr />
      <Button disabled={true}>Button</Button>
      <hr />
      <Button>
        <svg
          viewBox="0 0 14 14"
          width="14px"
          height="14px"
          aria-hidden="true"
          class="ehxzi2l0 css-143sm67 e82dnwa0"
          fill="currentColor"
        >
          <path d="M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z"></path>
        </svg>
        Button
      </Button>
    </div>
  );
};
