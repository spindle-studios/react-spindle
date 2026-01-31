import { Email } from '@components/Email';
import React, { useState } from 'react';

export const Default = () => {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [email3, setEmail3] = useState('');

  return (
    <div className="flex flex-col gap-8 w-[400px]">
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Default</h3>
        <Email value={email1} onChange={setEmail1} label="Email address" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Without icon</h3>
        <Email value={email2} onChange={setEmail2} showIcon={false} placeholder="you@example.com" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Custom validation</h3>
        <Email
          value={email3}
          onChange={setEmail3}
          placeholder="Only @company.com emails"
          validate={(value) => value.endsWith('@company.com')}
        />
      </div>
    </div>
  );
};

Default.storyName = 'Email';
export default { title: 'Components/Email' };
