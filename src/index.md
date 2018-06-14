---
layout: layouts/base.njk
title: My new component
description: This is a brief description of what my component does
---
## Getting started
- has cool stuff
- uses new JavaScript
- Works with your fancy frameworks.

## Add-on demo
{% include demo-html.njk %}

```javascript
const gatherInput = event => {
  let button = event.target.closest('#my-button');

  if (!button) return;

  let message = prompt('What would you like me to say?');
  alert(message);
}
```