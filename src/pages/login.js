import React from 'react'
import {} from 'formik'
import AuthenticationAPI from '@/api/authentication'
import { useFormik } from 'formik'
import StorageUtil, { STORAGE_KEY } from '@/util/storage'
import Router from 'next/router'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: 'admin|huong123@gmail.com',
      password: 'Abcd@1234',
    },
    onSubmit: async (values) => {
      try {
        const response = await AuthenticationAPI.signIn(values)
        if (response?.data?.data?.accessToken) {
          StorageUtil.set(STORAGE_KEY.JWT, response?.data?.data?.accessToken)
          Router.push('/')
        }
      } catch (err) {
        console.error(err)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="username"
      />
      {formik.errors.email && formik.touched.email && formik.errors.email}
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="password"
      />
      {formik.errors.password &&
        formik.touched.password &&
        formik.errors.password}
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  )
}

export default Login
