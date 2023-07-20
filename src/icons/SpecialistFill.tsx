import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const SpecialistFillComponent = (
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
      <g clip-path="url(#clip0_320_668)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.59766 7.49995C10.6977 7.89995 12.2977 9.79995 12.2977 11.9999C13.3977 11.9999 14.5977 12.0999 15.5977 12.4999C17.8977 11.6999 20.3977 11.8999 22.5977 12.6999V2.39995L22.0977 2.19995C19.9977 1.49995 17.6977 1.49995 15.5977 2.09995C13.2977 1.39995 10.8977 1.49995 8.59766 2.29995V7.49995ZM21.0977 10.7999C19.4977 10.4999 17.8977 10.4999 16.2977 10.7999V3.59995C17.8977 3.19995 19.4977 3.19995 21.0977 3.59995V10.7999ZM8.89922 16.4001C5.29922 15.6001 1.69922 18.5001 1.69922 22.3001H13.6992C13.6992 19.3001 11.6992 16.9001 8.89922 16.4001ZM11.0016 11.9998C11.0016 13.7671 9.56887 15.1998 7.80156 15.1998C6.03425 15.1998 4.60156 13.7671 4.60156 11.9998C4.60156 10.2325 6.03425 8.7998 7.80156 8.7998C9.56887 8.7998 11.0016 10.2325 11.0016 11.9998Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_668">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const SpecialistFill = forwardRef(SpecialistFillComponent);

SpecialistFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SpecialistFill.displayName = 'SpecialistFill';

export default SpecialistFill;
