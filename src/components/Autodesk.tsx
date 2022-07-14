
    import * as React from 'react';

    export type AutodeskProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Autodesk = React.forwardRef<SVGSVGElement, AutodeskProps>(function Autodesk({color = 'currentColor', size = 24, title = "autodesk", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M6.898.437S7.87.534 8.26 1.505c0 0 1.069 2.526 2.04 4.955 1.42 3.33 3.22 7.615 4.67 11.078H1.167c-.778 0-1.166-.486-1.166-.486.777 1.36 3.012 5.636 3.012 5.636.388.486.777.776 1.36.776 1.264 0 3.208-1.262 3.208-1.262l7.409-4.619c1.412 3.372 2.5 5.98 2.5 5.98H24c.097-.097-9.327-22.446-9.424-22.544-.097-.097-.292-.582-.972-.582zm-.29.875c-.583 0-.778.485-.875.582L.39 14.526c-.291.874-.097 1.943 1.458 1.943h4.177l3.693-8.841A453.32 453.32 0 0 0 7.58 2.38c-.097-.291-.389-1.068-.972-1.068z" />
        </svg>
      );
    });

    export default Autodesk
  