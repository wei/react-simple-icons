import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tutanota = forwardRef(function Tutanota(
  { color = 'currentColor', size = 24, title = 'tutanota', ...others },
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
      <path d="M2.158.934C.978.934.025 1.895.023 3.08.017 9.74.005 16.413 0 23.066c.793-.297 1.67-.56 2.56-.918 6.188-2.485 11.249-4.598 11.253-6.983a1.66 1.66 0 0 0-.016-.23c-.32-2.356-5.916-3.087-5.908-4.166a.37.37 0 0 1 .05-.177c.673-1.184 3.336-1.128 4.316-1.212.982-.085 3.285-.067 3.397-.773a.44.44 0 0 0 .005-.065c.003-.656-1.584-.913-1.584-.913s1.925.29 1.92 1.042a.445.445 0 0 1-.015.114c-.207.81-1.901.962-3.021 1.017-1.06.054-2.673.175-2.679.695 0 .03.005.062.015.095.253.76 6.167 1.127 9.95 3.102 2.178 1.136 3.26 3.004 3.757 4.974V3.08A2.14 2.14 0 0 0 21.866.934H2.158Z" />
    </svg>
  );
});

Tutanota.propTypes = {
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

export default Tutanota;
