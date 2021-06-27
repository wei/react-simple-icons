import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Airplayvideo = forwardRef(function Airplayvideo(
  { color = 'currentColor', size = 24, title = 'airplayvideo', ...others },
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
      <path d="M3.412 1.32c-1.178 0-1.584.122-2.031.366A2.449 2.449 0 00.365 2.7C.122 3.148 0 3.553 0 4.771v9.137c0 1.178.122 1.585.365 2.031.244.447.57.772 1.016 1.016.406.244.813.365 2.031.365h2.72l1.138-1.34H3.006c-.325.041-.69-.001-1.016-.164-.203-.08-.366-.283-.488-.486-.122-.325-.203-.65-.162-1.016V4.406c-.04-.325 0-.69.162-1.015.081-.203.285-.365.488-.487.325-.122.65-.204 1.016-.164h17.867c.325-.04.69.002 1.016.164.203.082.364.284.486.487.122.324.203.65.162 1.015v9.95c.04.324 0 .69-.162 1.015-.081.203-.283.365-.486.486-.325.122-.65.203-1.016.163h-4.264l1.137 1.341 2.803-.04c1.218 0 1.623-.122 2.07-.366a2.449 2.449 0 001.016-1.016c.243-.406.365-.813.365-2.03V4.77c0-1.218-.122-1.623-.365-2.07a2.449 2.449 0 00-1.016-1.015c-.447-.244-.852-.366-2.07-.366H3.412zm8.451 12.198a.501.501 0 00-.37.187l-7.106 8.162a.465.465 0 00-.123.326.47.47 0 00.488.487h14.293c.122 0 .245-.04.326-.121.203-.163.204-.489.041-.692l-7.107-8.162-.041-.04a.594.594 0 00-.4-.147z" />
    </svg>
  );
});

Airplayvideo.propTypes = {
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

export default Airplayvideo;
