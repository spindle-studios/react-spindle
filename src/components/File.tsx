import { Icon } from '@components/Icon';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

export const File = React.forwardRef<
  HTMLInputElement,
  {
    label?: React.ReactNode;
    title?: string;
    maxFileSize?: number;
    initialFile?: string;
    containerClassName?: string;
    onFileChange: (files: string[]) => void;
    onError?: (error: string) => void;
  } & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      title,
      maxFileSize = 1024 * 1024 * 2, // 2MB
      initialFile = null,
      containerClassName,
      disabled,
      multiple,
      className,
      onFileChange,
      onError,
      ...props
    },
    ref,
  ) => {
    const [fileSrc, setFileSrc] = useState<string | null>(initialFile);
    const internalRef = useRef<HTMLInputElement>(null);

    const inputRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

    useEffect(() => {
      setFileSrc(initialFile);
    }, [props.value, initialFile]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        const fileReaders: Promise<string>[] = Array.from(files).map((file) => {
          return new Promise((resolve, reject) => {
            if (file.size > maxFileSize) {
              onError?.(`File must be less than ${maxFileSize / 1024 / 1024}MB`);
              return reject();
            }
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(reader.result as string);
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
        });

        const base64Files = await Promise.all(fileReaders);
        setFileSrc(base64Files[0] ?? null);
        onFileChange(base64Files);
      }
    };

    return (
      <div className={clsx('flex flex-col gap-1', containerClassName)}>
        {label && <label className="text-sm font-medium text-foreground">{label}</label>}
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          multiple={multiple}
          className="hidden"
          {...props}
        />
        <button
          disabled={disabled}
          type="button"
          className={clsx(
            'flex h-10 w-full items-center justify-start rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
            'hover:bg-accent hover:text-accent-foreground disabled:opacity-50',
            'transition-all active:scale-smaller active:disabled:scale-default',
            className,
          )}
          onClick={() => inputRef.current?.click()}
        >
          <div className="relative flex h-5 w-5 items-center justify-center mr-2">
            {fileSrc ? (
              multiple ? (
                <Icon name="Images" size={20} className="text-muted-foreground" />
              ) : (
                <img src={fileSrc} alt="Uploaded file preview" className="h-5 w-5 rounded-md object-cover" />
              )
            ) : (
              <Icon name="Upload" size={20} className="text-muted-foreground" />
            )}
          </div>
          {title ? (
            <span className="truncate">{title}</span>
          ) : (
            <span className="truncate">
              {fileSrc ? 'Change' : 'Upload'} {multiple ? 'files' : 'file'}
            </span>
          )}
        </button>
      </div>
    );
  },
);
