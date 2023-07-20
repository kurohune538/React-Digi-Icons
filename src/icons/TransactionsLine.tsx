import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const TransactionsLineComponent = (
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
      <g clip-path="url(#clip0_320_440)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.79844 7.7L6.99844 10L5.99844 11L1.89844 7L5.99844 3L6.99844 4L4.79844 6.2H20.9984V7.7H4.79844ZM17 13L18 12L22.1 16L18 20L17 19L19.2 16.7H3V15.2H19.2L17 13Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_440">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const TransactionsLine = forwardRef(TransactionsLineComponent);

TransactionsLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TransactionsLine.displayName = 'TransactionsLine';

export default TransactionsLine;
