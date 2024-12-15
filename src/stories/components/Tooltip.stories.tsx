import { Button } from '@components/Button';
import { Tooltip } from '@components/Tooltip';
import React from 'react';

export const Default = () => <Tooltip content="This is a tooltip" side="top" trigger={<Button>Hover</Button>} />;

Default.storyName = 'Tooltip';
export default { title: 'Components/Tooltip' };
