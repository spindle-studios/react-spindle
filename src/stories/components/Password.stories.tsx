import { Password } from '@components/Password';
import React, { useState } from 'react';

export const Default = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');

  return (
    <div className="flex flex-col gap-8 w-[400px]">
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Default</h3>
        <Password value={password1} onChange={setPassword1} label="Password" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Without requirements shown</h3>
        <Password value={password2} onChange={setPassword2} showRequirements={false} placeholder="Enter password" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Custom requirements</h3>
        <Password
          value={password3}
          onChange={setPassword3}
          requirements={{
            minLength: 12,
            maxLength: 128,
            requireUppercase: true,
            requireLowercase: true,
            requireNumber: true,
            requireSpecial: false,
          }}
        />
      </div>
    </div>
  );
};

Default.storyName = 'Password';
export default { title: 'Components/Password' };
