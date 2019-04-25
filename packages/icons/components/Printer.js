import React from 'react'
import Svg from './Svg'
export const SvgPrinter = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M19 8H5c-1.7 0-3 1.3-3 3v6h4v4h12v-4h4v-6c0-1.7-1.3-3-3-3zm-3 11H8v-5h8v5zm3-7c-.5 0-1-.4-1-1s.5-1 1-1 1 .4 1 1-.5 1-1 1zm-1-9H6v4h12V3z" />
  </Svg>
)
SvgPrinter.isIcon = true
SvgPrinter.defaultProps = {
  size: 24
}
export default SvgPrinter