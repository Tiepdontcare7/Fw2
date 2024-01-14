import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import instance from './api'
import { toast } from 'react-toastify'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await instance.get(`/products`)
      return data
    }
  })
}

export const useAddProduct = () => {
  const queryClient = useQueryClient()
  const next = useNavigate()

  return useMutation({
    mutationFn: async (data: IProduct) => {
      return await instance.post('/products/add', data)
    },
    onSuccess: () => {
      toast.success('Thêm sản phẩm thành công!')
      queryClient.invalidateQueries({ queryKey: ['products'] })
      next('/admin/products')
    },
    onError: (errors: any) => {
      toast.error(errors.response.data.message)
    }
  })
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()
  const next = useNavigate()

  return useMutation({
    mutationFn: async (data: any) => {
      return await instance.put(`/products/update/${data._id}`, data)
    },
    onSuccess: () => {
      toast.success('Cập nhật sản phẩm thành công!')
      queryClient.invalidateQueries({ queryKey: ['products'] })
      next('/admin/products')
    },
    onError: (errors: any) => {
      toast.error(errors.response.data.message)
    }
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: any) => {
      return await instance.delete(`/products/delete/${id}`)
    },
    onSuccess: () => {
      toast.success('Xóa sản phẩm thành công!')
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
    onError: (errors: any) => {
      toast.error(errors.response.data.message)
    }
  })
}
