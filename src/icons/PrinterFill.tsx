import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const PrinterFillComponent = (
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
      {...rest}
    >
      <g clip-path="url(#clip0_320_401)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19V6.2H5V3ZM20.3 17H22V7.5H2V17H3.7V10.7H20.3V17ZM5 21H19V12H5V21ZM8 14.5H16V15.5H8V14.5ZM16 18.5H8V17.5H16V18.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_401">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const PrinterFill = forwardRef(PrinterFillComponent);

PrinterFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PrinterFill.displayName = 'PrinterFill';

export default PrinterFill;
