import { motion } from 'framer-motion';
import { slide, scale } from '@/shared/utils/animations';
import { FC } from 'react';

interface Props {
  data: {
    title: string;
    href: string;
    description?: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string | null) => void;
  handleClick: () => void;
}

const CustomLink: FC<Props> = ({ data, isActive, setSelectedIndicator, handleClick }) => {
  const { title, href, description, index } = data;

  return (
    <motion.div
      className="group relative flex flex-col py-2.5"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <motion.div
          className="h-2 w-2 rounded-full bg-primary"
          variants={scale}
          animate={isActive ? 'open' : 'closed'}
        />
        <div
          tabIndex={0}
          className="cursor-pointer text-2xl font-medium tracking-tight text-text-1 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary sm:text-3xl"
        >
          {title}
        </div>
      </div>
      {description && (
        <span className="ml-5 text-xs text-text-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </span>
      )}
    </motion.div>
  );
};

export default CustomLink;
