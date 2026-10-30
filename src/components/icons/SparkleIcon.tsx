import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const SparkleIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
};

