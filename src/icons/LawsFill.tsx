import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const LawsFillComponent = (
  { color = 'currentColor', size = 24, ...rest },
  ref: Ref<SVGSVGElement>
) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_271)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8008 4.8L14.6008 2L20.2008 7.7L17.4008 10.5L11.8008 4.8ZM9.67578 6.93799L10.7364 5.87734L22.05 17.1909L20.9894 18.2516L9.67578 6.93799ZM3 19.5H16V21H3V19.5ZM8.59922 8L5.69922 10.8L11.3992 16.5L14.1992 13.7L8.59922 8Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_271">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const LawsFill = forwardRef(LawsFillComponent);

LawsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LawsFill.displayName = 'LawsFill';

export default LawsFill;
