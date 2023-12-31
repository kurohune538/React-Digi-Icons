import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const CodeReaderFillComponent = (
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
      <g clip-path="url(#clip0_320_629)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 21V3H21V21H3ZM6 18H11V13H6V18ZM6 11H11V6H6V11ZM18 6H13V11H18V6ZM13 18H18V13H13V18ZM14.1992 7.2002H16.6992V9.7002H14.1992V7.2002ZM7.19922 14.2002H9.69922V16.7002H7.19922V14.2002ZM9.69922 7.2002H7.19922V9.7002H9.69922V7.2002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_629">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CodeReaderFill = forwardRef(CodeReaderFillComponent);

CodeReaderFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeReaderFill.displayName = 'CodeReaderFill';

export default CodeReaderFill;
