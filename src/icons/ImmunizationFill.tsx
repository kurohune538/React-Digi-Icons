import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ImmunizationFillComponent = (
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
      <g clip-path="url(#clip0_320_528)">
        <path
          d="M18.6 6.5L19.9 7.8L21.3 6.4L17.6 2.7L16.2 4.1L17.5 5.4L16.2 6.7L11.9 2.5L10.9 3.6L12.2 4.9L10.1 7L13.9 10.7L13 11.7L9.2 7.9L7.1 10.1L10.8 13.8L9.9 14.7L6.2 11L3 14.1L5.9 17L2.5 20.4L3.6 21.5L7 18.1L9.9 21L19.1 11.8L20.4 13.1L21.5 12.1L17.2 7.8L18.6 6.5Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_528">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ImmunizationFill = forwardRef(ImmunizationFillComponent);

ImmunizationFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ImmunizationFill.displayName = 'ImmunizationFill';

export default ImmunizationFill;