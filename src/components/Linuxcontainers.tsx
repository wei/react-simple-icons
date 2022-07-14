
    import * as React from 'react';

    export type LinuxcontainersProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Linuxcontainers = React.forwardRef<SVGSVGElement, LinuxcontainersProps>(function Linuxcontainers({color = 'currentColor', size = 24, title = "linuxcontainers", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M10.15 8.98l1.647.951-5.756 3.345.005-1.911L10.15 8.98zm1.723-1.001l-1.553.902 1.548.893.005-1.795zM6.028 5.33L6.025 6.4l.543.316 3.602 2.079 1.632-.948-2.19-1.279-3.231-1.887-.351-.203-.002.852zm.072-.983l.359.209 6.321 3.65 5.258 3.037 5.858-3.405L11.956.943 6.1 4.347zm6.002 12.602l-.005 1.924 5.858-3.404.005-1.924-5.858 3.404zm-.077-9.009l-.005 1.922 5.94 3.428.005-1.92-5.94-3.43zm-10.13.945l4.075 2.352 4.031-2.342-4.075-2.353-4.031 2.343zM24 7.982l-5.858 3.404-.015 3.982 5.858-3.404L24 7.982zm-12.048 10.04l.003-1.073L7.6 14.436l-1.565-.903v.001l-.939-.542L.015 10.06.01 11.979l11.94 6.895.002-.852zm5.935-4.605l-5.922-3.411-5.853 3.401 5.917 3.414 5.858-3.404zm6.072-1.238l-11.862 6.864-.01 4.013 11.863-6.894.009-3.983zM11.944 21.27l.005-2.227L.01 12.148 0 16.162l11.94 6.895.004-1.787zM.021 9.802L1.6 8.885.025 7.976.021 9.802zm5.832-3.39l.024-1.636.001-.296L.099 7.848l1.647.951 4.107-2.387zm.041 4.951L1.749 8.97l-.46.267-1.195.695 5.795 3.345.005-1.914z" />
        </svg>
      );
    });

    export default Linuxcontainers
  