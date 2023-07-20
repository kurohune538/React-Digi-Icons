import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const DocumentsFillComponent = (
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
      <g clip-path="url(#clip0_320_414)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.6 4L11.6 6H22V10.5H2V4H9.6ZM2 12H22V21H2V12Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_414">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const DocumentsFill = forwardRef(DocumentsFillComponent);

DocumentsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DocumentsFill.displayName = 'DocumentsFill';

export default DocumentsFill;
