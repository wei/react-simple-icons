
    import * as React from 'react';

    export type FiteProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Fite = React.forwardRef<SVGSVGElement, FiteProps>(function Fite({color = 'currentColor', size = 24, title = "fite", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M3.52 8.254c-.347 0-.667.08-1.014.213-.427.186-.666.454-.746.8L0 15.748h2.533l.801-3.015h3.28l.4-1.464H3.732l.375-1.362c.027-.133.133-.185.346-.185h3.014l.346-1.467H3.52zm4.826 0l-2 7.492H8.88l2-7.492H8.346zm2.8 0l-.373 1.467h1.84c.16 0 .24.053.24.16v.025l-1.574 5.84h2.534l1.574-5.84c.026-.133.132-.185.345-.185h1.842l.319-1.467h-6.747zm8.534 0c-.347 0-.667.08-1.014.213-.427.186-.666.453-.746.773l-1.467 5.492c0 .027-.027.081-.027.108v.107c0 .267.162.48.455.614.24.106.505.185.799.185H22l.4-1.467h-3.013c-.16 0-.24-.053-.24-.16v-.025l.373-1.387h3.28l.4-1.467h-3.28l.348-1.334c.053-.133.159-.185.345-.185h3.014L24 8.254h-4.32Z" />
        </svg>
      );
    });

    export default Fite
  