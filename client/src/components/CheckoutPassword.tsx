import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const CheckoutPassword = () => {
  const next = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const randomCode = localStorage.getItem('randomCode')

  const onSubmit = (value: any) => {
    if (value.code == randomCode) next('/chancePassword')
    else alert('Mã không đúng!')
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto my-5'>
        <label htmlFor='number' className='block mb-2 text-sm font-medium text-gray-900'>
          Nhập code đã gửi đén email của bạn:
        </label>
        <input
          {...register('code', { required: 'Không được bỏ trống!' })}
          type='number'
          id='number'
          aria-describedby='helper-text-explanation'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder='12345'
        />
        {/* {errors?.email && <span>{errors?.email?.message}</span>} */}
        <button
          type='submit'
          className='text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Nhập code
        </button>
      </form>
    </>
  )
}

export default CheckoutPassword
