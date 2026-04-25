---
url: /docs/components/popover.md
description: 'Displays rich content in a portal, triggered by a button.'
---

# Popover

## Features

## Installation

Install the component from your command line.

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger />
    <PopoverAnchor />
    <PopoverPortal>
      <PopoverContent>
        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a popover.




**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `defaultOpen` | The open state of the popover when it is initially rendered. Use when you do not need to control its open state. | `boolean` | No | `false` |
| `modal` | The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers. | `boolean` | No | `false` |
| `open` | The controlled open state of the popover. | `boolean` | No | - |

**Events**

| Name | Description | Type |
| --- | --- | --- |
| `update:open` | Event handler called when the open state of the popover changes. | `[value: boolean]` |

**Slots**

| Name | Description | Type |
| --- | --- | --- |
| `open` | Current open state | `boolean` |
| `close` | Close the popover | `(): void` |

### Trigger

The button that toggles the popover. By default, the `PopoverContent` will position itself against the trigger.

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"button"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |

### Anchor

An optional element to position the `PopoverContent` against. If this part is not used, the content will position alongside the PopoverTrigger.

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"div"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `reference` | The reference (or anchor) element that is being referred to for positioning. If not provided will use the current component as anchor. | `ReferenceElement` | No | - |

### Portal

When used, portals the content part into the `body`.

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `defer` | Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+) reference | `boolean` | No | - |
| `disabled` | Disable teleport and render the component inline reference | `boolean` | No | - |
| `forceMount` | Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries. | `boolean` | No | - |
| `to` | Vue native teleport component prop :to reference | `string \| HTMLElement` | No | - |

### Content

The component that pops out when the popover is open.




**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `align` | The preferred alignment against the trigger. May change when collisions occur. | `"start" \| "center" \| "end"` | No | - |
| `alignFlip` | Flip alignment when colliding with boundary. May only occur when prioritizePosition is true. | `boolean` | No | - |
| `alignOffset` | An offset in pixels from the start or end alignment options. | `number` | No | - |
| `arrowPadding` | The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners. | `number` | No | - |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"div"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `avoidCollisions` | When true, overrides the side and align preferences to prevent collisions with boundary edges. | `boolean` | No | - |
| `collisionBoundary` | The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. | `Element \| (Element \| null)[] \| null` | No | - |
| `collisionPadding` | The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }. | `number \| Partial<Record<"top" \| "right" \| "bottom" \| "left", number>>` | No | - |
| `disableOutsidePointerEvents` | When true, hover/focus/click interactions will be disabled on elements outside the DismissableLayer. Users will need to click twice on outside elements to interact with them: once to close the DismissableLayer, and again to trigger the element. | `boolean` | No | - |
| `disableUpdateOnLayoutShift` | Whether to disable the update position for the content when the layout shifted. | `boolean` | No | - |
| `forceMount` | Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries. | `boolean` | No | - |
| `hideShiftedArrow` | When true, hides the arrow when it cannot be centered to the reference element. | `boolean` | No | - |
| `hideWhenDetached` | Whether to hide the content when the trigger becomes fully occluded. | `boolean` | No | - |
| `positionStrategy` | The type of CSS position property to use. | `"fixed" \| "absolute"` | No | - |
| `prioritizePosition` | Force content to be position within the viewport. Might overlap the reference element, which may not be desired. | `boolean` | No | - |
| `reference` | The custom element or virtual element that will be set as the reference to position the floating element. If provided, it will replace the default anchor element. | `ReferenceElement` | No | - |
| `side` | The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. | `"top" \| "right" \| "bottom" \| "left"` | No | - |
| `sideFlip` | Flip to the opposite side when colliding with boundary. | `boolean` | No | - |
| `sideOffset` | The distance in pixels from the trigger. | `number` | No | - |
| `sticky` | The sticky behavior on the align axis. partial will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. | `"partial" \| "always"` | No | - |
| `updatePositionStrategy` | Strategy to update the position of the floating element on every animation frame. | `"always" \| "optimized"` | No | - |

**Events**

| Name | Description | Type |
| --- | --- | --- |
| `closeAutoFocus` | Event handler called when auto-focusing on close. Can be prevented. | `[event: Event]` |
| `escapeKeyDown` | Event handler called when the escape key is down. Can be prevented. | `[event: KeyboardEvent]` |
| `focusOutside` | Event handler called when the focus moves outside of the DismissableLayer. Can be prevented. | `[event: FocusOutsideEvent]` |
| `interactOutside` | Event handler called when an interaction happens outside the DismissableLayer. Specifically, when a pointerdown event happens outside or focus moves outside of it. Can be prevented. | `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` |
| `openAutoFocus` | Event handler called when auto-focusing on open. Can be prevented. | `[event: Event]` |
| `pointerDownOutside` | Event handler called when a pointerdown event happens outside of the DismissableLayer. Can be prevented. | `[event: PointerDownOutsideEvent]` |

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `PopoverContent`. Must be rendered inside `PopoverContent`.

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"svg"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `height` | The height of the arrow in pixels. | `number` | No | `5` |
| `rounded` | When true, render the rounded version of arrow. Do not work with as/asChild | `boolean` | No | - |
| `width` | The width of the arrow in pixels. | `number` | No | `10` |

### Close

The button that closes an open popover.

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"button"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |

## Examples

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--reka-popover-trigger-width` and `--reka-popover-content-available-height` to support this. Use them to constrain the content dimensions.

```vue line=10,11
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        class="PopoverContent"
        :side-offset="5"
      >
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css line=3,4
/* styles.css */
.PopoverContent {
  width: var(--reka-popover-trigger-width);
  max-height: var(--reka-popover-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--reka-popover-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue line=9
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css line=3
/* styles.css */
.PopoverContent {
  transform-origin: var(--reka-popover-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```vue line=9
<script setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css line=6-11
/* styles.css */
.PopoverContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.PopoverContent[data-side="top"] {
  animation-name: slideUp;
}
.PopoverContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### With custom anchor

You can anchor the content to another element if you do not want to use the trigger as the anchor.

```vue line=7-11
<script setup>
import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverAnchor as-child>
      <div class="Row">
        Row as anchor <PopoverTrigger>Trigger</PopoverTrigger>
      </div>
    </PopoverAnchor>

    <PopoverPortal>
      <PopoverContent>…</PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.Row {
  background-color: gainsboro;
  padding: 20px;
}
```

### Close using slot props

Alternatively, you can use the `close` method provided by the `PopoverRoot` slot props to programmatically close the popover.

```vue line=4,8,16-20
<script setup>
import { PopoverAnchor, PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot v-slot="{ close }">
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverAnchor />
    <PopoverPortal>
      <PopoverContent>
        <button type="submit" @click="close">
          Submit
        </button>
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Keyboard Interactions

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

#### Abstract the arrow and set default configuration

This example abstracts the `PopoverArrow` part and sets a default `sideOffset` configuration.

#### Usage

```vue
<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from './your-popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Popover trigger</PopoverTrigger>
    <PopoverContent>Popover content</PopoverContent>
  </Popover>
</template>
```

#### Implementation

```ts
// your-popover.ts
export { default as PopoverContent } from 'PopoverContent.vue'

export { PopoverRoot as Popover, PopoverTrigger } from 'reka-ui'
```

```vue
<!-- PopoverContent.vue -->
<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<PopoverContentProps>()
const emits = defineEmits<PopoverContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
```
