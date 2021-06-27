import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Amazonprime = forwardRef(function Amazonprime(
  { color = 'currentColor', size = 24, title = 'amazonprime', ...others },
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
      <path d="M1.8054 12.403c-.0699-.096-.144-.1746-.144-.3538v-.5945c0-.2523.0179-.484-.168-.6576-.1466-.1408-.3892-.1903-.5752-.1903-.3635 0-.7688.136-.8542.5849-.0087.0476.0258.0728.0573.08l.3703.0398c.0345-.0014.0597-.0358.066-.0703.032-.1544.1616-.2292.3073-.2292.0786 0 .1679.0292.214.099.0538.0787.0466.1864.0466.2772v.0495c-.2214.0248-.511.0413-.7183.1325-.2393.1034-.4072.314-.4072.6242 0 .3965.2504.595.5717.595.2718 0 .4198-.064.6295-.2776.0694.1005.0922.1495.219.2548.0285.015.0649.0136.0902-.0092l.294-.2524c.0312-.0257.0253-.067.001-.102m-.68-.5765c0 .149.0035.2728-.0713.4053-.0606.1072-.1572.1732-.2645.1732-.1465 0-.232-.1116-.232-.2766 0-.3257.2917-.3844.5679-.3844zm5.6864.5766c-.0694-.0961-.1441-.1747-.1441-.3539v-.5945c0-.2523.018-.484-.168-.6576-.1465-.1408-.3892-.1903-.5751-.1903-.3636 0-.7688.136-.8537.5849-.0093.0476.0257.0728.0568.08l.3703.0398c.0344-.0014.0596-.0358.066-.0703.032-.1544.1616-.2292.3072-.2292.0786 0 .168.0292.214.099.0539.0787.0466.1864.0466.2772v.0495c-.2213.0248-.511.0413-.7178.1325-.2397.1034-.4076.314-.4076.6242 0 .3965.2504.595.5717.595.2717 0 .4202-.064.63-.2776.0689.1005.0916.1495.2188.2548a.0788.0788 0 0 0 .0898-.0092l.001.001c.0767-.068.215-.1883.293-.2534.0312-.0257.0259-.067.0011-.102m-.7513-.1712c-.0607.1072-.1572.1732-.2646.1732-.1465 0-.232-.1116-.232-.2766 0-.3257.2918-.3844.568-.3844v.0825c0 .149.0038.2728-.0714.4053m5.16.5307h-.3806a.0717.0717 0 0 1-.0684-.0704l-.0007-1.9608c.0032-.0359.0349-.064.0734-.064h.3542a.0725.0725 0 0 1 .0678.0547v.2999h.0073c.107-.2682.2566-.396.5204-.396.1711 0 .3387.0618.4457.231.0998.1567.0998.4206.0998.6104v1.2335c-.0043.0347-.0355.0617-.0732.0617h-.3829a.072.072 0 0 1-.068-.0617v-1.0643c0-.2145.025-.528-.2388-.528-.0927 0-.1782.0619-.221.1567-.0535.1197-.0607.2393-.0607.3713v1.0554a.073.073 0 0 1-.0743.0706M9.612 10.6259c.5668 0 .8733.4868.8733 1.1055 0 .598-.3385 1.0724-.8733 1.0724-.5561 0-.8592-.4868-.8592-1.0931 0-.6104.3066-1.0848.8592-1.0848m.0035.4002c-.2817 0-.2994.3835-.2994.6227 0 .2392-.0036.7507.296.7507.2958 0 .31-.4125.31-.664 0-.1649-.0071-.363-.057-.5197-.0428-.1362-.1285-.1897-.2496-.1897m-7.062 1.7364h-.3819a.0719.0719 0 0 1-.0683-.0646l.0003-1.96c0-.0393.033-.0706.0738-.0706h.3556c.0372.0017.067.03.0694.0657v.256h.0071c.0927-.2476.2674-.363.5027-.363.2388 0 .3886.1154.4954.363.0928-.2476.3031-.363.5277-.363.1605 0 .3351.066.4421.2144.1212.165.0963.4042.0963.6146l-.0004 1.237c0 .039-.033.0705-.0737.0705h-.3813a.0715.0715 0 0 1-.0686-.0704v-1.0392c0-.0824.007-.2886-.0109-.367-.0284-.132-.114-.1692-.2244-.1692-.0928 0-.189.062-.2283.1608-.0392.0991-.0356.264-.0356.3754v1.039c0 .0392-.033.0706-.0737.0706h-.3815a.0716.0716 0 0 1-.0685-.0704l-.0004-1.0392c0-.2185.0356-.5402-.2352-.5402-.2745 0-.2638.3134-.2638.5402l-.0002 1.039c0 .0392-.033.0706-.0737.0706m4.5791-1.7494v-.28a.0692.0692 0 0 1 .071-.071h1.2553c.0402 0 .0724.0291.0724.0706v.2402c-.0003.0403-.0343.0929-.0945.1763l-.6502.9284c.2413-.0056.4967.0306.716.1538.0494.0278.0627.069.0666.1093v.2989c0 .0411-.0451.0888-.0925.064-.3863-.2024-.8991-.2245-1.3263.0025-.0437.0232-.0894-.0238-.0894-.065v-.284c0-.0455.0009-.1233.0467-.1926l.7534-1.0808h-.656c-.04 0-.0722-.0286-.0725-.0706m.8171 2.1613c-.0917-.1174-.606-.0556-.8372-.028-.07.0084-.0809-.0527-.0179-.097.4105-.2882 1.0829-.205 1.1611-.1085.0787.0973-.0207.7715-.4052 1.0933-.0592.0494-.1155.023-.0892-.0423.0865-.2161.2802-.7.1884-.8175m-.2983.3406c-.717.529-1.7563.8105-2.6514.8105-1.2543 0-2.384-.4638-3.2388-1.2355-.067-.0607-.0072-.1434.0735-.0965.9222.5366 2.0628.8598 3.2406.8598.7947 0 1.6681-.1649 2.4719-.5058.1211-.0514.2228.0799.1042.1675m15.5297-.693c-.342 0-.6045-.0938-.7879-.2813-.1835-.1875-.275-.4563-.275-.8065 0-.3584.0935-.6397.2811-.8437.1875-.204.4481-.3061.7817-.3061.2565 0 .4571.062.6019.1861.1447.1241.2171.2895.2171.4963 0 .2068-.078.3634-.2337.4694-.1558.1063-.3853.1593-.6887.1593-.157 0-.2936-.0151-.4094-.0455.0165.1847.0724.3171.1675.397.0952.08.2392.12.4323.12.0771 0 .1522-.0048.2253-.0145.073-.0096.1744-.031.304-.064a.163.163 0 0 1 .0455-.0084c.0468 0 .0703.0318.0703.0952v.1902c0 .0441-.0062.0752-.0185.093-.0125.018-.0366.0339-.0725.0476-.2013.0772-.415.1158-.641.1158m-.1365-1.2986c.1406 0 .2426-.0214.306-.0641.0634-.0428.0952-.1083.0952-.1965 0-.1738-.1034-.2606-.3102-.2606-.2647 0-.4177.1628-.4591.488.1103.0221.233.0332.3681.0332M18.6275 12.76c-.0359 0-.0622-.0082-.0786-.0248-.0166-.0165-.0248-.0427-.0248-.0786V10.75c0-.0387.0082-.0655.0248-.0807.0164-.0151.0427-.0227.0786-.0227h.2977c.0634 0 .102.0303.1159.091l.033.1116c.1461-.0965.2778-.1647.395-.2047.1171-.04.2378-.06.362-.06.248 0 .4231.0882.5251.2647.1407-.0937.273-.1613.3972-.2026.124-.0414.2522-.062.3846-.062.193 0 .3425.0536.4487.1612.1061.1076.1593.258.1593.4508v1.46c0 .0359-.0077.062-.0228.0786-.0152.0166-.042.0248-.0807.0248h-.397c-.0359 0-.062-.0082-.0785-.0248-.0166-.0165-.025-.0427-.025-.0786V11.329c0-.1875-.084-.2813-.2522-.2813-.1489 0-.2992.0359-.4508.1075v1.5014c0 .0359-.0076.062-.0228.0786-.0152.0166-.042.0248-.0806.0248h-.397c-.036 0-.0621-.0082-.0787-.0248-.0165-.0165-.0248-.0427-.0248-.0786V11.329c0-.1875-.0842-.2813-.2523-.2813-.1544 0-.306.0373-.4549.1116v1.4973c0 .0359-.0077.062-.0227.0786-.0153.0166-.0422.0248-.0807.0248zm-.9174-2.4402c-.1048 0-.1888-.029-.2522-.0869-.0635-.0578-.0952-.1364-.0952-.2357s.0317-.1778.0952-.2357c.0634-.058.1474-.0869.2523-.0869.1046 0 .1888.029.2522.0869.0634.0579.0952.1364.0952.2357s-.0318.1779-.0952.2357c-.0634.058-.1476.087-.2523.087m-.1985 2.4401c-.0358 0-.062-.0083-.0786-.0249-.0166-.0164-.0248-.0426-.0248-.0785V10.75c0-.0386.0082-.0655.0248-.0807.0165-.0151.0428-.0227.0786-.0227h.397c.0386 0 .0655.0076.0807.0227.0151.0152.0228.042.0228.0807v1.9066c0 .036-.0077.062-.0228.0785-.0152.0166-.042.025-.0807.025zm-1.6527 0c-.0359 0-.0622-.0082-.0786-.0248-.0166-.0165-.0248-.0427-.0248-.0786V10.75c0-.0387.0082-.0655.0248-.0807.0164-.0151.0427-.0227.0786-.0227h.2977c.0634 0 .102.0303.1158.091l.0538.2233c.1103-.1214.2144-.2075.3123-.2585a.6664.6664 0 0 1 .3123-.0765h.0578c.0386 0 .0662.0076.0827.0227.0166.0152.0248.042.0248.0807v.3474c0 .0358-.0076.062-.0227.0785-.0151.0166-.042.025-.0807.025a.8293.8293 0 0 1-.0744-.0043 1.3657 1.3657 0 0 0-.1158-.0041c-.0634 0-.1406.009-.2316.0269-.091.018-.1682.0407-.2316.0683v1.3896c0 .0359-.0077.062-.0227.0786-.0153.0166-.0422.0248-.0807.0248zm-2.477.852c-.0358 0-.062-.0077-.0786-.0227-.0165-.0153-.0248-.042-.0248-.0807V10.75c0-.0386.0083-.0655.0248-.0807.0166-.0151.0428-.0227.0786-.0227h.2978c.0634 0 .102.0304.1157.091l.029.1075c.0828-.08.1827-.1433.2999-.1903a.9562.9562 0 0 1 .3578-.0703c.2673 0 .479.098.6348.2937.1558.1958.2337.4605.2337.794 0 .229-.0386.4288-.1157.5997-.0772.171-.1821.3027-.3144.395-.1324.0925-.284.1386-.4549.1386a.965.965 0 0 1-.3226-.0538c-.1021-.0358-.189-.0854-.2606-.1489v.9058c0 .0386-.0076.0654-.0227.0807-.0153.015-.0421.0227-.0807.0227zm.9057-1.2615c.1545 0 .2682-.0523.3413-.157.073-.1048.1097-.2703.1097-.4964 0-.2288-.036-.3956-.1076-.5005-.0718-.1048-.1862-.1571-.3434-.1571a.7883.7883 0 0 0-.4052.1116v1.0878c.1212.0744.2564.1116.4052.1116Z" />
    </svg>
  );
});

Amazonprime.propTypes = {
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

export default Amazonprime;
