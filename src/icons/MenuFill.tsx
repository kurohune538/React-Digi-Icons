import { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

const MenuFillComponent = (
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
      <g clip-path="url(#clip0_320_137)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.1992 5.2998H2.69922V7.2998H21.1992V5.2998ZM21.1992 11H2.69922V13H21.1992V11ZM2.69922 16.6997H21.1992V18.6997H2.69922V16.6997Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_137">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const MenuFill = forwardRef(MenuFillComponent);

MenuFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuFill.displayName = 'MenuFill';

export default MenuFill;
