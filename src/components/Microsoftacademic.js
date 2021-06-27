import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Microsoftacademic = forwardRef(function Microsoftacademic(
  { color = 'currentColor', size = 24, title = 'microsoftacademic', ...others },
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
      <path d="M19.056 23.992c-4.018-2.966-10.695-8.022-19-9.125l3.55-3.472c10.19 3.935 15.45 12.597 15.45 12.597zM.48 18.437l2.77-2.217C11.334 18.208 18.19 24 18.19 24 15.303 22.37 7.113 18.36.48 18.437zm2.543-8.042l9.25-8.23 1.992 1.153L9.78 8.41c4.83 3.983 10.19 8.22 9.71 15.127C14.734 16.799 9.127 11.98 3.024 10.395zm7.907-2.131L18.035 0c3.791 3.1 5.91 7.913 5.91 10.513-.309 3.322-3.558 11.35-3.858 12.236-.225-2.007 1.434-5.56-9.157-14.485z" />
    </svg>
  );
});

Microsoftacademic.propTypes = {
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

export default Microsoftacademic;
