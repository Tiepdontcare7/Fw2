import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const BASE_URL = 'http://localhost:7000/users'

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get(BASE_URL)
      return data
    }
  })
}

export const useSignup = () => {
  const next = useNavigate()

  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(BASE_URL + '/signup', data)
    },
    onSuccess: (res) => {
      console.log(res)
      toast.success('Đăng ký thành công!')
      next('/')
    },
    onError: (errors: any) => {
      toast.error(errors?.response.data.messages)
    }
  })
}

export const useSignin = () => {
  const next = useNavigate()

  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(BASE_URL + '/signin', data)
    },
    onSuccess: (res) => {
      toast.success(res.data.messages)
      localStorage.setItem('username', res.data.findUser.username)
      localStorage.setItem('user', JSON.stringify(res.data.findUser))
      localStorage.setItem('userId', res.data.findUser._id)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.findUser.role)
      next('/')
    },
    onError: (errors: any) => {
      toast.error(errors?.response.data.messages)
    }
  })
}

