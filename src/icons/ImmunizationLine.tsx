import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ImmunizationLineComponent = (
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
      <g clip-path="url(#clip0_320_525)">
        <path
          d="M21.5 12.1L17.2 7.8L18.5 6.5L19.8 7.8L21.2 6.4L17.5 2.7L16.1 4.1L17.4 5.4L16.1 6.7L11.8 2.5L10.7 3.6L12 4.9L3 14.1L5.9 17L2.5 20.4L3.6 21.5L7 18.1L9.9 21L19.1 11.8L20.4 13.1L21.5 12.1ZM9.9 18.9L5.2 14.2L7.2 12.2L9.9 14.9L11 13.8L8.3 11.1L10.3 9.1L13 11.8L14.1 10.7L11.3 8L13.3 6L18 10.7L9.9 18.9Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_525">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ImmunizationLine = forwardRef(ImmunizationLineComponent);

ImmunizationLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ImmunizationLine.displayName = 'ImmunizationLine';

export default ImmunizationLine;
