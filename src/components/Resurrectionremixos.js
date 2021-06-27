import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Resurrectionremixos = forwardRef(function Resurrectionremixos(
  { color = 'currentColor', size = 24, title = 'resurrectionremixos', ...others },
  ref
) {
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
      <path d="M24 3.53l-9.952.078C9.142 3.647 6.994 8.265 0 16.345c1.569.753 3.323 1.24 4.338.119 1.703-1.883 4.275-5.48 7.154-8.346 1.793-1.784 6.01-.865 9.95-1.23 1.351-.125 2.41-2.48 2.558-3.359zm-.147 6.076l-7.326.044c-4.39 0-5.38 2.492-11.91 10.24 1.194.563 3.28.84 3.763.257 1.78-2.158 2.506-3.51 5.36-6.362 1.657-1.658 4.39-.687 7.86-1.01 1.267-.12 2.132-2.449 2.253-3.169z" />
    </svg>
  );
});

Resurrectionremixos.propTypes = {
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

export default Resurrectionremixos;
