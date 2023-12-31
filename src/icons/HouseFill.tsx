import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const HouseFillComponent = (
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
      <g clip-path="url(#clip0_320_567)">
        <path
          d="M1 10.7L1.9 11.9L4 10.2V21.5H20V10.2L22.1 11.9L23 10.7L12 2L1 10.7ZM11 18.5H8.5V16H11V18.5ZM11 14H8.5V11.5H11V14ZM13 11.5H15.5V14H13V11.5ZM13 16H15.5V18.5H13V16Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_567">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const HouseFill = forwardRef(HouseFillComponent);

HouseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HouseFill.displayName = 'HouseFill';

export default HouseFill;
