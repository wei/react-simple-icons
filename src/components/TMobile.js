import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tmobile = forwardRef(function Tmobile({ color = 'currentColor', size = 24, title = 'tmobile', ...others }, ref) {
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
      <path d="M2.342 0l-.26 8.52 1.3.196c.26-2.537.91-4.358 1.951-5.594C6.44 1.887 8.001 1.17 10.017 1.105v17.757c0 1.56-.195 2.536-.65 2.991-.39.39-1.041.65-1.952.715-.26 0-.716.066-1.366.066V24H17.95v-1.366c-.65 0-1.105 0-1.365-.066-.91-.065-1.561-.325-1.951-.715-.456-.455-.65-1.496-.65-2.991V1.172c2.015.064 3.576.714 4.682 2.015 1.105 1.236 1.756 3.057 1.95 5.593l1.302-.195L21.593 0zm-.26 11.057v4.878h4.877v-4.878H4.62zm14.894 0v4.878h4.878v-4.878h-2.081z" />
    </svg>
  );
});

Tmobile.propTypes = {
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

export default Tmobile;
