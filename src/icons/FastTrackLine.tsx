import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const FastTrackLineComponent = (
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
      <g clip-path="url(#clip0_320_317)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.9984 3.8C15.9984 4.79411 15.1926 5.6 14.1984 5.6C13.2043 5.6 12.3984 4.79411 12.3984 3.8C12.3984 2.80589 13.2043 2 14.1984 2C15.1926 2 15.9984 2.80589 15.9984 3.8ZM9 6H2V7.5H9V6ZM18.0502 10.2756C18.2969 10.4761 18.5254 10.6618 18.8016 10.7999L18.3016 12.1999V12.2999C17.5016 11.8999 16.7016 11.4999 16.0016 10.9999V12.7999C18.0016 15.4999 18.9016 18.5999 18.2016 22.0999L16.8016 21.8999C16.7016 19.0999 16.2016 17.7999 14.9016 16.0999C14.1016 17.7999 12.6016 19.7999 9.90156 21.7999L8.90156 20.6999C10.5016 18.8999 11.9016 16.0999 12.8016 13.2999V9.1999C12.1016 9.2999 11.4016 9.6999 10.9016 10.1999C10.4016 10.6999 10.0016 11.2999 9.80156 11.9999L8.60156 11.5999C8.80156 10.7999 9.00156 10.0999 9.40156 9.3999C10.0016 8.3999 10.7016 7.6999 11.7016 7.0999C12.7016 6.4999 13.3016 6.3999 14.2016 6.3999C15.0016 6.3999 15.6016 6.8999 16.1016 7.8999C16.5016 8.6999 17.0016 9.3999 17.7016 9.9999C17.8254 10.0928 17.9396 10.1856 18.0502 10.2755L18.0502 10.2756ZM19.2227 12.5293L20.267 9.7168L21.9545 10.3434L20.9102 13.1559L19.2227 12.5293ZM2 9H7V10.5H2V9ZM5 12H2V13.5H5V12Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_317">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const FastTrackLine = forwardRef(FastTrackLineComponent);

FastTrackLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FastTrackLine.displayName = 'FastTrackLine';

export default FastTrackLine;
