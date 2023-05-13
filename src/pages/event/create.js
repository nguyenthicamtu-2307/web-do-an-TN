import EventForm from '@/features/EventForm'
import MainLayout from '@/layout'
import { useFormik } from 'formik'
import React from 'react'

const CreateEvent = () => {
  return (
    <MainLayout>
      <EventForm />
    </MainLayout>
  )
}

export default CreateEvent
