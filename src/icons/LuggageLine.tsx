import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const LuggageLineComponent = (
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
      <g clip-path="url(#clip0_320_290)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 5H19V20H16.4C16.5 20.2 16.5 20.3 16.5 20.5C16.5 21.3 15.8 22 15 22C14.2 22 13.5 21.3 13.5 20.5C13.5 20.3 13.5 20.2 13.6 20H10.4C10.5 20.2 10.5 20.3 10.5 20.5C10.5 21.3 9.8 22 9 22C8.2 22 7.5 21.3 7.5 20.5C7.5 20.3 7.5 20.2 7.6 20H5V5H9V2H15V5ZM13.5 3.5H10.5V5H13.5V3.5ZM6.5 18.5H17.5V6.5H6.5V18.5ZM9.19922 8.7002H10.1992V16.4002H9.19922V8.7002ZM11.5 8.7002H12.5V16.4002H11.5V8.7002ZM14.6992 8.7002H13.6992V16.4002H14.6992V8.7002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_290">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const LuggageLine = forwardRef(LuggageLineComponent);

LuggageLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LuggageLine.displayName = 'LuggageLine';

export default LuggageLine;
