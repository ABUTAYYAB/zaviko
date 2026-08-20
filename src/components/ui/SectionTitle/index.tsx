import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string;
  classes?: string;
}

const SectionTitle: FC<Props> = ({ title, classes, ...props }) => {
  return (
    <h2
      className={cn(
        'text-4xl font-extrabold tracking-tight text-text-1 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none',
        classes
      )}
      {...props}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
