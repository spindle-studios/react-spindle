import React from 'react';
import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';

export const Default = () => <Tooltip content="This is a tooltip" side="top" trigger={<Button>Hover</Button>} />;

Default.storyName = 'Tooltip';
export default { title: 'Components/Tooltip' };
