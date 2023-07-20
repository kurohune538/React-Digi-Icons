import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const HouseLineComponent = (
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
      <g clip-path="url(#clip0_320_562)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2L23 10.7L22.1 11.9L20.5 10.6V21.5H19V9.4L12 4L5 9.4V21.5H3.5V10.6L1.9 11.9L1 10.7L12 2ZM16.5 10.5V19.5H7.5V10.5H16.5ZM11.2 15.8H9V18H11.2V15.8ZM12.8 15.8V18H15V15.8H12.8ZM12.8 14.3H15V12H12.8V14.3ZM11.3 14.2V12H9V14.2H11.3Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_562">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const HouseLine = forwardRef(HouseLineComponent);

HouseLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HouseLine.displayName = 'HouseLine';

export default HouseLine;
