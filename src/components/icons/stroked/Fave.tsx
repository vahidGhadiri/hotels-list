import * as React from "react";
import type { SVGProps } from "react";
const SvgFave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#080341"
      fillRule="evenodd"
      d="M11.993 5.097A5.42 5.42 0 0 0 8.408 3.75C5.421 3.75 3 6.15 3 9.11c0 1.363.506 2.614 1.352 3.56L12 20.25l7.422-7.356.219-.23A5.3 5.3 0 0 0 21 9.11c0-2.96-2.421-5.36-5.408-5.36-1.375 0-2.63.509-3.585 1.347L12 5.09zM12 7.099l.055.049.853-.846.089-.078a3.92 3.92 0 0 1 2.595-.974c2.171 0 3.908 1.74 3.908 3.86 0 .971-.361 1.857-.964 2.538l-.187.197L12 18.138 5.443 11.64A3.83 3.83 0 0 1 4.5 9.11c0-2.118 1.737-3.859 3.908-3.859.999 0 1.905.368 2.595.974l.09.078.852.846z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFave;
