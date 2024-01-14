import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useAddCategory, useCategory, useUpdateCategory } from '../../../apis/category'
import { useEffect } from 'react'

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICategory>()

  const { data } = useCategory()
  const { mutate: addC } = useAddCategory()
  const { mutate: updateC } = useUpdateCategory()

  let mode = 'add'
  const { id } = useParams()
  if (id) mode = 'update'

  useEffect(() => {
    reset(data.find((c: any) => c._id === id))
  }, [])

  const onSubmit = (data: any) => {
    if (mode == 'add') {
      addC(data)
    } else {
      updateC({ name: data.name, slug: data.slug, _id: id })
    }
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>{mode == 'add' ? 'Thêm' : 'Cập nhật'} danh mục</h1>
      </div>
      <form action='' onSubmit={handleSubmit(onSubmit)} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
        <div>
          <label htmlFor='email'>{mode == 'update' ? 'Name: ' : undefined}</label>
          <input
            autoFocus
            {...register('name', { required: 'Không được bỏ trống!' })}
            type='text'
            className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
            placeholder='Enter name category'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor='email'>{mode == 'update' ? 'Slug: ' : undefined}</label>
          <input
            {...register('slug', { required: 'Không được bỏ trống!' })}
            type='text'
            className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
            placeholder='Enter slug category'
          />
          {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
        </div>

        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
          >
            {mode == 'add' ? 'Thêm' : 'Cập nhật'} danh mục
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm
