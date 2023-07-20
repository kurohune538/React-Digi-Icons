import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowLeftFillComponent = (
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
      <g clip-path="url(#clip0_320_201)">
        <path
          d="M7.90156 12.0001L15.9016 4.0001L14.5016 2.6001L5.10156 12.0001L14.5016 21.4001L15.9016 20.0001L7.90156 12.0001Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_201">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowLeftFill = forwardRef(ArrowLeftFillComponent);

ArrowLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowLeftFill.displayName = 'ArrowLeftFill';

export default ArrowLeftFill;
