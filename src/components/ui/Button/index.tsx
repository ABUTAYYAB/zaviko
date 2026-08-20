import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
  btnClasses?: string;
  classes?: string;
  variant?: 'conic' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

const Button: FC<Props> = ({
  title,
  children,
  classes,
  btnClasses,
  variant = 'conic',
  size = 'md',
  icon,
  ...props
}) => {
  const content = children || title;

  if (variant === 'conic') {
    return (
      <button
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-bg-1 active:scale-[0.98] transition-transform duration-200',
          btnClasses
        )}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CCC2DC_0%,#4A4458_45%,#A78BFA_55%,#CCC2DC_100%)] opacity-80 group-hover:opacity-100 group-hover:animate-[spin_2.5s_linear_infinite]" />
        <span
          className={cn(
            'inline-flex h-full w-full cursor-pointer items-center justify-center space-x-2 rounded-full bg-bg-1/90 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-1 backdrop-blur-xl transition-colors duration-300 group-hover:bg-bg-1/70 group-hover:text-white',
            size === 'sm' && 'px-4 py-2 text-[11px]',
            size === 'lg' && 'px-8 py-4 text-sm',
            classes
          )}
        >
          <span>{content}</span>
          {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </span>
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center space-x-2 rounded-full border border-stroke bg-bg-2 px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-text-1 transition-all duration-300 hover:border-stroke-light hover:bg-bg-3 hover:text-white active:scale-[0.98]',
          size === 'sm' && 'px-4 py-2 text-[11px]',
          size === 'lg' && 'px-8 py-4 text-sm',
          btnClasses
        )}
        {...props}
      >
        <span>{content}</span>
        {icon && <span>{icon}</span>}
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center space-x-2 rounded-full border border-stroke-light bg-transparent px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-text-2 transition-all duration-300 hover:border-primary hover:text-text-1 active:scale-[0.98]',
          size === 'sm' && 'px-3.5 py-1.5 text-[10px]',
          size === 'lg' && 'px-7 py-3.5 text-sm',
          btnClasses
        )}
        {...props}
      >
        <span>{content}</span>
        {icon && <span>{icon}</span>}
      </button>
    );
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center space-x-2 rounded-full bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-bg-1 transition-all duration-300 hover:bg-primary-hover active:scale-[0.98]',
        size === 'sm' && 'px-4 py-2 text-[11px]',
        size === 'lg' && 'px-8 py-4 text-sm',
        btnClasses
      )}
      {...props}
    >
      <span>{content}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
