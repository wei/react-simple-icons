import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Jamstack = forwardRef(function Jamstack(
  { color = 'currentColor', size = 24, title = 'jamstack', ...others },
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
      <path d="M12 0C5.365 0 0 5.364 0 12s5.365 12 12 12 12-5.364 12-12V0zm.496 3.318h8.17v8.17h-8.17zm-9.168 9.178h8.16v8.149c-4.382-.257-7.904-3.767-8.16-8.149zm9.168.016h8.152a8.684 8.684 0 01-8.152 8.148z" />
    </svg>
  );
});

Jamstack.propTypes = {
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

export default Jamstack;
