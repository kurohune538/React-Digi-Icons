import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const PersonalComputerLineComponent = (
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
      <g clip-path="url(#clip0_320_388)">
        <path
          d="M21 16.4999V4.8999H3V16.4999H10.5V19.4999H7.5V20.9999H16.5V19.4999H13.5V16.4999H21ZM4.5 6.3999H19.5V14.9999H4.5V6.3999Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_388">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const PersonalComputerLine = forwardRef(PersonalComputerLineComponent);

PersonalComputerLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PersonalComputerLine.displayName = 'PersonalComputerLine';

export default PersonalComputerLine;
