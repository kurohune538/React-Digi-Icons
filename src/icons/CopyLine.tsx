import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const CopyLineComponent = (
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
      <g clip-path="url(#clip0_320_70)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5 18H20V2.5H7.5V18ZM18.5 16.5H9V4H18.5V16.5ZM4 21.5002H15.8V20.0002H5.5V6.7002H4V21.5002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_70">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CopyLine = forwardRef(CopyLineComponent);

CopyLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CopyLine.displayName = 'CopyLine';

export default CopyLine;
