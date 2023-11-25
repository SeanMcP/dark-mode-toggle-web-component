# Dark-Mode Toggle Web Component

A simple web component that transforms a checkbox into a dark-mode toggle.

## Overview

This web component starts with a checkbox child and adds all of the logic for a dark-mode toggle:
- ♿ Respects the user's OS-level dark-mode preference
- 🗃️ Persists preference in local storage
- ✅ Syncs checkbox state with preference
- 🕶️ Adds `[data-dark-mode=true]` attribute to `<html>` element

[Live demo](https://seanmcp.github.io/dark-mode-toggle-web-component)

## Installation

Download the [`dark-mode-toggle.js`](dark-mode-toggle.js) file and add it to
your project, then define the custom element in your JavaScript file:

```js
import DarkModeToggle from "./path/to/dark-mode-toggle.js";

customElements.define(...DarkModeToggle);
```

By default, the tag name is `dark-mode-toggle`. If you would like to use a different tag name, you can import the web-component class directly and use your own:

```js
import { DarkModeToggle } from "./path/to/dark-mode-toggle.js";

customElements.define("your-custom-tag-name", DarkModeToggle);
```

## Usage

Wrap the web component around an `input[type=checkbox]` element:

```html
<dark-mode-toggle>
  <input aria-label="dark-mode toggle" type="checkbox" />
</dark-mode-toggle>
```

Then add CSS styles to the `html` element when dark-mode is enabled:

```css
html[data-dark-mode=true] {
  color-scheme: dark;
}
```

## License

MIT
