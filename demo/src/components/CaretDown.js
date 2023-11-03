import React from "react";

const CaretDownIcon = ({ size = 24, color = "currentcolor", ...props }) => (
  <svg {...props} viewBox="0 0 320 512" width={size} height={size} fill={color}>
    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
  </svg>
);

CaretDownIcon.displayName = "CaretDownIcon";

export default CaretDownIcon;
