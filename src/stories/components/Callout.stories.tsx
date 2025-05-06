import { Callout } from '@components/Callout';
import { Icon } from '@components/Icon';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col items-start gap-2 max-w-[500px]">
    <Callout icon={<Icon name="Info" size={24} />} variant="primary">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem.
    </Callout>
    <Callout icon={<Icon name="Info" size={24} />} variant="secondary">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem.
    </Callout>
    <Callout icon={<Icon name="Info" size={24} />} variant="destructive">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem.
    </Callout>
    <Callout icon={<Icon name="Info" size={24} />} variant="outline">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem.
    </Callout>
    <Callout icon={<Icon name="Info" size={24} />} variant="ghost">
      Voluptate et nisi aliquam. Sed sint error. Ab molestiae exercitationem.
    </Callout>
  </div>
);

Default.storyName = 'Callout';
export default { title: 'Components/Callout' };
