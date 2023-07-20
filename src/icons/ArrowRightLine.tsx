import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowRightLineComponent = (
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
      <g clip-path="url(#clip0_320_191)">
        <path d="M9 21L8 20L16 12L8 4L9 3L18.1 12L9 21Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_320_191">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowRightLine = forwardRef(ArrowRightLineComponent);

ArrowRightLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRightLine.displayName = 'ArrowRightLine';

export default ArrowRightLine;
