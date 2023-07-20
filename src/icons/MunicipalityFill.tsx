import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MunicipalityFillComponent = (
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
      <g clip-path="url(#clip0_320_556)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5 21.9V19.5L20.1 14.9L9.5 6.6L8 7.8V2H22V21.9H16.5ZM15 10H19V8.5H15V10ZM11.5 6.5H19V5H11.5V6.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.1L17.1 16.3L15 14.7V22H4V14.8L1.9 16.4ZM8 16V19H11V16H8Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_556">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MunicipalityFill = forwardRef(MunicipalityFillComponent);

MunicipalityFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MunicipalityFill.displayName = 'MunicipalityFill';

export default MunicipalityFill;
