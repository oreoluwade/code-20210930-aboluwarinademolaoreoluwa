import React from 'react';

type SpacerPropType = {
  width?: number,
  height: number
}

const Spacer = ({ width, height }: SpacerPropType) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default Spacer;
