
    import * as React from 'react';

    export type CloudcannonProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Cloudcannon = React.forwardRef<SVGSVGElement, CloudcannonProps>(function Cloudcannon({color = 'currentColor', size = 24, title = "cloudcannon", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M20.686 7.602c.321-1.964-1.203-3.778-3.21-3.778-.91 0-1.733.376-2.325.977a1.132 1.132 0 0 0-1.061-.744c-.63 0-1.141.51-1.141 1.14s.429.909 1.34 1.335a5.884 5.884 0 0 1 .813.46c.275.184.534.388.776.612A6.02 6.02 0 0 1 17.796 12a6.02 6.02 0 0 1-2.694 5.008 6.16 6.16 0 0 1-.813.46c-.911.427-1.34.704-1.34 1.335 0 .63.51 1.141 1.14 1.141.492 0 .9-.312 1.062-.744.592.6 1.414.976 2.325.976 2.025 0 3.527-1.81 3.21-3.778C22.61 15.842 24 14.026 24 12.001c0-2.038-1.382-3.837-3.314-4.399zM9.711 17.468a6.193 6.193 0 0 1-1.589-1.073A6.02 6.02 0 0 1 6.204 12a6.02 6.02 0 0 1 1.918-4.395 6.22 6.22 0 0 1 1.589-1.072c.91-.427 1.34-.704 1.34-1.335s-.51-1.141-1.14-1.141c-.492 0-.9.312-1.062.744a3.257 3.257 0 0 0-2.325-.976c-2.003 0-3.536 1.807-3.21 3.778C1.381 8.164 0 9.962 0 12c0 2.028 1.38 3.836 3.314 4.397-.323 1.954 1.198 3.778 3.21 3.778.91 0 1.733-.375 2.325-.976.162.432.57.744 1.061.744.63 0 1.141-.51 1.141-1.14 0-.631-.429-.909-1.34-1.335zM12 8.443a3.557 3.557 0 1 1 0 7.114 3.557 3.557 0 0 1 0-7.114z" />
        </svg>
      );
    });

    export default Cloudcannon
  