import clsx from 'clsx';
import React, { Suspense, lazy, useMemo } from 'react';

export const Icon: React.FC<{
  name: string;
  size?: number | string;
  className?: string;
}> = ({ name, size = 16, className, ...props }) => {
  const LucideIcon = useMemo(() => {
    // @ts-expect-error - lazy import
    return lazy(async () => {
      const mod = await import('lucide-react');
      if (name in mod) {
        return { default: mod[name as keyof typeof mod] as React.ElementType };
      } else {
        console.warn(`Icon "${name}" does not exist in lucide-react.`);
        return { default: () => <span style={{ color: 'red' }}>Invalid Icon</span> };
      }
    });
  }, [name]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: typeof size === 'number' ? `${size}px` : size,
            height: typeof size === 'number' ? `${size}px` : size,
          }}
        />
      }
    >
      <LucideIcon className={clsx(className)} size={size} {...props} />
    </Suspense>
  );
};
