import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const AddLineComponent = (
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
      <g clip-path="url(#clip0_320_184)">
        <path
          d="M21 11.2H12.7V3H11.2V11.2H3V12.7H11.2V21H12.7V12.7H21V11.2Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_184">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const AddLine = forwardRef(AddLineComponent);

AddLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AddLine.displayName = 'AddLine';

export default AddLine;
