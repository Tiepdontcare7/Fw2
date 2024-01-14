import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

const BASE_URL = 'http://localhost:7000/card'

export const useCard = () => {
  return useQuery({
    queryKey: ['card'],
    queryFn: async () => {
      const { data } = await axios.get(BASE_URL)
      return data
    }
  })
}

export const useAddToCard = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(BASE_URL + '/add', data)
    },
    onSuccess: () => {
      toast('Thêm sản phẩm vào giỏ thành công!')
      queryClient.invalidateQueries({ queryKey: ['card'] })
    },
    onError: (errors) => {
      console.log(errors)
    }
  })
}

export const useUpdateToCard = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(BASE_URL + '/update', data)
    },
    onSuccess: () => {
      // toast('Cập nhật sản phẩm vào giỏ thành công!')
      queryClient.invalidateQueries({ queryKey: ['card'] })
    },
    onError: (errors) => {
      console.log(errors)
    }
  })
}

export const useRemoveCard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(BASE_URL + '/delete', data)
    },
    onSuccess: () => {
      toast('Xóa sản phẩm khỏi giở hàng thành công!')
      queryClient.invalidateQueries({ queryKey: ['card'] })
    },
    onError: (errors) => {
      console.log(errors)
    }
  })
}
