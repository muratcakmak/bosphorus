import React from 'react';
import type { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button title="press" />;
