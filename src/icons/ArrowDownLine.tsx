import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowDownLineComponent = (
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
      <g clip-path="url(#clip0_320_205)">
        <path d="M12 17.1L3 8L4 7L12 15L20 7L21 8L12 17.1Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_320_205">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowDownLine = forwardRef(ArrowDownLineComponent);

ArrowDownLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownLine.displayName = 'ArrowDownLine';

export default ArrowDownLine;
