import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const FillableCardFillComponent = (
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
      <g clip-path="url(#clip0_320_310)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 8.2V4.5H1.5V16.5H13.7L22 8.2ZM10 9.2L6.5 12.7L4 10.3L5 9.4L6.5 10.9L9 8.3L10 9.2ZM15.5 12.9H12V11.6H15.5V12.9ZM18 9.4H12V8.1H18V9.4ZM19.6 12L12.5 19.1V20.5H13.9L21 13.4L19.6 12ZM23.1008 11.2999L21.7008 12.6999L20.3008 11.2999L21.7008 9.8999L23.1008 11.2999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_310">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const FillableCardFill = forwardRef(FillableCardFillComponent);

FillableCardFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FillableCardFill.displayName = 'FillableCardFill';

export default FillableCardFill;
