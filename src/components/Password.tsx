import clsx from 'clsx';
import React, { useState } from 'react';
import { Icon } from './Icon';
import { Input } from './Input';

type PasswordRequirementConfig = {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
  requireSpecial?: boolean;
  specialChars?: string;
};

const DEFAULT_REQUIREMENTS: Required<PasswordRequirementConfig> = {
  minLength: 8,
  maxLength: 64,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: false,
  requireSpecial: true,
  specialChars: '!@#$%^&*(),.?":{}|<>',
};

const PasswordRequirement: React.FC<{ text: string; isValid: boolean }> = ({ text, isValid }) => (
  <div className="flex items-center gap-2">
    <Icon
      name={isValid ? 'CheckCircle' : 'Circle'}
      size={14}
      className={isValid ? 'text-primary' : 'text-muted-foreground'}
    />
    <span className={clsx('text-sm', isValid ? 'text-primary' : 'text-muted-foreground')}>{text}</span>
  </div>
);

export const Password: React.FC<{
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onValidate?: (isValid: boolean) => void;
  requirements?: PasswordRequirementConfig;
  showRequirements?: boolean;
  placeholder?: string;
  label?: string;
  size?: 'lg' | 'md' | 'sm';
  containerClassName?: string;
  className?: string;
}> = ({
  value,
  onChange,
  onKeyDown,
  onValidate,
  requirements: customRequirements,
  showRequirements = true,
  placeholder = 'Password',
  label,
  size = 'md',
  containerClassName,
  className,
}) => {
  const requirements = { ...DEFAULT_REQUIREMENTS, ...customRequirements };
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState({
    hasLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    const specialRegex = new RegExp(`[${requirements.specialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);

    const newValidation = {
      hasLength: newValue.length >= requirements.minLength && newValue.length <= requirements.maxLength,
      hasUppercase: !requirements.requireUppercase || /[A-Z]/.test(newValue),
      hasLowercase: !requirements.requireLowercase || /[a-z]/.test(newValue),
      hasNumber: !requirements.requireNumber || /[0-9]/.test(newValue),
      hasSpecial: !requirements.requireSpecial || specialRegex.test(newValue),
    };

    setValidation(newValidation);

    const isValid =
      newValidation.hasLength &&
      newValidation.hasUppercase &&
      newValidation.hasLowercase &&
      newValidation.hasNumber &&
      newValidation.hasSpecial;

    onValidate?.(isValid);
  };

  const isValid =
    validation.hasLength &&
    validation.hasUppercase &&
    validation.hasLowercase &&
    validation.hasNumber &&
    validation.hasSpecial;

  return (
    <div className={clsx('flex flex-col gap-2', containerClassName)}>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        label={label}
        size={size}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className={clsx(isValid && value ? 'border-primary' : '', className)}
        right={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={16} />
          </button>
        }
      />
      {showRequirements && (
        <div className="ml-3 flex flex-col gap-1">
          <PasswordRequirement
            text={`Between ${requirements.minLength} and ${requirements.maxLength} characters`}
            isValid={validation.hasLength}
          />
          {requirements.requireUppercase && (
            <PasswordRequirement text="At least one uppercase letter" isValid={validation.hasUppercase} />
          )}
          {requirements.requireLowercase && (
            <PasswordRequirement text="At least one lowercase letter" isValid={validation.hasLowercase} />
          )}
          {requirements.requireNumber && (
            <PasswordRequirement text="At least one number" isValid={validation.hasNumber} />
          )}
          {requirements.requireSpecial && (
            <PasswordRequirement text="At least one special character" isValid={validation.hasSpecial} />
          )}
        </div>
      )}
    </div>
  );
};
