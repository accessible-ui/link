import * as React from 'react'
import useKey from '@accessible/use-key'
import useMergedRef from '@react-hook/merged-ref'

export function useA11yLink<
  T extends HTMLElement,
  E extends React.MouseEvent<T, MouseEvent>
>(target: React.RefObject<T> | T | null, onClick: (event: E) => any) {
  // @ts-expect-error
  useKey(target, {Enter: onClick})
  return {
    onClick,
    role: 'link',
    tabIndex: 0,
  }
}

export function Link({children}: LinkProps) {
  const ref = React.useRef(null)
  const props = children.props
  const {onClick, role, tabIndex} = useA11yLink(ref, props.onClick || noop)

  return React.cloneElement(children, {
    onClick,
    role: props.hasOwnProperty('role') ? props.role : role,
    tabIndex: props.hasOwnProperty('tabIndex') ? props.tabIndex : tabIndex,
    ref: useMergedRef(
      // @ts-ignore
      children.ref,
      ref
    ),
  })
}

function noop() {}

export interface LinkProps {
  children: React.ReactElement | JSX.Element
}

export default Link
