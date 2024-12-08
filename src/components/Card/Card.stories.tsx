import { Meta } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

const Template = () => (
  <div className="flex flex-col items-center justify-center">
    <Card className="max-w-[300px]">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem. Aperiam soluta sed sint velit autem
      cupiditate at. Enim omnis occaecati nostrum earum sed voluptate. Porro quo consectetur. Voluptate et nisi aliquam.
    </Card>
  </div>
);

export const Default = Template.bind({});
