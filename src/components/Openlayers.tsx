
    import * as React from 'react';

    export type OpenlayersProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Openlayers = React.forwardRef<SVGSVGElement, OpenlayersProps>(function Openlayers({color = 'currentColor', size = 24, title = "openlayers", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M23.7 13.08a3.498 3.498 0 0 1-1.119 1.619l-7.426 6.196a5.137 5.137 0 0 1-6.317 0L1.412 14.7a3.578 3.578 0 0 1-1.12-1.62 3.298 3.298 0 0 0 1.12 3.639l7.426 6.196a5.137 5.137 0 0 0 6.317 0l7.426-6.196a3.298 3.298 0 0 0 1.12-3.639M8.838 1.086a5.137 5.137 0 0 1 6.317 0l7.426 6.196a3.298 3.298 0 0 1 0 5.258l-7.426 6.187a5.137 5.137 0 0 1-6.317 0L1.412 12.53a3.298 3.298 0 0 1 0-5.248z" />
        </svg>
      );
    });

    export default Openlayers
  