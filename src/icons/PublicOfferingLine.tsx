import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const PublicOfferingLineComponent = (
  { color = 'currentColor', size = 24, ...rest },
  ref: Ref<SVGSVGElement>
) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_257)">
        <path
          d="M5 22H3.5V2.5L22 9.5L5 16.5V22ZM5 4.7V14.9L17.9 9.6L5 4.7Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_257">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const PublicOfferingLine = forwardRef(PublicOfferingLineComponent);

PublicOfferingLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PublicOfferingLine.displayName = 'PublicOfferingLine';

export default PublicOfferingLine;
