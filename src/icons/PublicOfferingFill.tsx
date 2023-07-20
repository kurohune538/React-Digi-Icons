import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const PublicOfferingFillComponent = (
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
      <g clip-path="url(#clip0_320_260)">
        <path d="M5 22H3.5V2.5L22 9.5L5 16.5V22Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_320_260">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const PublicOfferingFill = forwardRef(PublicOfferingFillComponent);

PublicOfferingFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PublicOfferingFill.displayName = 'PublicOfferingFill';

export default PublicOfferingFill;
