import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const NewWindowLineComponent = (
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
      <g clip-path="url(#clip0_320_155)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 19.5H19.5V13H21V21H3V3H11V4.5H4.5V19.5ZM14 4.5V3H21V10H19.5V5.6L10.5 14.5L9.5 13.5L18.4 4.5H14Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_155">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const NewWindowLine = forwardRef(NewWindowLineComponent);

NewWindowLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NewWindowLine.displayName = 'NewWindowLine';

export default NewWindowLine;
