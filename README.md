<hr>
<div align="center">
  <h1 align="center">
    &lt;AccessibleLink&gt;
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@accessible/link">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@accessible/link?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@accessible/link">
    <img alt="Types" src="https://img.shields.io/npm/types/@accessible/link?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/accessible-ui/link">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/accessible-ui/link?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/accessible-ui/link">
    <img alt="Build status" src="https://img.shields.io/travis/accessible-ui/link?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@accessible/link">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@accessible/link?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@accessible/link?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @accessible/link</pre>
<hr>

A component that adds aria attributes and keydown events to non-A elements in order to make them act like native links.

## Quick Start

```jsx harmony
import AccessibleLink from '@accessible/link'

const Component = () => (
  <AccessibleLink>
    <span onClick={() => (window.location.href = '/foo')}>Go to /foo</span>
  </AccessibleLink>
)
```

## API

### `<AccessibleLink>`

Adds `role="link"` and `tabIndex={0}` props to its child component unless those props are already
defined in the child component's props. Also adds a `keydown` event for the `Enter` key which
causes the component's `onClick` property to fire.

#### Props

| Prop     | Type                 | Default     | Required? | Description                                                           |
| -------- | -------------------- | ----------- | --------- | --------------------------------------------------------------------- |
| children | `React.ReactElement` | `undefined` | Yes       | The component you want to add accessible roles and keydown events to. |

## LICENSE

MIT
