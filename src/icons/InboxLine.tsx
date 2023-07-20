import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const InboxLineComponent = (
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
      <g clip-path="url(#clip0_320_609)">
        <path
          d="M2 4V20H22V4H2ZM20.4 5.5L12 11.9L3.6 5.5H20.4ZM3.5 18.5V7.3L12 13.8L20.5 7.3V18.5H3.5Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_609">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const InboxLine = forwardRef(InboxLineComponent);

InboxLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InboxLine.displayName = 'InboxLine';

export default InboxLine;
