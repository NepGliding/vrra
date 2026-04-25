---
url: /docs/components/date-field.md
description: Enables users to input specific dates within a designated field.
---

# Date Field

Alpha

## Features

## Preface

The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the date-related components.

## Installation

Install the date package.

Install the component from your command line.

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import {
  DateFieldInput,
  DateFieldRoot,
} from 'reka-ui'
</script>

<template>
  <DateFieldRoot>
    <DateFieldInput />
  </DateFieldRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a date field




**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"div"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `defaultPlaceholder` | The default placeholder date | `DateValue` | No | - |
| `defaultValue` | The default value for the calendar | `DateValue` | No | - |
| `dir` | The reading direction of the date field when applicable.  If omitted, inherits globally from ConfigProvider or assumes LTR (left-to-right) reading mode. | `"ltr" \| "rtl"` | No | - |
| `disabled` | Whether or not the date field is disabled | `boolean` | No | `false` |
| `granularity` | The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity | `"day" \| "hour" \| "minute" \| "second"` | No | - |
| `hideTimeZone` | Whether or not to hide the time zone segment of the field | `boolean` | No | - |
| `hourCycle` | The hour cycle used for formatting times. Defaults to the local preference | `12 \| 24` | No | - |
| `id` | Id of the element | `string` | No | - |
| `isDateUnavailable` | A function that returns whether or not a date is unavailable | `Matcher` | No | - |
| `locale` | The locale to use for formatting dates | `string` | No | - |
| `maxValue` | The maximum date that can be selected | `DateValue` | No | - |
| `minValue` | The minimum date that can be selected | `DateValue` | No | - |
| `modelValue` | The controlled value of the field. Can be bound as v-model. | `DateValue \| null` | No | - |
| `name` | The name of the field. Submitted with its owning form as part of a name/value pair. | `string` | No | - |
| `placeholder` | The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view | `DateValue` | No | - |
| `readonly` | Whether or not the date field is readonly | `boolean` | No | `false` |
| `required` | When true, indicates that the user must set the value before the owning form can be submitted. | `boolean` | No | - |
| `step` | The stepping interval for the time fields. Defaults to 1. | `DateStep` | No | - |

**Events**

| Name | Description | Type |
| --- | --- | --- |
| `update:modelValue` | Event handler called whenever the model value changes | `[date: DateValue]` |
| `update:placeholder` | Event handler called whenever the placeholder value changes | `[date: DateValue]` |

**Slots**

| Name | Description | Type |
| --- | --- | --- |
| `modelValue` | The current date of the field | `DateValue \| undefined` |
| `segments` | The date field segment contents | `{ part: SegmentPart; value: string; }[]` |
| `isInvalid` | Value if the input is invalid | `boolean` |

**Methods**

| Name | Description | Type |
| --- | --- | --- |
| `isDateUnavailable` | A function that returns whether or not a date is unavailable | `Matcher` |
| `setFocusedElement` | Helper to set the focused element inside the DateField | `(el: HTMLElement) => void` |

### Input

Contains the date field segments

**Props**

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `as` | The element or component this component should render as. Can be overwritten by asChild. | `AsTag \| Component` | No | `"div"` |
| `asChild` | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. | `boolean` | No | - |
| `part` | The part of the date to render | `"day" \| "month" \| "year" \| "hour" \| "minute" \| "second" \| "dayPeriod" \| "literal" \| "timeZoneName"` | Yes | - |

## Accessibility

### Keyboard Interactions
