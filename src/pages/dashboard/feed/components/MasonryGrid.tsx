import React from 'react';
import Masonry from 'react-masonry-css';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';

interface MasonryGridProps {
  children: React.ReactNode;
  columnCount?: { base: number; md: number; lg: number };
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ children, columnCount = { base: 1, md: 2, lg: 3 } }) => {
  const breakpointColumns = {
    default: columnCount.lg,
    1100: columnCount.md,
    700: columnCount.base,
  };

  return (
    <Box>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {children}
      </Masonry>

      <Global
        styles={`
          .masonry-grid {
            display: flex;
            width: auto;
            margin-left: -16px; /* Adjust based on your gap */
          }
          .masonry-grid_column {
            padding-left: 16px; /* Adjust based on your gap */
            background-clip: padding-box;
          }
          .masonry-grid_column > div {
            margin-bottom: 16px; /* Adjust based on your gap */
          }
        `}
      />
    </Box>
  );
};

export default MasonryGrid;