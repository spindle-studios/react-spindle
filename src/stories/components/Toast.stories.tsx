import { Button } from '@components/Button';
import { Toast } from '@components/Toast';
import React, { useState } from 'react';

export const Default = () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button onClick={() => setSuccessOpen(true)}>Positive</Button>
      <Button onClick={() => setErrorOpen(true)}>Negative</Button>
      <Button onClick={() => setInfoOpen(true)}>Neutral</Button>
      <Button onClick={() => setActionOpen(true)}>Action</Button>

      <Toast
        open={successOpen}
        onOpenChange={setSuccessOpen}
        variant="positive"
        message="Your changes were saved successfully."
      />

      <Toast
        open={errorOpen}
        onOpenChange={setErrorOpen}
        variant="negative"
        message="Something went wrong. Please try again."
      />

      <Toast
        open={infoOpen}
        onOpenChange={setInfoOpen}
        variant="neutral"
        message="This is some informational message."
      />

      <Toast
        open={actionOpen}
        onOpenChange={setActionOpen}
        variant="action"
        message="Deleted the production database."
        action="Undo"
        onClick={() => alert('Action button clicked!')}
      />
    </div>
  );
};

Default.storyName = 'Toast';
export default { title: 'Components/Toast' };
