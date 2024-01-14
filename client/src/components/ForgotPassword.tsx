import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const next = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<any>()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => {
      return axios.post('http://localhost:7000/mail/sendmail', data)
    },
    onSuccess: () => {
      alert('Code đã gửi tới email của bạn, kiểm tra email!')
      next('/checkoutPassword')
    },
    onError: () => {
      alert('Gửi mail lỗi!')
    }
  })

  const onSubmit = (value: string) => {
    const randomCode = Math.floor(Math.random() * 10000)
    localStorage.setItem('randomCode', randomCode.toString())

    mutate({ email: value, action: 'forgotPassword', code: randomCode })
  }
  return (
    <>
      <section className='bg-gray-50'>
        <div className='flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0'>
          <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900'>
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            Flowbite
          </a>
          <div className='w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8'>
            <h1 className='mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Forgot your password?
            </h1>
            <p className='font-light text-gray-500'>
              Dont fret! Just type in your email and we will send you a code to reset your password!
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4 space-y-4 lg:mt-5 md:space-y-5' action='#'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>
                  Your email
                </label>
                <input
                  {...register('email', { required: 'Không được bỏ trống!' })}
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                  placeholder='name@company.com'
                  required
                />
                {errors?.email && <div>{errors?.email?.message}</div>}
              </div>

              <button
                type='submit'
                className='w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                {!isPending ? 'Reset password' : 'Loading...'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword
