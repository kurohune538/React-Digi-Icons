import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrivalFillComponent = (
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
      <g clip-path="url(#clip0_320_361)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.1008 14.2001C17.8008 14.1001 16.7008 13.7001 14.9008 13.0001C13.3008 12.4001 4.30078 8.9001 4.30078 8.8001C3.20078 8.4001 1.80078 7.3001 1.80078 5.7001V2.9001L3.70078 3.7001L4.40078 5.9001L7.80078 6.9001L8.40078 1.1001L10.8008 2.1001L12.3008 8.2001C13.6567 8.61276 14.4565 8.88642 15.0896 9.103C15.5304 9.25381 15.8903 9.37695 16.3008 9.5001C18.1008 10.2001 19.4008 11.2001 20.0008 12.5001C20.4008 13.3001 20.1008 14.2001 19.1008 14.2001ZM8.69922 19.2002H22.1992V21.2002H8.69922V19.2002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_361">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrivalFill = forwardRef(ArrivalFillComponent);

ArrivalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrivalFill.displayName = 'ArrivalFill';

export default ArrivalFill;
