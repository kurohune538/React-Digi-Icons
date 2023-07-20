import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const DocumentsLineComponent = (
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
      <g clip-path="url(#clip0_320_411)">
        <path
          d="M11.6 6L9.6 4H2V21H22V6H11.6ZM9 5.5L11 7.5H20.5V10.5H3.5V5.5H9ZM3.5 19.5V12H20.5V19.5H3.5Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_411">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const DocumentsLine = forwardRef(DocumentsLineComponent);

DocumentsLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DocumentsLine.displayName = 'DocumentsLine';

export default DocumentsLine;
