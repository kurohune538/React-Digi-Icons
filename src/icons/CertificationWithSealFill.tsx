import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const CertificationWithSealFillComponent = (
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
      <g clip-path="url(#clip0_320_229)">
        <path
          d="M16.7 2H4V22H20V5.2L16.7 2ZM11.5 15.6H7V14.3H11.5V15.6ZM15 20C13.9 20 13 19.1 13 18C13 16.9 13.9 16 15 16C16.1 16 17 16.9 17 18C17 19.1 16.1 20 15 20ZM17 12.7H7V11.4H17V12.7ZM17 9.6H7V8.3H17V9.6ZM15.9 6.3V3.3L18.9 6.3H15.9Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_229">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CertificationWithSealFill = forwardRef(
  CertificationWithSealFillComponent
);

CertificationWithSealFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CertificationWithSealFill.displayName = 'CertificationWithSealFill';

export default CertificationWithSealFill;
