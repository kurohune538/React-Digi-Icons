import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const InboxFillComponent = (
  { color = 'currentColor', size = 24, ...rest },
  ref: Ref<SVGSVGElement>
) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size} // [size] is not a valid value for height
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clip-path="url(#clip0_320_612)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 12.5L2 4.5H22L12 12.5ZM2 6.2002L12 14.2002L22 6.2002V19.5002H2V6.2002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_612">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const InboxFill = forwardRef(InboxFillComponent);

InboxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InboxFill.displayName = 'InboxFill';

export default InboxFill;
