import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useAddProduct, useUpdateProduct } from '../../../apis/products'
import { useCategory } from '../../../apis/category'

const ProductForm = () => {
  const {
    setValue,
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<IProduct>()
  const { id } = useParams()

  const { data: dataC } = useCategory()
  const { mutate: updateP } = useUpdateProduct()
  const { mutate: addP } = useAddProduct()

  let mode: string = 'add'
  if (id) mode = 'update'

  const querryClient = useQueryClient()
  const data: any = querryClient.getQueryData(['products'])

  useEffect(() => {
    const product = data?.docs?.find((d: IProduct) => d._id == id)
    setValue('categoryId', product?.categoryId)
    reset(product)
  }, [])

  const onSubmit: SubmitHandler<any> = (data: any) => {
    if (mode == 'add') {
      addP(data)
    } else {
      updateP({
        ...data,
        _id: id,
        createdAt: undefined,
        updatedAt: undefined
      })
    }
  }

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
            {mode == 'add' ? 'Thêm' : 'Cập nhật'} sản phẩm
          </h1>
          <form
            action=''
            onSubmit={handleSubmit(onSubmit)}
            className='mb-0 mt-6 space-y-4 rounded-lg px-4 py-6 shadow-lg sm:p-6 lg:p-8'
          >
            <div>
              {mode == 'add' ? undefined : <label htmlFor='email'>Name</label>}
              <input
                autoFocus
                {...register('name', { required: 'Không được bỏ trống' })}
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter name'
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div>
              {mode == 'add' ? undefined : <label htmlFor='email'>Price</label>}
              <input
                {...register('price', { required: 'Không được bỏ trống' })}
                type='number'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter price'
              />
              {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
            </div>
            <div>
              {mode == 'add' ? undefined : <label htmlFor='email'>Description</label>}
              <input
                {...register('desc', { required: 'Không được bỏ trống' })}
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter description'
              />
              {errors.desc && <p className='text-red-500'>{errors.desc.message}</p>}
            </div>
            <div>
              {mode == 'add' ? undefined : <label htmlFor='email'>Image</label>}
              <input
                {...register('img', { required: 'Không được bỏ trống' })}
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter image'
              />
              {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <div>
              {mode == 'add' ? undefined : <label htmlFor='email'>Quantity</label>}
              <input
                {...register('quantity', { required: 'Không được bỏ trống' })}
                type='number'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter quantity'
              />
              {errors.quantity && <p className='text-red-500'>{errors.quantity.message}</p>}
            </div>
            <select className='border ml-2' {...register('categoryId')}>
              {mode == 'add' ? (
                <option value='' defaultValue={''}>
                  Chọn danh mục
                </option>
              ) : undefined}

              {dataC?.map((data: ICategory, i: any) => (
                <option key={i} value={data._id}>
                  {data.name}
                </option>
              ))}
            </select>
            <button
              type='submit'
              className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
            >
              {mode == 'add' ? 'Thêm' : 'Cập nhật'} sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
