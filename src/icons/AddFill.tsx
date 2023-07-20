import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const AddFillComponent = (
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
      stroke={color}
      {...rest}
    >
      <g clip-path="url(#clip0_320_187)">
        <path
          d="M13.0008 10.9998V2.7998H11.0008V10.9998H2.80078V12.9998H11.0008V21.1998H13.0008V12.9998H21.2008V10.9998H13.0008Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_187">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const AddFill = forwardRef(AddFillComponent);

AddFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AddFill.displayName = 'AddFill';

export default AddFill;
