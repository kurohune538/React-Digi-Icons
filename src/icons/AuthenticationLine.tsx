import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const AuthenticationLineComponent = (
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
      <g clip-path="url(#clip0_320_713)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7 21.9L12 22L12.3 21.8C17.7 19.7 21 15.4 21 10.6V4.9L12 2L3 4.9V10.7C3 15.5 6.3 19.8 11.7 21.9ZM4.5 10.6V6L12 3.6L19.5 6V10.6C19.5 14.7 16.6 18.4 12 20.3C7.4 18.4 4.5 14.7 4.5 10.6ZM7 11.5L11 15.5L17 9.6L15.9 8.5L11 13.4L8.1 10.4L7 11.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_713">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const AuthenticationLine = forwardRef(AuthenticationLineComponent);

AuthenticationLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AuthenticationLine.displayName = 'AuthenticationLine';

export default AuthenticationLine;
