import EventAPI from '@/api/event'
import EventForm from '@/features/EventForm'
import MainLayout from '@/layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const EditEvent = () => {
  const router = useRouter()
  const [detailEvent, setDetailEvent] = useState({})

  const { eventId } = router.query

  const fetchDetailEvent = async () => {
    const data = await EventAPI.getDetailEvent({ id: eventId })
    setDetailEvent(data.data.data)
  }

  useEffect(() => {
    if (eventId) {
      fetchDetailEvent()
    }
  }, [eventId])

  return (
    <MainLayout>
      {detailEvent?.id && <EventForm initValue={detailEvent} />}
    </MainLayout>
  )
}

export default EditEvent
