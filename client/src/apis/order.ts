import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import instance from './api'
import { toast } from 'react-toastify'

export const useOrder = () => {
  return useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const { data } = await instance.get('/order')
      return data
    }
  })
}

export const useAddCategory = () => {
  const queryClient = useQueryClient()
  const next = useNavigate()

  return useMutation({
    mutationFn: async (data: IProduct) => {
      return await instance.post('/category/add', data)
    },
    onSuccess: () => {
      toast('Thêm danh mục thành công!')
      queryClient.invalidateQueries({ queryKey: ['category'] })
      next('/admin/category')
    },
    onError: (errors: any) => {
      toast(errors.response.data.message)
    }
  })
}

export const useUpdateCategory = () => {
  const queryClient = useQueryClient()
  const next = useNavigate()

  return useMutation({
    mutationFn: async (data: any) => {
      return await instance.put(`/category/update/${data._id}`, data)
    },
    onSuccess: () => {
      toast('Cập nhật danh mục thành công!')
      queryClient.invalidateQueries({ queryKey: ['category'] })
      next('/admin/category')
    },
    onError: (errors: any) => {
      toast(errors.response.data.message)
    }
  })
}

export const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: any) => {
      return await instance.delete(`/category/delete/${id}`)
    },
    onSuccess: () => {
      toast('Xóa sản phẩm thành công!')
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
    onError: (errors: any) => {
      toast(errors.response.data.message)
    }
  })
}
