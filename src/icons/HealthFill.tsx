import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const HealthFillComponent = (
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
      <g clip-path="url(#clip0_320_544)">
        <path
          d="M12 3.6C13.1 2.6 14.5 2 16 2C19.3 2 22 4.7 22 8C22 15.8 12.8 21.6 12.4 21.8L12 22L11.6 21.8C11.2 21.5 2 15.7 2 8C2 4.7 4.7 2 8 2C9.5 2 10.9 2.6 12 3.6Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_544">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const HealthFill = forwardRef(HealthFillComponent);

HealthFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HealthFill.displayName = 'HealthFill';

export default HealthFill;
