import AppTextField from '@/ui-component/AppTextField'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { MobileDateTimePicker } from '@mui/x-date-pickers'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import EventAPI from '@/api/event'
import Router from 'next/router'

const initValues = {
  name: '',
  type: '',
  startDate: new Date().getTime(),
  endDate: new Date().getTime(),
  description: '',
}

const EventForm = ({ initValue }) => {
  const [showSelectDateFrom, setShowSelectDateFrom] = useState(false)
  const [showSelectDateTo, setShowSelectDateTo] = useState(false)

  const convertValue = (values) => {
    return {
      ...values,
      name: values.name,
      type: values.type,
      startDate: new Date(values.startDate).getTime(),
      endDate: new Date(values.endDate).getTime(),
      description: values.description,
    }
  }

  const formik = useFormik({
    initialValues: initValue ? convertValue(initValue) : initValues,
    onSubmit: async (values) => {
      const formData = convertFormData(values)
      if (!!initValue) {
        await EventAPI.editEvent(formData)
      } else {
        await EventAPI.createEvent(formData)
      }
      Router.push('/event')
    },
  })

  const convertFormData = (values) => {
    return {
      ...values,
      startDate: new Date(values.startDate).toISOString(),
      endDate: new Date(values.endDate).toISOString(),
    }
  }

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ p: 1 }}
      noValidate
    >
      <Grid container mb={3} spacing={2}>
        <Grid item xs={12} md={6}>
          <AppTextField formik={formik} label={'Name'} name="name" required />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel
              error={formik.touched['type'] && Boolean(formik.errors['type'])}
              required
              id="demo-simple-select-helper-label"
            >
              {'Type'}
            </InputLabel>
            <Select
              value={formik.values.type}
              label={'Type'}
              onChange={(event) => {
                formik.setFieldValue('type', event.target.value)
              }}
              error={formik.touched['type'] && Boolean(formik.errors['type'])}
            >
              <MenuItem value="STORM">STORM</MenuItem>
              <MenuItem value="FLOOD">FLOOD</MenuItem>
              <MenuItem value="LANDSLIDE">LANDSLIDE</MenuItem>
              <MenuItem value="TSUNAMI">TSUNAMI</MenuItem>
            </Select>
            {formik.touched['type'] && (
              <FormHelperText error={Boolean(formik.errors['type'])}>
                {formik.errors['type']}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        {!!!initValue && (
          <Grid item xs={12} md={6}>
            <MobileDateTimePicker
              ampm={false}
              label="Start Date"
              inputFormat="dd/MM/yyyy - HH:mm"
              value={formik.values.startDate}
              onChange={(newValue) => {
                formik.setFieldValue('startDate', newValue.getTime())
              }}
              open={showSelectDateFrom}
              onOpen={() => setShowSelectDateFrom(true)}
              onClose={() => setShowSelectDateFrom(false)}
              showToolbar={false}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setShowSelectDateFrom(true)}
                  >
                    <IconButton edge="end" size="large" sx={{ mr: '5px' }}>
                      <DateRangeOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              renderInput={(params) => (
                <TextField
                  required
                  fullWidth
                  name="Start Date"
                  {...params}
                  error={
                    formik.touched['startDate'] &&
                    Boolean(formik.errors['startDate'])
                  }
                  helperText={
                    formik.touched['startDate'] && formik.errors['startDate']
                  }
                />
              )}
            />
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          <MobileDateTimePicker
            ampm={false}
            label="End Date"
            inputFormat="dd/MM/yyyy - HH:mm"
            value={formik.values.endDate}
            onChange={(newValue) => {
              formik.setFieldValue('endDate', newValue.getTime())
            }}
            open={showSelectDateTo}
            onOpen={() => setShowSelectDateTo(true)}
            onClose={() => setShowSelectDateTo(false)}
            showToolbar={false}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowSelectDateTo(true)}
                >
                  <IconButton edge="end" size="large" sx={{ mr: '5px' }}>
                    <DateRangeOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            renderInput={(params) => (
              <TextField
                required
                fullWidth
                name="End Date"
                {...params}
                error={
                  formik.touched['endDate'] && Boolean(formik.errors['endDate'])
                }
                helperText={
                  formik.touched['endDate'] && formik.errors['endDate']
                }
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <AppTextField
            formik={formik}
            label={'Description'}
            name="description"
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="end"
        marginTop={0.5}
        spacing={2}
      >
        <Grid item xs={4} sm={3} md={2}>
          <Button
            color="primary"
            variant="text"
            fullWidth
            type="button"
            onClick={() => formik.resetForm()}
          >
            {!!initValue ? 'reset' : 'clear'}
          </Button>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <LoadingButton
            color="primary"
            variant="outlined"
            fullWidth
            type="submit"
            loadingPosition="start"
          >
            {'submit'}
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EventForm
