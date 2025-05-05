import { Callout } from '@components/Callout';
import { Icon } from '@components/Icon';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col items-center justify-center">
    <Callout icon={<Icon name="Info" size={24} />} className="max-w-[500px]">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem. Aperiam soluta sed sint velit autem
      cupiditate at. Enim omnis occaecati nostrum earum sed voluptate. Porro quo consectetur. Voluptate et nisi aliquam.
    </Callout>
  </div>
);

Default.storyName = 'Callout';
export default { title: 'Components/Callout' };
