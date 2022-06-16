import * as React from 'react';

export type UnacademyProps = {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Unacademy = React.forwardRef<SVGSVGElement, UnacademyProps>(function Unacademy(
  { color = 'currentColor', size = 24, title = 'unacademy', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M.715 2.188a.696.696 0 00-.711.713H0l.002.027c-.01.306.03.658.123 1.081.905 5.546 5.875 9.788 11.87 9.788 5.935 0 10.864-4.157 11.84-9.622.126-.512.177-.921.162-1.273a.696.696 0 00-.713-.714zm11.243 13.82c-2.967 0-5.432 2.079-5.92 4.81a2.287 2.287 0 00-.08.638c0 .201.15.356.355.356h11.285a.348.348 0 00.356-.356h.002v-.014a2.21 2.21 0 00-.063-.54c-.453-2.774-2.938-4.894-5.935-4.894z' />
    </svg>
  );
});

export default Unacademy;