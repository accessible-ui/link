import React, {cloneElement} from 'react'
import {useKeycodes} from '@accessible/use-keycode'
import useMergedRef from '@react-hook/merged-ref'

export interface LinkProps {
  children: React.ReactElement | JSX.Element
}

const Link: React.FC<LinkProps> = ({children}) => {
  const props = children.props
  const onClick = props.onClick ? props.onClick : noop

  return cloneElement(children, {
    role: props.hasOwnProperty('role') ? props.role : 'link',
    tabIndex: props.hasOwnProperty('tabIndex') ? props.tabIndex : 0,
    ref: useMergedRef(
      // @ts-ignore
      children.ref,
      useKeycodes({
        // enter
        13: onClick,
      })
    ),
  })
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export default Link

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  Link.displayName = 'AccessibleLink'
}
