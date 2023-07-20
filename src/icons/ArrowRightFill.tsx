import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowRightFillComponent = (
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
      <g clip-path="url(#clip0_320_198)">
        <path
          d="M14.4984 21L5.39844 12L14.4984 3L15.4984 4L7.59844 12L15.4984 20L14.4984 21Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_198">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowRightFill = forwardRef(ArrowRightFillComponent);

ArrowRightFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRightFill.displayName = 'ArrowRightFill';

export default ArrowRightFill;
