import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MeLineComponent = (
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
      <g clip-path="url(#clip0_320_675)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 6.5C15 4.8 13.7 3.5 12 3.5C10.3 3.5 9 4.8 9 6.5C9 8.2 10.3 9.5 12 9.5C13.7 9.5 15 8.2 15 6.5ZM7.5 6.5C7.5 4 9.5 2 12 2C14.5 2 16.5 4 16.5 6.5C16.5 9 14.5 11 12 11C9.5 11 7.5 9 7.5 6.5ZM19.5 22.0001H21H21.1V20.8001C21.1 16.6001 17.6 13.1001 13.3 13.1001H10.8C6.5 13.1001 3 16.5001 3 20.8001V22.0001H4.6V20.8001C4.6 17.4001 7.4 14.6001 10.8 14.6001H13.3C16.7 14.6001 19.5 17.4001 19.5 20.8001V22.0001Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_675">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MeLine = forwardRef(MeLineComponent);

MeLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MeLine.displayName = 'MeLine';

export default MeLine;
