import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MenuLineComponent = (
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
      <g clip-path="url(#clip0_320_131)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_131">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MenuLine = forwardRef(MenuLineComponent);

MenuLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuLine.displayName = 'MenuLine';

export default MenuLine;
