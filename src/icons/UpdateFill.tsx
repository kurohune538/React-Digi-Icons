import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const UpdateFillComponent = (
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
      <g clip-path="url(#clip0_320_171)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3984 13.2998L22.0984 11.5998L23.5984 12.9998L19.4984 17.0998L15.3984 12.9998L16.7984 11.5998L18.4984 13.2998V11.9998C18.4984 8.1998 15.5984 5.1998 11.9984 5.1998C11.2984 5.1998 10.4984 5.2998 9.79844 5.5998L9.59844 5.6998L8.89844 3.8998L9.09844 3.7998C10.0984 3.4998 10.9984 3.2998 11.9984 3.2998C16.5984 3.2998 20.3984 7.1998 20.3984 11.9998V13.2998ZM11.9984 18.8C12.6984 18.8 13.4984 18.7 14.1984 18.4L14.2984 18.3L14.9984 20.1L14.7984 20.2C13.7984 20.5 12.8984 20.7 11.8984 20.7C7.29844 20.7 3.49844 16.8 3.49844 12V11.3L1.79844 13L0.398438 11.6L4.49844 7.5L8.59844 11.5L7.19844 12.9L5.49844 11.2V12C5.49844 15.8 8.39844 18.8 11.9984 18.8Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_171">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const UpdateFill = forwardRef(UpdateFillComponent);

UpdateFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UpdateFill.displayName = 'UpdateFill';

export default UpdateFill;