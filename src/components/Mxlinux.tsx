
    import * as React from 'react';

    export type MxlinuxProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Mxlinux = React.forwardRef<SVGSVGElement, MxlinuxProps>(function Mxlinux({color = 'currentColor', size = 24, title = "mxlinux", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12.001 13.301l3.277 3.819-.75.9-2.133-2.521-1.131-1.338.737-.86zM24 2.41v19.182c0 .655-.531 1.186-1.186 1.186H1.186A1.186 1.186 0 0 1 0 21.591V2.409c0-.655.531-1.186 1.186-1.186h21.628c.655 0 1.186.53 1.186 1.186zm-2.241 17.09l-2.116-2.542-2.115-2.541-.586.704-3.25-3.788 4.913-5.73-1.175-1.008-4.76 5.549-4.743-5.527-1.947 1.67 5 5.827-.73.851-1.24-1.465-3.384 4-3.385 4h19.518z" />
        </svg>
      );
    });

    export default Mxlinux
  