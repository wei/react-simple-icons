import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Skypeforbusiness = forwardRef(function Skypeforbusiness(
  { color = 'currentColor', size = 24, title = 'skypeforbusiness', ...others },
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
      <path d="M14.04 10.92l-2.52-.56c-.96-.24-2.04-.52-2.04-1.44 0-.92.76-1.56 2.16-1.56 2.84 0 2.6 1.96 4 1.96.72 0 1.36-.4 1.36-1.16 0-1.76-2.8-3.08-5.2-3.08-2.56 0-5.28 1.08-5.28 4 0 1.4.48 2.92 3.24 3.64l3.44.88c1.04.24 1.36.84 1.36 1.36 0 .88-.92 1.84-2.48 1.84-3.08 0-2.64-2.44-4.28-2.44-.72 0-1.32.52-1.32 1.24 0 1.44 1.76 3.4 5.6 3.4 3.68 0 5.52-1.84 5.52-4.24-.04-1.6-.76-3.2-3.56-3.84zm9.08 3.04c.12-.64.16-1.28.16-1.96C23.28 5.76 18.24.72 12 .72c-.68 0-1.32.04-1.96.16C9.04.32 7.92 0 6.72 0 3 0 0 3 0 6.72c0 1.2.32 2.36.88 3.32-.12.64-.16 1.28-.16 1.96 0 6.24 5.04 11.28 11.28 11.28.68 0 1.32-.04 1.96-.16 1 .56 2.12.88 3.32.88C21 24 24 21 24 17.28c0-1.2-.32-2.36-.88-3.32zm-5.84 8.32c-.88 0-1.72-.24-2.48-.64l-.52-.32-.6.12c-.52.08-1.08.16-1.68.16a9.56 9.56 0 01-9.56-9.56c0-.56.04-1.12.16-1.68l.12-.6-.32-.52c-.44-.76-.64-1.6-.64-2.48 0-2.76 2.24-5 5-5 .88 0 1.72.24 2.48.64l.52.32.6-.12c.56-.08 1.12-.16 1.68-.16A9.56 9.56 0 0121.6 12c0 .56-.04 1.12-.16 1.68l-.12.6.32.52c.44.76.64 1.6.64 2.48 0 2.76-2.24 5-5 5Z" />
    </svg>
  );
});

Skypeforbusiness.propTypes = {
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

export default Skypeforbusiness;
