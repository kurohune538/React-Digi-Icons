import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const DownloadFillComponent = (
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
      <g clip-path="url(#clip0_320_149)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9977 8.5998L19.3977 9.9998L11.9977 17.3998L4.59766 9.9998L5.99766 8.5998L10.9977 13.5998V2.7998H12.9977V13.5998L17.9977 8.5998ZM2.69922 19.1997H21.1992V21.1997H2.69922V19.1997Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_149">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const DownloadFill = forwardRef(DownloadFillComponent);

DownloadFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DownloadFill.displayName = 'DownloadFill';

export default DownloadFill;
