
    import * as React from 'react';

    export type HiltonProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Hilton = React.forwardRef<SVGSVGElement, HiltonProps>(function Hilton({color = 'currentColor', size = 24, title = "hilton", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M16.123 14.234c0-1.544-1.06-2.788-2.972-3.386V7.347h3.57v8.59h-1.105a2.993 2.993 0 0 0 .506-1.703M11.194 3.708C4.744 3.708 0 7.808 0 12.184c0 2.257 1.267 4.168 2.88 5.481l.114-.092a6.369 6.369 0 0 1-2.418-4.95C.92 7.83 6.818 5.134 12.092 5.134c3.709 0 10.388.85 10.388 7.072 0 3.247-3.455 7.462-10.733 7.462-3.731 0-6.61-2.004-6.61-4.86 0-2.487 1.935-4.26 4.836-4.26a7.83 7.83 0 0 1 2.12.345c-1.199-.207-3.087.092-4.055.85v4.192h3.57v-4.743a4.064 4.064 0 0 1 1.543.6v4.192h.922a3.83 3.83 0 0 1-3.27 1.126v.184c3.385.276 4.813-1.336 4.813-3.156 0-2.118-2.004-3.362-4.03-3.639V7.347h-3.57v3.179c-2.304.46-4.561 1.842-4.561 4.1 0 3.501 4.883 5.666 9.12 5.666 6.452 0 11.425-3.109 11.425-7.508.023-5.299-7.163-9.076-12.806-9.076Z" />
        </svg>
      );
    });

    export default Hilton
  