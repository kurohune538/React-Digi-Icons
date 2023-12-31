import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const SearchFillComponent = (
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
      <g clip-path="url(#clip0_320_180)">
        <path
          d="M15.3992 14.5002C16.5992 13.1002 17.1992 11.3002 17.1992 9.5002C17.1992 5.2002 13.6992 1.7002 9.39922 1.7002C5.09922 1.7002 1.69922 5.2002 1.69922 9.5002C1.69922 13.8002 5.19922 17.3002 9.49922 17.3002C11.0992 17.3002 12.5992 16.8002 13.8992 15.9002L19.8992 21.9002L21.2992 20.5002L15.3992 14.5002ZM15.1992 9.5002C15.1992 12.7002 12.5992 15.3002 9.39922 15.3002C6.19922 15.3002 3.59922 12.7002 3.59922 9.5002C3.59922 6.3002 6.19922 3.7002 9.39922 3.7002C12.5992 3.7002 15.1992 6.3002 15.1992 9.5002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_180">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const SearchFill = forwardRef(SearchFillComponent);

SearchFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SearchFill.displayName = 'SearchFill';

export default SearchFill;
