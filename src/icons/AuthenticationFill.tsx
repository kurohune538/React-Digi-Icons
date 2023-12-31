import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const AuthenticationFillComponent = (
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
      <g clip-path="url(#clip0_320_718)">
        <path
          d="M12 2L3 4.9V10.6C3 15.4 6.3 19.7 11.7 21.8L12 22L12.3 21.9C17.7 19.8 21 15.5 21 10.7V4.9L12 2ZM11 15.5L7 11.5L8.1 10.4L11.1 13.4L16 8.5L17 9.6L11 15.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_718">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const AuthenticationFill = forwardRef(AuthenticationFillComponent);

AuthenticationFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AuthenticationFill.displayName = 'AuthenticationFill';

export default AuthenticationFill;
