import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const CompleteLineComponent = (
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
      <g clip-path="url(#clip0_320_81)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12ZM3.5 12C3.5 7.3 7.3 3.5 12 3.5C16.7 3.5 20.5 7.3 20.5 12C20.5 16.7 16.7 20.5 12 20.5C7.3 20.5 3.5 16.7 3.5 12ZM7.19922 12L11.1992 16L17.1992 10L16.0992 9L11.1992 13.9L8.29922 10.9L7.19922 12Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_81">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CompleteLine = forwardRef(CompleteLineComponent);

CompleteLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CompleteLine.displayName = 'CompleteLine';

export default CompleteLine;
