import { File } from '@components/File';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex">
      <div className="w-[500px] flex-col gap-2 flex">
        <File onFileChange={console.log} />
        <File disabled onFileChange={console.log} />
      </div>
    </div>
  );
};

Default.storyName = 'File';
export default { title: 'Components/File' };
