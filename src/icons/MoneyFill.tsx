import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MoneyFillComponent = (
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
      <g clip-path="url(#clip0_320_495)">
        <path
          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16 11.6V12.6H12.7V14.4H16V15.4H12.7V18H11.4V15.4H8V14.4H11.3V12.6H8V11.6H10.6L7.8 7H9.3L12 11.4L14.7 7H16.2L13.4 11.6H16Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_495">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MoneyFill = forwardRef(MoneyFillComponent);

MoneyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoneyFill.displayName = 'MoneyFill';

export default MoneyFill;
