import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const DownloadLineComponent = (
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
      <g clip-path="url(#clip0_320_144)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 9L19 10L12 17.1L5 10L6 9L11.2 14.2V3H12.7V14.2L18 9ZM3 21V19.5H21V21H3Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_144">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const DownloadLine = forwardRef(DownloadLineComponent);

DownloadLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DownloadLine.displayName = 'DownloadLine';

export default DownloadLine;
