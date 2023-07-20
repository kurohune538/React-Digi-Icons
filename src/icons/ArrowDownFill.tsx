import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowDownFillComponent = (
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
      <g clip-path="url(#clip0_320_208)">
        <path
          d="M20.0016 6.6001L12.0016 14.6001L4.00156 6.6001L2.60156 8.0001L12.0016 17.4001L21.4016 8.0001L20.0016 6.6001Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_208">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowDownFill = forwardRef(ArrowDownFillComponent);

ArrowDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownFill.displayName = 'ArrowDownFill';

export default ArrowDownFill;
