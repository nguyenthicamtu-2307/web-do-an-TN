import { HTMLInputTypeAttribute } from 'react'

// mui
import { TextField } from '@mui/material'

export default function AppTextField({
  formik,
  name,
  label,
  type = 'text',
  required = false,
  inputProps,
  endAdornment,
  onChange,
  rows = 1,
  multiline = false,
  disabled,
}) {
  return (
    <TextField
      required={required}
      fullWidth
      type={type}
      id={name}
      name={name}
      label={label}
      value={formik.values[name] || ''}
      onChange={(e) => {
        onChange ? onChange(e) : formik.handleChange(e)
      }}
      multiline={multiline}
      rows={rows}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      InputProps={{ inputProps: inputProps, endAdornment: endAdornment }}
      disabled={disabled}
    />
  )
}
