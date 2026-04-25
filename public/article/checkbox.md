---
url: /docs/components/checkbox.md
description: A control that allows the user to toggle between checked and not checked.
---

# Checkbox

## Features

## Installation

Install the component from your command line.

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { CheckboxGroupRoot, CheckboxIndicator, CheckboxRoot } from 'reka-ui'
</script>

<template>
  <CheckboxRoot>
    <CheckboxIndicator />
  </CheckboxRoot>

  <!-- or with array support -->
  <CheckboxGroupRoot>
    <CheckboxRoot>
      <CheckboxIndicator />
    </CheckboxRoot>
  </CheckboxGroupRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly.




**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"button"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `defaultValue` | The value of the checkbox when it is initially rendered. Use when you do not need to control its value. | `unknown` | No | - |
| `disabled` | When true, prevents the user from interacting with the checkbox | `boolean` | No | - |
| `falseValue` | The value used when the checkbox is unchecked. Defaults to false. | `unknown` | No | `(() => false) as unknown as undefined` |
| `id` | Id of the element | `string` | No | - |
| `modelValue` | The controlled value of the checkbox. Can be binded with v-model. | `unknown` | No | - |
| `name` | The name of the field. Submitted with its owning form as part of a name/value pair. | `string` | No | - |
| `required` | When true, indicates that the user must set the value before the owning form can be submitted. | `boolean` | No | - |
| `trueValue` | The value used when the checkbox is checked. Defaults to true. | `unknown` | No | `(() => true) as unknown as undefined` |
| `value` | The value given as data when submitted with a name. | `AcceptableValue` | No | `"on"` |

**Events**

| Name | Description | Type |
| --- | --- | --- |
| `update:modelValue` | Event handler called when the value of the checkbox changes. | `[value: unknown]` |

**Slots**

| Name | Description | Type |
| --- | --- | --- |
| `modelValue` | Current value | `unknown` |
| `state` | Current state | `false \| true \| "indeterminate"` |

### Indicator

Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"span"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `forceMount` | Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries. | `boolean` | No | - |

### Group Root

Wrapper around `CheckboxRoot` to support array of `modelValue`




**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"div"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `defaultValue` | The value of the checkbox when it is initially rendered. Use when you do not need to control its value. | `AcceptableValue[]` | No | - |
| `dir` | The direction of navigation between items. | `"ltr" \| "rtl"` | No | - |
| `disabled` | When true, prevents the user from interacting with the checkboxes | `boolean` | No | - |
| `loop` | Whether keyboard navigation should loop around | `boolean` | No | - |
| `modelValue` | The controlled value of the checkbox. Can be binded with v-model. | `AcceptableValue[]` | No | - |
| `name` | The name of the field. Submitted with its owning form as part of a name/value pair. | `string` | No | - |
| `orientation` | The orientation of the group. Mainly so arrow navigation is done accordingly (left & right vs. up & down) | `"vertical" \| "horizontal"` | No | - |
| `required` | When true, indicates that the user must set the value before the owning form can be submitted. | `boolean` | No | - |
| `rovingFocus` | When false, navigating through the items using arrow keys will be disabled. | `boolean` | No | `true` |

**Events**

| Name | Description | Type |
| --- | --- | --- |
| `update:modelValue` | Event handler called when the value of the checkbox changes. | `[value: AcceptableValue[]]` |

## Examples

### Custom Values

Use the `trueValue` and `falseValue` props to specify custom values for the checked and unchecked states instead of the default `true`/`false`.

```vue line=5-6,11-12
<script setup>
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { ref } from 'vue'

// With string values
const acceptTerms = ref('no')

// With number values
const permission = ref(0)
</script>

<template>
  <!-- String values -->
  <CheckboxRoot v-model="acceptTerms" true-value="yes" false-value="no">
    <CheckboxIndicator>
      <Icon icon="radix-icons:check" />
    </CheckboxIndicator>
  </CheckboxRoot>
  <span>Value: {{ acceptTerms }}</span> <!-- "yes" or "no" -->

  <!-- Number values -->
  <CheckboxRoot v-model="permission" :true-value="1" :false-value="0">
    <CheckboxIndicator>
      <Icon icon="radix-icons:check" />
    </CheckboxIndicator>
  </CheckboxRoot>
  <span>Value: {{ permission }}</span> <!-- 1 or 0 -->
</template>
```

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```vue line=5,9-14,16-18
<script setup>
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

const checked = ref('indeterminate')
</script>

<template>
  <CheckboxRoot v-model="checked">
    <CheckboxIndicator>
      <Icon
        v-if="checked === 'indeterminate'"
        icon="radix-icons:divider-horizontal"
      />
      <Icon
        v-if="checked"
        icon="radix-icons:check"
      />
    </CheckboxIndicator>
  </CheckboxRoot>

  <button
    type="button"
    @click="() => (checked === 'indeterminate' ? (checked = false) : (checked = 'indeterminate'))"
  >
    Toggle indeterminate
  </button>
</template>
```

## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions
