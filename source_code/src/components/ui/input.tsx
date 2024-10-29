import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errorMsg?: string;
  wrapperStyles?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, name, type, id, label, errorMsg, wrapperStyles, ...props },
    ref,
  ) => {
    return (
      <div className={wrapperStyles}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          name={name}
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {errorMsg && <p className='text-xs text-rose-500'>{errorMsg}</p>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
