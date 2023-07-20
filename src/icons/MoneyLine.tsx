import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MoneyLineComponent = (
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
    >
      <g clip-path="url(#clip0_320_490)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12ZM3.5 12C3.5 7.3 7.3 3.5 12 3.5C16.7 3.5 20.5 7.3 20.5 12C20.5 16.7 16.7 20.5 12 20.5C7.3 20.5 3.5 16.7 3.5 12ZM12.0016 11.7L14.7016 7H16.4016L13.6016 12H16.0016V13H12.7016V14.5H16.0016V15.5H12.7016V18H11.2016V15.5H8.00156V14.5H11.2016V13H8.00156V12H10.4016L7.60156 7H9.30156L12.0016 11.7Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_490">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MoneyLine = forwardRef(MoneyLineComponent);

MoneyLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoneyLine.displayName = 'MoneyLine';

export default MoneyLine;
