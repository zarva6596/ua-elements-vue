export const COLOR_TYPES = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger'
} as const;

export const COLOR_TYPES_COLOR = {
  [COLOR_TYPES.PRIMARY]: 'blue',
  [COLOR_TYPES.SUCCESS]: 'green',
  [COLOR_TYPES.INFO]: 'grey',
  [COLOR_TYPES.WARNING]: 'gold',
  [COLOR_TYPES.DANGER]: 'red',

} as const;