import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const ItineraryLineComponent = (
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
      <g clip-path="url(#clip0_320_336)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0967 19.3622L9.7 20.2002C9.3 20.5002 9 21.0002 9 21.5002H15C15 21.0002 14.7 20.5002 14.3 20.2002L12.9115 19.3671C13.1077 17.1006 13.3019 14.5732 13.4 13.2001L22 16.0001V14.5001C22 14.0001 21.7 13.5001 21.3 13.2001L13.6 8.6001V6.3001C13.6 4.9001 13.2 3.7001 12.8 3.0001C12.4 2.3001 11.7 2.3001 11.2 3.0001C10.8 3.7001 10.4 4.9001 10.4 6.3001V8.6001L2.7 13.2001C2.3 13.5001 2 14.0001 2 14.5001V16.0001L10.6 13.1001C10.6995 14.4924 10.8978 17.0716 11.0967 19.3622Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_336">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const ItineraryLine = forwardRef(ItineraryLineComponent);

ItineraryLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ItineraryLine.displayName = 'ItineraryLine';

export default ItineraryLine;
