
    import * as React from 'react';

    export type LmmsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Lmms = React.forwardRef<SVGSVGElement, LmmsProps>(function Lmms({color = 'currentColor', size = 24, title = "lmms", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M1.714 0A1.71 1.71 0 000 1.714v20.572C0 23.236.765 24 1.714 24h20.572A1.71 1.71 0 0024 22.286V1.714A1.71 1.71 0 0022.286 0zM12 3l9 5.143v10.286l-3 1.714-3-1.714V15l3-1.714V9.857L12 6.43 6 9.857v3.429L9 15v3.429l-3 1.714-3-1.714V8.143Z" />
        </svg>
      );
    });

    export default Lmms
  