// base import
import React from "react";
import { storiesOf } from "@storybook/react";

// Component
import { List } from "./List.jsx";

storiesOf("List", module).add("Simple Example", () => (
  <List>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
  </List>
));

storiesOf("List", module).add("Horizontal Example", () => (
  <List horizontal>
    <p>
      Lorem
      <br />
      Lorem
    </p>
    <p>Lorem</p>
    <p>
      Lorem
      <br />
      Lorem
    </p>
    <p>Lorem</p>
    <p>Lorem</p>
  </List>
));

storiesOf("List", module).add("Align Example", () => (
  <div>
    <List align="top" horizontal>
      <p>
        Lorem
        <br />
        Lorem
      </p>
      <p>Lorem</p>
      <p>
        Lorem
        <br />
        Lorem
      </p>
      <p>Lorem</p>
      <p>
        Lorem
        <br />
        Lorem
      </p>
    </List>

    <List align="bottom" horizontal>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>
        Lorem
        <br />
        Lorem
      </p>
      <p>Lorem</p>
      <p>
        Lorem
        <br />
        Lorem
      </p>
    </List>

    <List align="center" horizontal>
      <p>Lorem</p>
      <p>
        Lorem
        <br />
        Lorem
      </p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
    </List>
  </div>
));
