import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MeFillComponent = (
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
      <g clip-path="url(#clip0_320_680)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5ZM13.2 13.0997C17.5 13.0997 21 16.4997 21 20.7997V21.9997H3V20.7997C3 16.4997 6.5 12.9997 10.7 13.0997H13.2Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_680">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MeFill = forwardRef(MeFillComponent);

MeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MeFill.displayName = 'MeFill';

export default MeFill;
