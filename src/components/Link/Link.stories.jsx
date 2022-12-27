import React from 'react';

import "../../styles/index.scss";

import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
};


const Template = (args) => <Link {...args}>Ссылка</Link>;

export const Main = Template.bind({});
Main.args={
}
