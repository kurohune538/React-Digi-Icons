import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ArrowUpLineComponent = (
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
      <path
        d="M4 16.4999L3 15.4999L12 6.3999L21 15.4999L20 16.4999L12 8.5999L4 16.4999Z"
        fill={color}
      />
    </svg>
  );
};

const ArrowUpLine = forwardRef(ArrowUpLineComponent);

ArrowUpLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLine.displayName = 'ArrowUpLine';

export default ArrowUpLine;
