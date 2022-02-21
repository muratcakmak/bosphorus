import React from 'react';
import type { ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default = () => <Header />;
