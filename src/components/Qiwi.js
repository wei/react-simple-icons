import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Qiwi = forwardRef(function Qiwi({ color = 'currentColor', size = 24, title = 'qiwi', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M11.064 0C5.17 0 .391 4.778.391 10.673c0 5.895 4.779 10.673 10.674 10.673 1.567 0 3.118-.293 5.398-.31 2.033 0 4.267.714 6.718 2.886.248.217.574-.062.357-.326-2.405-3.056-4.64-3.63-6.873-4.126-2.73-.606-4.126-2.126-5.104-3.817-.186-.341-.28-.279-.295.156-.018.639.03 1.278.14 1.908h-.326a7.066 7.066 0 01-7.06-7.06A7.065 7.065 0 0111.08 3.6a7.064 7.064 0 017.013 7.88c-.528-.093-1.537-.108-2.25-.046-.264.031-.233.155-.031.187 2.327.434 3.925 1.877 4.297 4.499.015.062.093.077.124.03a10.739 10.739 0 001.505-5.476C21.738 4.778 16.96 0 11.064 0zm7.644 15.077a.312.312 0 00-.306.157c-.124.218-.03.636.202 1.009.232.372.45.558.606.558.155 0 .294-.186.232-.667-.03-.264-.186-.868-.59-1.024-.047-.021-.101-.023-.144-.033zm-2.214 1.787c-.217 0-.388.076-.497.216-.279.341-.155.962.28 1.335.186.17.466.263.73.263a.816.816 0 00.635-.278c.249-.342.11-.808-.372-1.211-.248-.217-.527-.325-.776-.325Z" />
    </svg>
  );
});

Qiwi.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Qiwi;
