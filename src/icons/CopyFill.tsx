import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const CopyFillComponent = (
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
      <g clip-path="url(#clip0_320_75)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5 2.5H20V18H7.5V2.5ZM5.5 20.0002H15.8V21.5002H4V6.7002H5.5V20.0002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_75">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CopyFill = forwardRef(CopyFillComponent);

CopyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CopyFill.displayName = 'CopyFill';

export default CopyFill;
