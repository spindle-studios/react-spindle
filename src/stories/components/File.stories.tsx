import { File } from '@components/File';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex">
      <div className="w-[500px] flex-col gap-2 flex">
        <File onFileChange={console.log} />
        <File disabled onFileChange={console.log} />

        <File multiple onFileChange={console.log} />

        <File
          initialFile="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII"
          onFileChange={console.log}
        />
      </div>
    </div>
  );
};

Default.storyName = 'File';
export default { title: 'Components/File' };
