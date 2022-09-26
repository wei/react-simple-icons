import * as React from 'react';

export type WebglProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Webgl = React.forwardRef<SVGSVGElement, WebglProps>(function Webgl({color = 'currentColor', size = 24, title = "webgl", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M18.928 14.179c-.214.09-.427.135-.643.135-.342 0-.65-.059-.923-.178a1.963 1.963 0 0 1-.69-.491c-.187-.209-.332-.453-.432-.735s-.149-.586-.149-.911c0-.335.05-.643.149-.93.1-.287.242-.536.429-.747a1.96 1.96 0 0 1 .69-.501 2.25 2.25 0 0 1 .923-.183c.23 0 .451.036.664.104.214.069.408.171.581.304s.316.299.427.496a1.7 1.7 0 0 1 .206.676h-.935c-.059-.249-.171-.437-.337-.562a.973.973 0 0 0-.607-.187c-.221 0-.408.043-.562.128s-.28.199-.375.344c-.095.145-.166.308-.209.491s-.066.372-.066.569c0 .187.021.37.066.548.043.178.114.337.209.479.095.142.221.256.375.342s.342.128.562.128c.325 0 .577-.083.754-.247.178-.164.28-.401.311-.714h-.987V11.8h1.872v2.413h-.624l-.1-.505a1.444 1.444 0 0 1-.579.471zm2.896-4.429v3.632H24v.828h-3.155V9.75h.979zM2.785 11.999c0-.709.343-1.376.948-1.962l1.109 4.221h.764l1.075-3.815 1.06 3.815h.766l1.321-4.856h-.86l-.861 3.725-1.039-3.726H6.28l-1.039 3.725-.84-3.632c1.489-1.025 3.868-1.69 6.548-1.69 2.512 0 4.764.529 6.261 1.445-1.632-1.535-4.565-2.612-7.915-2.614C4.161 6.635 0 9.036 0 11.999s4.161 5.367 9.293 5.367c3.338 0 6.261-1.075 7.9-2.6-1.497.911-3.741 1.428-6.244 1.428-4.51-.001-8.164-1.877-8.164-4.195zm9.194-.553a1.184 1.184 0 0 0-.444-.384 1.378 1.378 0 0 0-.622-.135c-.261 0-.496.047-.7.14a1.313 1.313 0 0 0-.489.387c-.244.311-.372.75-.372 1.269 0 .23.033.448.097.643a1.5 1.5 0 0 0 .285.515c.261.304.633.465 1.077.465.233 0 .422-.024.581-.074.138-.043.23-.1.306-.149a1.357 1.357 0 0 0 .444-.489c.09-.166.135-.323.145-.403l.007-.055h-.633l-.002.045c-.017.206-.287.574-.769.574-.688 0-.852-.498-.864-.937h2.306v-.05a3.15 3.15 0 0 0-.085-.766 1.84 1.84 0 0 0-.268-.596zm-1.139.05c.51 0 .783.275.833.84h-1.651c.025-.458.388-.84.818-.84zm4.678.415a1.575 1.575 0 0 0-.268-.515 1.25 1.25 0 0 0-.437-.346 1.36 1.36 0 0 0-.586-.126 1.141 1.141 0 0 0-.531.128 1.1 1.1 0 0 0-.346.28v-1.49h-.631v4.413h.6v-.301a.964.964 0 0 0 .211.206c.171.123.382.185.626.185.263 0 .501-.059.7-.176.178-.104.33-.254.448-.444a1.93 1.93 0 0 0 .235-.584 2.66 2.66 0 0 0 .069-.603 1.986 1.986 0 0 0-.09-.627zm-.567.717c0 .346-.069.636-.202.84a.682.682 0 0 1-.605.325c-.377 0-.819-.263-.819-1.008 0-.356.045-.631.135-.84.13-.301.351-.446.671-.446.342 0 .572.133.7.41.106.227.12.505.12.719z" />
    </svg>
  );
});

export default Webgl;
