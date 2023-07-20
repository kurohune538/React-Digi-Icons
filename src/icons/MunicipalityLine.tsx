import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MunicipalityLineComponent = (
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
      <g clip-path="url(#clip0_320_548)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 2V7H9.5V3.5H20.5V22H22V2H8ZM11.5 5.5H18.5V7H11.5V5.5ZM18.5 8.5H14V10H18.5V8.5ZM12 20V15H7V20H12ZM8.5 16.5H10.5V18.5H8.5V16.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.2L17.1 16.4L15.5 15.2V22H14V14L9.5 10.5L5 14V22H3.5V15.1L1.9 16.4Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_548">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MunicipalityLine = forwardRef(MunicipalityLineComponent);

MunicipalityLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MunicipalityLine.displayName = 'MunicipalityLine';

export default MunicipalityLine;
