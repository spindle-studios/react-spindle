import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Card: React.FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return (
    <div className={clsx('border border-border bg-card text-card-foreground rounded-md p-4', className)} {...props} />
  );
};
