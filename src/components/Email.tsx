import clsx from 'clsx';
import React, { useState } from 'react';
import { Icon } from './Icon';
import { Input } from './Input';

const DEFAULT_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Email: React.FC<{
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onValidate?: (isValid: boolean) => void;
  validate?: (value: string) => boolean;
  placeholder?: string;
  label?: string;
  size?: 'lg' | 'md' | 'sm';
  showIcon?: boolean;
  showValidation?: boolean;
  containerClassName?: string;
  className?: string;
}> = ({
  value,
  onChange,
  onKeyDown,
  onValidate,
  validate,
  placeholder = 'Email',
  label,
  size = 'md',
  showIcon = true,
  showValidation = true,
  containerClassName,
  className,
}) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (validate) {
      return validate(email);
    }
    return DEFAULT_EMAIL_REGEX.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    const emailValid = validateEmail(newValue);
    setIsValid(emailValid);
    onValidate?.(emailValid);
  };

  return (
    <div className={clsx('flex flex-col gap-2', containerClassName)}>
      <Input
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        left={showIcon ? <Icon name="Mail" /> : undefined}
        right={
          showValidation && value ? (
            <Icon
              name={isValid ? 'CheckCircle' : 'Circle'}
              className={isValid ? 'text-primary' : 'text-muted-foreground'}
            />
          ) : undefined
        }
        placeholder={placeholder}
        label={label}
        size={size}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className={clsx(isValid && value ? 'border-primary' : '', className)}
      />
    </div>
  );
};
