import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const TaxLineComponent = (
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
      {...rest}
    >
      <g clip-path="url(#clip0_320_467)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22ZM12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 7.3 16.7 3.5 12 3.5ZM9.3 8.5H5V9.5H6.7V15.5H7.7V9.5H9.3V8.5ZM12.8008 13.5H10.1008L9.40078 15.5H8.30078L10.9008 8.5H12.0008L14.5008 14.8L15.9008 11.9L14.2008 8.5H15.3008L16.5008 11L17.6008 8.5H18.7008L17.0008 11.9L18.7008 15.5H17.6008L16.4008 12.9L15.2008 15.5H13.6008L12.8008 13.5ZM12.5008 12.5L11.5008 9.9L10.5008 12.5H12.5008Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_467">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const TaxLine = forwardRef(TaxLineComponent);

TaxLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TaxLine.displayName = 'TaxLine';

export default TaxLine;
