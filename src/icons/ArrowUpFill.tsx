import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowUpFillComponent = (
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
      <g clip-path="url(#clip0_320_215)">
        <path
          d="M12.0016 6.1001L2.60156 15.5001L4.00156 16.9001L12.0016 8.9001L20.0016 16.9001L21.4016 15.5001L12.0016 6.1001Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_215">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowUpFill = forwardRef(ArrowUpFillComponent);

ArrowUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpFill.displayName = 'ArrowUpFill';

export default ArrowUpFill;
