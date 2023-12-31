import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const PrinterLineComponent = (
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
      <g clip-path="url(#clip0_320_395)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 7V3H5V7H2V17H5V21H19V17H22V7H19ZM6.5 4.5H17.5V7H6.5V4.5ZM17.5 19.5H6.5V12.5H17.5V19.5ZM20.5 15.5H19V11H5V15.5H3.5V8.5H20.5V15.5ZM8 17.7002H16V17.0002V16.7002H8V17.7002ZM8 14.2998H16V15.2998H8V14.2998Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_395">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const PrinterLine = forwardRef(PrinterLineComponent);

PrinterLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PrinterLine.displayName = 'PrinterLine';

export default PrinterLine;
