import * as React from 'react';

export type CoderwallProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Coderwall = React.forwardRef<SVGSVGElement, CoderwallProps>(function Coderwall({color = 'currentColor', size = 24, title = "coderwall", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M21.354 18.708c1.46 0 2.646 1.185 2.646 2.646C24 22.814 22.814 24 21.354 24s-2.646-1.186-2.646-2.646c0-1.458 1.185-2.646 2.646-2.646zM12 9.354c1.46 0 2.646 1.186 2.646 2.646S13.46 14.646 12 14.646 9.354 13.46 9.354 12 10.54 9.354 12 9.354zm9.354 0C22.814 9.354 24 10.54 24 12s-1.186 2.646-2.646 2.646S18.708 13.46 18.708 12s1.185-2.646 2.646-2.646zM12 0c1.46 0 2.646 1.185 2.646 2.646 0 1.46-1.186 2.646-2.646 2.646S9.354 4.106 9.354 2.646 10.54 0 12 0zM2.646 0c1.46 0 2.646 1.185 2.646 2.646 0 1.46-1.186 2.646-2.646 2.646S0 4.106 0 2.646 1.186 0 2.646 0zm18.708 0C22.814 0 24 1.185 24 2.646c0 1.46-1.186 2.646-2.646 2.646s-2.646-1.186-2.646-2.646S19.893 0 21.354 0z" />
    </svg>
  );
});

export default Coderwall;
