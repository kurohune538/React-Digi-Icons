import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const PersonalComputerFillComponent = (
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
      <g clip-path="url(#clip0_320_391)">
        <path
          d="M3 16.4999H10.5V19.4999H7.5V20.9999H16.5V19.4999H13.5V16.4999H21V4.8999H3V16.4999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_391">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const PersonalComputerFill = forwardRef(PersonalComputerFillComponent);

PersonalComputerFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PersonalComputerFill.displayName = 'PersonalComputerFill';

export default PersonalComputerFill;
