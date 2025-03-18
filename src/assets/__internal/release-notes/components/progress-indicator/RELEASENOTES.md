<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Progress Indicator Release Notes

<!-- ## [Unreleased] -->

## 2.24.0

### Changed

- Updated Progress Step `button` to `div`.
- Added tabindex="0" to above `div` to make it focusable.
- Removed `aria-describedby` and `title` attributes.
- Updated focus style for Web and Mobile.

## 2.22.1

### Fixed

- Matching styles for [dir=rtl] added.
## 2.21.0

### Added

- Added id to aria-labelledby to meet accessibility requirements.

## 2.16.0

### Added

- Added `aria-label` attribute to the div with role of `progressbar` to meet accessibility requirements.
## 2.13.0

## Fixed

- Addressed issue where button icons in progress items were misaligned for mobile/touch

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- Updated how the vertical variant handles the layout of its indicators so pixel nudging becomes deprecated (e.x. `margin-left: 1px` on `.slds-progress__item.slds-is-completed .slds-progress__marker_icon`)
- For touch devices:
  - Increased tap target size of contained `.slds-button` to a height equal to `$height-tappable` (2.75rem) using `:before` pseudo element
  - Increased icon and marker size to `$square-tappable-xx-small` (1.25rem)
  - For vertical variant, increased font size to `$font-size-4` (0.875rem)

## 2.8.1

### Fixed

- IE11: Layout issues when in a modal
