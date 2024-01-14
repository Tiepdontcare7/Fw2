import { useForm } from 'react-hook-form'
import { useSignin, useSignup, useUsers } from '../../apis/users'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUser>()
  const { mutate: signUp } = useSignup()
  const { mutate: signIn } = useSignin()
  const { data } = useUsers()

  const onSubmit = (data: any) => {
    signUp({ ...data, role: 0 })
  }

  // const responseFacebook = (response: any) => {
  //   console.log(response)
  // }

  return (
    <div className='contain py-16'>
      <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
        <h2 className='text-2xl uppercase font-medium mb-1'>Register</h2>
        <p className='text-gray-600 mb-6 text-sm'>welcome back customer</p>
        <form onSubmit={handleSubmit(onSubmit)} action='' className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
          <div>
            <label htmlFor='username' className='sr-only'>
              Username
            </label>
            <input
              {...register('username', { required: 'Không được bỏ trống!' })}
              type='text'
              name='username'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter username'
            />
            {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
          </div>

          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              {...register('email', { required: 'Không được bỏ trống!' })}
              type='email'
              name='email'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter email'
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              {...register('password', { required: 'Không được bỏ trống!' })}
              type='password'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter password'
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>

          <div>
            <label htmlFor='confirmPassword' className='sr-only'>
              Confirm password
            </label>
            <input
              {...register('confirmPassword', { required: 'Không được bỏ trống!' })}
              type='password'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter confirm password'
            />
            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>
              No account?
              <a className='underline' href=''>
                Sign up
              </a>
            </p>
            <button
              type='submit'
              className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
            >
              Sign up
            </button>
          </div>
        </form>

        {/* login with */}
        <div className='mt-6 flex justify-center relative'>
          <div className='text-gray-600 uppercase px-3 bg-white z-10 relative'>Or login with</div>
          <div className='absolute left-0 top-3 w-full border-b-2 border-gray-200' />
        </div>
        <div className='mt-4 flex gap-4'>
          <a
            href='#'
            className='w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700'
          >
            facebook
          </a>
          {/* {
            <FacebookLogin
              appId='1088597931155576'
              autoLoad={true}
              fields='name,email,picture'
              // onClick={componentClicked}
              callback={responseFacebook}
            />
          } */}
          {
            <GoogleOAuthProvider clientId='768220439376-2qeislmthrsj6hus5nlrd8nrbnnd5sea.apps.googleusercontent.com'>
              <GoogleLogin
                onSuccess={(credentialResponse: any) => {
                  const userS: any = jwtDecode(credentialResponse.credential)
                  const findUser = data?.find((user: any) => user.email == userS.email)
                  console.log(findUser)
                  if (!findUser) {
                    signUp({
                      username: userS.name,
                      email: userS.email,
                      password: userS.name.split(' ').join('') + '7'
                    })
                  } else {
                    signIn({
                      email: userS.email,
                      password: userS.name.split(' ').join('') + '7'
                    })
                  }
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
              ;
            </GoogleOAuthProvider>
          }
        </div>
        <p className='mt-4 text-center text-gray-600'>
          Dont have account?
          <a href='register.html' className='text-primary'>
            Register now
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register
