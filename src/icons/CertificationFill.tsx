import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const CertificationFillComponent = (
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
      <g clip-path="url(#clip0_320_709)">
        <path
          d="M1.5 20H22.5V4H1.5V20ZM12.5 8.1H19V9.4H12.5V8.1ZM12.5 11.3H19V12.6H12.5V11.3ZM12.5 14.6H19V15.9H12.5V14.6ZM5 8.1H10.5V15.9H9.6H5V8.1Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_709">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CertificationFill = forwardRef(CertificationFillComponent);

CertificationFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CertificationFill.displayName = 'CertificationFill';

export default CertificationFill;
