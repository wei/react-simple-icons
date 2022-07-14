
    import * as React from 'react';

    export type LinodeProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Linode = React.forwardRef<SVGSVGElement, LinodeProps>(function Linode({color = 'currentColor', size = 24, title = "linode", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M22.006 10.684a.15.15 0 0 0-.07-.15l-3.261-1.821a.14.14 0 0 0-.14 0l-2.771 1.69a.17.17 0 0 0-.07.13v1.451l-1.13-.74a.14.14 0 0 0-.15 0l-1.62 1-.071-1.64a.19.19 0 0 0-.07-.12l-1.65-1.09 1.51-.781a.16.16 0 0 0 .08-.14l-.27-6.272a.16.16 0 0 0-.08-.13L8 0h-.1L2.08 1.81A.16.16 0 0 0 2 2l1.27 6.233a.22.22 0 0 0 0 .08l1.83 1.38-1.26.6a.16.16 0 0 0-.08.17l1 4.702a.18.18 0 0 0 0 .07L6 16.375l-.8.49a.15.15 0 0 0-.06.16l.75 3.642a.11.11 0 0 0 0 .07l3.002 3.221a.14.14 0 0 0 .2 0l3.921-3.121a.16.16 0 0 0 .06-.12l-.07-2.12 1.32 1.1a.14.14 0 0 0 .18 0l3.142-2.511a.24.24 0 0 0 .06-.11l.09-1.57 1 .67a.14.14 0 0 0 .17 0l2.571-2.001a.14.14 0 0 0 .05-.1zm-9.623.15l.07 1.57.12 2.781-4.231 2.871-.66-4.532zm-.35-8.423l.25 5.912-5.002 2.59-.9-6.321zM3.54 8.123L2.33 2.26l3.74 2.32.931 6.203-1.58-1.2zM5 15.055l-.88-4.261 3.281 2.74.6 4.382-1.68-1.62zm1.14 5.512l-.65-3.141 2.892 2.85.47 3.162zm3.002 3l-.49-3.33 4.001-2.871.14 3.28zm3.861-5.36v-1.081a.16.16 0 0 0-.05-.11l-1.13-.92 1-.7a.14.14 0 0 0 .06-.12v-.261l1.39 1.06v3.211zm4.442-1.201l-2.861 2.28v-3.22l3.07-2.201zm1.29-1.21l-.9-.631.09-1.59a.11.11 0 0 0 0-.06.1.1 0 0 0 0-.05l-1.93-1.27v-1.391l3 1.89zm2.55-1.861l-2.28 1.81.26-3.06 2.431-1.681z" />
        </svg>
      );
    });

    export default Linode
  