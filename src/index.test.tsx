/* jest */
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Link from './index'

describe('<Link>', () => {
  it('should render aria roles', () => {
    expect(
      render(
        <Link>
          <span onClick={() => (window.location.href = '/foo')} />
        </Link>
      ).asFragment()
    ).toMatchSnapshot(`role='link' tabindex='0'`)
  })

  it('should override default aria attributes', () => {
    expect(
      render(
        <Link>
          <span
            role="button"
            tabIndex={-1}
            onClick={() => (window.location.href = '/foo')}
          />
        </Link>
      ).asFragment()
    ).toMatchSnapshot(`role='button' tabindex='-1'`)
  })

  it('should work without onClick handler', () => {
    expect(
      render(
        <Link>
          <span role="button" tabIndex={-1} />
        </Link>
      ).asFragment()
    ).toMatchSnapshot(`renders`)
  })

  it('should call onClick when enter key is pressed', () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Link>
        <span onClick={cb} data-testid="link" />
      </Link>
    )

    fireEvent.keyDown(getByTestId('link'), {which: 13})
    expect(cb).toBeCalledTimes(1)
  })
})
