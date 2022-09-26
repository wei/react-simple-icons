import * as React from 'react';

export type YourtraveldottvProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Yourtraveldottv = React.forwardRef<SVGSVGElement, YourtraveldottvProps>(function Yourtraveldottv({color = 'currentColor', size = 24, title = "yourtraveldottv", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M2.609 6.266c.183-.246.424-.579.617-.817.578-.656.653-.742 1.179-1.227.156-.128.341-.282.522-.427-1.335 1.13-1.505 2.381-.28 3.154-.002 0-.002 0-.002.002 1.713 1.032 5.467.809 8.429-.513 2.869-1.28 3.928-3.111 2.512-4.199-1.243-.233-2.725-.26-4.293-.05l-.163-.269.135-.446c.922-.083 1.798-.063 2.554.066.183.031.424.084.604.122.348.085.537.136.764.209.232.069.43.138.775.266.338.133.484.193.755.328a8.308 8.308 0 01.883.469c2.256 1.419.853 4.008-3.128 5.782-3.97 1.768-9.029 2.046-11.296.644-.001-.002-.004-.004-.01-.006h.004c-1.238-.784-1.368-1.922-.561-3.088zm10.329 9.92l-.032-1.594-1.133-1.26c-3.743.848-7.422.666-9.468-.539-.007-.008-.024-.016-.031-.024C1.116 12.056.83 11.136.917 10.136c-.271 1.463-.293 1.991-.254 3.243.048.784.501 1.507 1.412 2.077l.007.008c2.181 1.356 6.725 1.65 10.856.722zm4.725 1.825c-5.283 2.119-11.895 2.244-14.767.283a8.195 8.195 0 001.252 2.098c2.636 1.8 8.705 1.685 13.552-.26 2.837-1.137 4.627-2.65 5.097-4.068l.132-.427c.313-1.082.372-1.983.422-2.785-.057 1.741-2.108 3.721-5.688 5.159zM6.001 22.092c.166.158.688.799 3.333 1.507.715.158 2.515.665 5.84-.072l.02-.303-.263-.412c-3.085.73-6.512.486-8.93-.72zm7.634-12.609l2.809 2.129s.601.433.034.737c-.565.301-2.016 1.038-2.016 1.038l-1.433-.535-.719.32 1.268 1.101.01 1.713.745-.331.494-1.447s1.517-.584 2.119-.804c.605-.215.524.521.524.521l-.298 3.511.99-.44 1.63-4.737s.864-.42 1.472-.789c.607-.369.815-.981.815-.981s-.592-.255-1.274-.05c-.682.203-1.571.565-1.571.565l-4.612-1.959-.987.438zM7.692 2.747l1.907 1.519.521-.078-1.038-1.363s-.226-.282.078-.349c.306-.068 1.08-.226 1.08-.226l.582.465.392-.058-.444-.706.234-.783-.379.055-.449.596s-.788.074-1.098.1c-.312.024-.178-.311-.178-.311L9.498 0l-.524.077-1.38 2.009s-.46.084-.793.179c-.334.094-.51.352-.51.352s.245.198.59.191c.348-.007.811-.061.811-.061zm9.425 19.518l-1.234-.645-.284.099.731.654s.156.133-.008.204c-.164.07-.582.242-.582.242l-.345-.154-.205.074.287.306-.028.447.214-.074.16-.363s.434-.129.607-.175c.172-.047.133.155.133.155L16.4 24l.285-.099.559-1.276s.247-.097.424-.186.247-.253.247-.253-.157-.086-.351-.043c-.195.041-.447.122-.447.122z" />
    </svg>
  );
});

export default Yourtraveldottv;
