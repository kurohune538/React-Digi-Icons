import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const SealCertificateFillComponent = (
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
      <g clip-path="url(#clip0_320_253)">
        <path
          d="M19 4.5H2V19.5H22V7.5C20.8 6.3 20.2 5.7 19 4.5ZM11.5 8.1H16.5V9.4H11.5V8.1ZM7.4 8.1C8.4 8.1 9.2 8.9 9.2 10C9.2 11 8.4 11.8 7.4 11.8C6.4 11.8 5.5 11 5.5 10C5.5 8.9 6.3 8.1 7.4 8.1ZM18.1 15.9H5.5V14.6H18.1V15.9ZM18.1 12.6H11.5V11.3H18.1V12.6ZM18 8.5V6L20.5 8.5H18Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_253">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const SealCertificateFill = forwardRef(SealCertificateFillComponent);

SealCertificateFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SealCertificateFill.displayName = 'SealCertificateFill';

export default SealCertificateFill;
