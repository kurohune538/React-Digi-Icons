import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const LuggageFillComponent = (
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
      <g clip-path="url(#clip0_320_297)">
        <path
          d="M15 2H9V5H5V20H7.6C7.5 20.2 7.5 20.3 7.5 20.5C7.5 21.3 8.2 22 9 22C9.8 22 10.5 21.3 10.5 20.5C10.5 20.3 10.5 20.2 10.4 20H13.6C13.5 20.2 13.5 20.3 13.5 20.5C13.5 21.3 14.2 22 15 22C15.8 22 16.5 21.3 16.5 20.5C16.5 20.3 16.5 20.2 16.4 20H19V5H15V2ZM9.5 16.5H8.5V9H9.5V16.5ZM12.5 16.5H11.5V9H12.5V16.5ZM13.5 5H10.5V3.5H13.5V5ZM15.5 9V16.5H14.5V9H15.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_297">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const LuggageFill = forwardRef(LuggageFillComponent);

LuggageFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LuggageFill.displayName = 'LuggageFill';

export default LuggageFill;
