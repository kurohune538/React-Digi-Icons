import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const WorkFillComponent = (
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
      <g clip-path="url(#clip0_320_574)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 3.5H7V6.5H2V10.2C4.3 11.7 6.8 12.6 9.5 13V11.6H14.5V13C17.2 12.6 19.7 11.7 22 10.2V6.5H17V3.5ZM15.5 6.5H8.5V5H15.5V6.5ZM21.2 12.1002C19.1 13.2002 16.8 13.9002 14.5 14.2002V16.5002H9.5V14.2002C6.8 13.9002 4.3 13.0002 2 11.7002V20.5002H22V11.7002C21.9394 11.7305 21.8697 11.7699 21.7936 11.813L21.7936 11.813C21.6183 11.9121 21.4092 12.0305 21.2 12.1002ZM10.8008 15.1998V12.7998H13.2008V15.1998H10.8008Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_574">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const WorkFill = forwardRef(WorkFillComponent);

WorkFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WorkFill.displayName = 'WorkFill';

export default WorkFill;
