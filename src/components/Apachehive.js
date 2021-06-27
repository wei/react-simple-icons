import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Apachehive = forwardRef(function Apachehive(
  { color = 'currentColor', size = 24, title = 'apachehive', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M5.902.258c-.331.216-.65.525-.994.877-.569.589-.947 1.164-1.526 1.59-.116.1-.441.26-.85.284-.192.01-.318.042-.672-.003-.312-.169-.608-.059-.897.287-.317.456-.72 1.322-.886 1.868-.345 1.39.533 2.536 1.375 3.42.749.73 1.18 1.188 1.488 1.859.233.435.405 1.032.592 1.45.067.133.053.132.235.172.39.084.934.084 1.417.126.209.003.496-.005.768-.033.375-.071.815-.14 1.185-.268.36-.09.682-.212.971-.325-.037.126-.313.249-.416.41-.962 1.376-1.24 2.605-1.09 4.51l-.008-.007.011.05.006.077c.097.874.298 1.6.6 2.43a6.8 6.8 0 0 0 .717 1.38c.072.101.152.205.238.31h-.002l.005.004c.93 1.13 2.706 2.45 5.098 2.986.457.062.975.029 1.463-.1 1.292-.392 3.925-1.319 3.925-1.319s-2.337.194-3.408.088c-.248-.039-.52-.052-.693-.221-.03-.037-.135-.25-.067-.251.093-.003.36-.113.77-.15-.877-.094-.865-.093-.929-.253a9.968 9.968 0 0 0-.409-.884c.386.033 1.24.08 1.529-.218 0 0-.505.058-.951.006a2.76 2.76 0 0 1-.484-.137c-.2-.079-.365-.103-.404-.154-.07-.177-.116-.236-.2-.473-.114-.315-.123-.665-.145-.986.292.36.664.663 1.157.818.006-.013.638.275 1.098.127l.088-.029c-.045.009-.307.02-.409-.03-.934-.398-1.075-.745-1.226-.918l-.403-.604c.123-.245.192-.254.355-.256.491.054.705.096 1.004.024.203.416.257.835.718 1.137 1.533.456 1.866-.135 2.237-.656 1.104.81 2.9 1.059 4.147.014 1.586-1.835 2.088-4.728 1.947-4.893-.198-.336-.457-.683-.68-.635-.796.217-1.09.62-1.877.529.094-.006.252-.008.253-.017.06-.667-.005-.99-.034-1.046-.24-.527-.554-1.082-.772-1.498-.057-.086-.223-.742-.5-1-.12-.102-.41-.37-.41-.37l-.026.285s.114.017.158.193c.079.322.313.854.542 1.33h-.37l.424.11c.228.465.437.852.467.888.193.312.148.673.155.98l-.11.055c-.017-.361-.405-.335-.732-.338l-.268-.066c.082.076.334.07.232.233-.086.046-.125.242-.174.407l-.145.007c.256.1.494.188.776.306l.142.021-.142.357-.193-.078-.007-.135c-.34-.136-.995-.193-1.019-.165-.242.237-.418.524-.609.8.262-.204.46-.512.813-.597.028-.003.378.065.568.098-.122.025-.32.034-.35.077-.269.332-.466.736-.697 1.105.319-.329.416-.666.957-.985.045-.03.375-.023.536.058-.051.183-.167.401-.26.607-.133.313-.386.601-.58.902.608-.74.435-.469.841-.946.17-.404.34-.84.497-1.271l.03-.016c.054.033.47-.008.795.012.559-.12.535-.367 1.018-.404.325-.025.358.586.353.634a7.248 7.248 0 0 1-.58 2.174c-.652 1.258-1.383 2.388-2.42 2.545-1.265.221-1.922-.332-2.608-.684l-.262.224c-.891.887-1.949.808-2.382-.351l-.003-.006a2.839 2.839 0 0 0-.092-.175c-.127-.246-.25-.495-.402-.724-1.338-1.058-.72-2.022-.364-2.632-.744-.188-1.73-.588-1.866-1.113-.219-1.7-.108-2.24.11-3.113-.996.21-2.006.419-3.077.776l-.001-.008c-.286.064-1.246.416-1.518.563-.617.179-1.13.366-1.917.563a2.934 2.934 0 0 1-.753-.002c-.566-.077-1.531-.008-1.593-.065-.383-.535-.488-1.493-.838-2.006l-.004-.005-.005-.004c-.203-.275-.441-.498-.675-.73C1.49 8.213.773 7.407.572 6.554c-.05-.252-.18-.513-.112-1.258l.002-.004.001-.003c.202-.697.53-1.265 1.087-1.834.58.01 1.153.022 1.6.108.205.034.631.09 1.071.254 1.115.415 2.587 1.097 2.587 1.097-1.105-.607-2.34-1.395-3.121-1.554-.117-.017-.188-.07-.222-.162 1.173-.69 1.388-1.502 2.16-2.23.353-.154.49-.232.79-.265 2.774.439 4.52 1.543 5.9 2.282.56.304 1.07.535 1.557.812.426.14 1.713 1.113 2.09 1.637.383.807.662 1.68.917 2.522.183.857.343 1.204.343 1.204s-.155-.716-.13-.845c.162.06.542.18.7.16 0 0-.705-.364-.797-.686-.296-1.033-.594-2.641-.674-2.725-.226-.284-1.168-1.005-1.746-1.339-.218-.126-.336-.204-.345-.26.184-.186.412-.433.617-.59.195-.15.374-.32.647-.42 1.2-.541 1.886.207 2.05.056 0 0-.259-.296-.144-.247.117.063.5.138.542.177.437.342 1.581 1.593 2.27 2.913.166.323.233.536.156.925-.077.39-.136.604-.22.864-.076.174-.505 1.365-.503 1.525-.087.653.28 1.471.28 1.471.003-.222-.014-.34.006-.499l.025-.284s-.016-.075-.013-.105c.019-.196.067-.361.081-.474.138-.853.377-1.467.65-2.216.08-.189.185-.294.18-.438.005-.255-.224-.598-.389-.933a10.141 10.141 0 0 0-.627-1.112c-.596-.857-1.103-1.527-2.033-1.947-.26-.114-1.284-.226-1.638-.16-.429.09-.797.178-1.092.367-.462.296-.826.755-1.252 1.025-.944-.472-1.4-.825-1.484-.874-.561-.3-1.234-.649-1.958-.98-.348-.321-2.504-1.096-4.479-1.25zm9.705 19.318c.004 0 .007-.001.007-.002zm1.957-16.262c.05.26.091.517.287.844.42.463.571.79.63.935.205.526.369 1.052.519 1.578-.05-.548-.237-1.136-.313-1.66-.043-.24-.954-1.68-1.123-1.697zm-7.078 2.51c1.051.267 2.609.274 3.368.743.011.041-.02.068-.066.09-.187-.026-.372-.077-.57-.03-.29.093-.548.269-.822.406.754-.154.965.027 1.538.075.62.236.985 1.375 1.394 1.696-.378-.827-.617-2.06-1.355-2.714-.917-.294-2.267-.226-3.487-.267zm6.987 4.916a3.036 3.036 0 0 0-.668.066c-.16.215-.17.433-.24.635.476-.525.665-.557 1.427-.666a4.429 4.429 0 0 0-.52-.035zm-7.787.365c.496 1.86 1.516 3.733 2.53 5.44.39.496.497.718 1.087 1.018-.049.103-.103.23-.162.376-1.132-.559-2.067-1.232-3.008-1.91-1.512-1.104-1.89-2.418-2.155-4.136a.363.363 0 0 1 .12-.108 4.556 4.556 0 0 1 1.588-.68zm8.185 1.135c-.466-.002-.851.16-1.351.482 0 0 .554-.08.544-.03-.037.175.048.575.073.602l.006-.005c0 .006-.003.008-.006.005l-.306.25c.654-.329 1.341-.263 2.039-.313 0 0-.588-.162-.552-.167.131-.019-.035-.613-.08-.626a4.2 4.2 0 0 1 .334-.094 2.81 2.81 0 0 0-.701-.104zm-1.351.482zm.904.081c.094.001.189.028.22.09a.484.484 0 0 1 .018.265.538.538 0 0 0-.395.12c-.071.07-.123-.347-.068-.412.034-.04.13-.064.225-.063zm3.017.298c.084-.001.256.009.287.12.02.062-.042.27-.072.292-.046.023-.356.003-.369-.061-.026-.076.037-.306.108-.348l.046-.003zm2.897.384l-.553.27c-.9.284-.954.03-1.29-.066.222.253.487.442.958.33.645-.196.667-.36.885-.534zm-16.499.699c.5 1.36 2.887 3.894 6.09 4.278l-.008.018c-.11.266-.202.724-.196 1.104l-.006.01c-4.155-.885-4.67-1.994-5.951-2.987-.093-.768-.105-1.602.071-2.423zm9.442 1.904c-.021 0-.033 0-.033.003-.296.21-.34.412-.334.586.491-.483.473-.485 1.19-.48a7.261 7.261 0 0 0-.823-.109zm.296.363c-.105.567-.487.97-.783 1.368-.059.093-.101.22.189.624.078.108.36.126.55.116-.193-.146-.488-.301-.536-.436.341.233.657.3.943.262.065-.007.146-.077.209-.183.127-.274.227-.34.328-.413l.232.29.262-.223c-.581-.455-1.07-.923-1.394-1.405zm-9.281 2.42c1.46.878 3.814 1.839 5.812 1.791.2.347.439.711.633 1.001-2.544.387-4.308-.391-5.387-.92l-.117-.118c-.345-.391-.676-1.134-.941-1.755zm6.884 3.456c.1.207.262.379.273.402.856 1.116-1.079.859-1.478.791-.71-.113-1.405-.391-2.065-.767 1.074-.021 2.208.06 3.27-.426Z" />
    </svg>
  );
});

Apachehive.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Apachehive;
