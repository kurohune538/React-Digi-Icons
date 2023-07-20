import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const BankAccountLineComponent = (
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
      <g clip-path="url(#clip0_320_479)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 17.2V4H22V17.2C22 18.8 20.7 20 19.2 20H4.7C3.2 20 2 18.8 2 17.2ZM20.5 7V5.5H3.5V7H20.5ZM4.7 18.5H19.2C19.9 18.5 20.5 17.9 20.5 17.3V8.5H3.5V17.3C3.5 17.9 4 18.5 4.7 18.5ZM11.9992 12.4L13.5992 9.5H14.7992L13.0992 12.5H14.4992V13.5H12.4992V14.5H14.4992V15.5H12.4992V17H11.4992V15.5H9.49922V14.5H11.4992V13.5H9.49922V12.5H10.8992L9.19922 9.5H10.3992L11.9992 12.4Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_479">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const BankAccountLine = forwardRef(BankAccountLineComponent);

BankAccountLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BankAccountLine.displayName = 'BankAccountLine';

export default BankAccountLine;
