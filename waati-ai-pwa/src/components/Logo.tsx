import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface LogoProps extends Omit<BoxProps, 'component'> {
  variant?: 'v1' | 'v2' | 'v3';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'v2', 
  size = 'medium', 
  alt = 'Waati AI Logo',
  sx,
  ...props 
}) => {
  const getLogoPath = (variant: string) => {
    switch (variant) {
      case 'v1':
        return '/Logo v1 light.png';
      case 'v2':
        return '/Logo v2 medium.png';
      case 'v3':
        return '/Logo v3 dark.png';
      default:
        return '/Logo v2 medium.png';
    }
  };

  const getSizeStyles = (size: string) => {
    switch (size) {
      case 'small':
        return { width: { xs: 80, sm: 100 }, height: 'auto' };
      case 'medium':
        return { width: { xs: 120, sm: 150, md: 180 }, height: 'auto' };
      case 'large':
        return { width: { xs: 150, sm: 200, md: 250 }, height: 'auto' };
      case 'xlarge':
        return { width: { xs: 200, sm: 250, md: 300, lg: 350 }, height: 'auto' };
      default:
        return { width: { xs: 120, sm: 150, md: 180 }, height: 'auto' };
    }
  };

  return (
    <Box
      component="img"
      src={getLogoPath(variant)}
      alt={alt}
      sx={{
        ...getSizeStyles(size),
        objectFit: 'contain',
        ...sx
      }}
      {...props}
    />
  );
};

export default Logo; 