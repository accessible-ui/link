import * as React from 'react'
import {useKeycodes} from '@accessible/use-keycode'
import useMergedRef from '@react-hook/merged-ref'

const Link: React.FC<LinkProps> = ({children}) => {
  const props = children.props

  return React.cloneElement(children, {
    role: props.hasOwnProperty('role') ? props.role : 'link',
    tabIndex: props.hasOwnProperty('tabIndex') ? props.tabIndex : 0,
    ref: useMergedRef(
      // @ts-ignore
      children.ref,
      useKeycodes({
        // enter
        13: props.onClick ? props.onClick : noop,
      })
    ),
  })
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export interface LinkProps {
  children: React.ReactElement | JSX.Element
}

export default Link
