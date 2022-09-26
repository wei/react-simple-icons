import * as React from 'react';

export type UnlicenseProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Unlicense = React.forwardRef<SVGSVGElement, UnlicenseProps>(function Unlicense({color = 'currentColor', size = 24, title = "unlicense", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM12 2.449A9.551 9.551 0 0 0 2.449 12c0 2.09.672 4.024 1.811 5.597L17.597 4.26A9.508 9.508 0 0 0 12 2.449Zm0 19.102A9.551 9.551 0 0 0 21.551 12c0-2.09-.672-4.024-1.811-5.597L6.403 19.74A9.508 9.508 0 0 0 12 21.551Zm0-2.816a6.704 6.704 0 0 1-3.34-.885l2.32-2.32a3.674 3.674 0 0 0 4.388-2.06h3.206A6.737 6.737 0 0 1 12 18.734ZM5.265 12A6.735 6.735 0 0 1 15.34 6.15l-2.32 2.32a3.673 3.673 0 0 0-4.55 4.55l-2.32 2.32A6.704 6.704 0 0 1 5.265 12Zm13.28-1.592h-2.443L17.85 8.66c.309.54.545 1.128.695 1.748Z" />
    </svg>
  );
});

export default Unlicense;
