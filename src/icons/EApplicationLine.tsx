import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const EApplicationLineComponent = (
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
      <g clip-path="url(#clip0_320_279)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 20V4H22V20H2ZM9.4 7C9.8 7 10.1 6.7 10.1 6.2C10.1 5.8 9.9 5.4 9.4 5.4C8.9 5.4 8.6 5.8 8.6 6.2C8.6 6.7 9 7 9.4 7ZM6.9 7C7.3 7 7.6 6.7 7.6 6.2C7.6 5.8 7.4 5.4 6.9 5.4C6.4 5.4 6.1 5.8 6.1 6.2C6.1 6.7 6.5 7 6.9 7ZM4.4 7C4.8 7 5.1 6.7 5.1 6.2C5.1 5.8 4.9 5.4 4.4 5.4C3.9 5.4 3.6 5.8 3.6 6.2C3.6 6.7 4 7 4.4 7ZM3.5 18.5H20.5V8.5H3.5V18.5ZM15.5008 11.8002L11.3008 15.8002L8.30078 13.1002L9.40078 12.0002L11.3008 13.7002L14.5008 10.7002L15.5008 11.8002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_279">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const EApplicationLine = forwardRef(EApplicationLineComponent);

EApplicationLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EApplicationLine.displayName = 'EApplicationLine';

export default EApplicationLine;
