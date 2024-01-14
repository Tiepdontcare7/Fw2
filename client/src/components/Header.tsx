import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const usernameLocal = localStorage.getItem('username')
  const { quantityCard } = useSelector((state: { card: { quantityCard: number } }) => state.card)
  // console.log('quantity:' + quantityCard)

  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <header className='py-4 shadow-sm bg-white'>
        <div className='container flex items-center justify-between'>
          <Link className='ml-7' to='/'>
            <svg width='122' height='23' viewBox='0 0 122 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16.8232 22H12.751L9.39648 16.375C9.09375 15.8574 8.7959 15.418 8.50293 15.0566C8.21973 14.6855 7.92676 14.3828 7.62402 14.1484C7.33105 13.9141 7.00879 13.7432 6.65723 13.6357C6.30566 13.5283 5.91016 13.4746 5.4707 13.4746H4.06445V22H0.592773V0.994141H7.50684C8.49316 0.994141 9.40137 1.11133 10.2314 1.3457C11.0615 1.58008 11.7842 1.93652 12.3994 2.41504C13.0146 2.88379 13.4932 3.47461 13.835 4.1875C14.1865 4.89062 14.3623 5.71582 14.3623 6.66309C14.3623 7.40527 14.25 8.08887 14.0254 8.71387C13.8105 9.3291 13.498 9.88086 13.0879 10.3691C12.6875 10.8477 12.1992 11.2578 11.623 11.5996C11.0566 11.9414 10.417 12.2051 9.7041 12.3906V12.4492C10.085 12.6641 10.417 12.9033 10.7002 13.167C10.9834 13.4209 11.252 13.6846 11.5059 13.958C11.7598 14.2314 12.0088 14.5439 12.2529 14.8955C12.5068 15.2373 12.7852 15.6377 13.0879 16.0967L16.8232 22ZM4.06445 3.82129V10.6475H6.96484C7.50195 10.6475 7.99512 10.5645 8.44434 10.3984C8.90332 10.2324 9.29883 9.99316 9.63086 9.68066C9.96289 9.36816 10.2217 8.9873 10.4072 8.53809C10.5928 8.08887 10.6855 7.58594 10.6855 7.0293C10.6855 6.02344 10.3682 5.2373 9.7334 4.6709C9.09863 4.10449 8.18555 3.82129 6.99414 3.82129H4.06445ZM35.94 22H32.1168L30.2271 16.6533H21.9654L20.149 22H16.3404L24.2066 0.994141H28.1324L35.94 22ZM29.3043 13.8115L26.3893 5.43262C26.3014 5.15918 26.2086 4.71973 26.1109 4.11426H26.0523C25.9645 4.6709 25.8668 5.11035 25.7594 5.43262L22.8736 13.8115H29.3043ZM49.5783 3.95312H41.7268V10.2666H48.9631V13.2109H41.7268V22H38.2404V0.994141H49.5783V3.95312Z'
                fill='#FD3D57'
              />
              <path
                d='M67.3768 21.1211C65.7947 21.9414 63.827 22.3516 61.4734 22.3516C58.4266 22.3516 55.9852 21.3896 54.1492 19.4658C52.3133 17.542 51.3953 15.0176 51.3953 11.8926C51.3953 8.5332 52.4256 5.81836 54.4861 3.74805C56.5564 1.67773 59.1688 0.642578 62.323 0.642578C64.3543 0.642578 66.0389 0.930664 67.3768 1.50684V4.96387C65.9607 4.12402 64.3982 3.7041 62.6893 3.7041C60.4139 3.7041 58.5682 4.43164 57.1521 5.88672C55.7459 7.3418 55.0428 9.28516 55.0428 11.7168C55.0428 14.0312 55.702 15.877 57.0203 17.2539C58.3387 18.6211 60.0721 19.3047 62.2205 19.3047C64.2029 19.3047 65.9217 18.8359 67.3768 17.8984V21.1211ZM88.017 22H84.1937L82.3041 16.6533H74.0424L72.226 22H68.4174L76.2836 0.994141H80.2094L88.017 22ZM81.3812 13.8115L78.4662 5.43262C78.3783 5.15918 78.2855 4.71973 78.1879 4.11426H78.1293C78.0414 4.6709 77.9437 5.11035 77.8363 5.43262L74.9506 13.8115H81.3812ZM106.548 22H102.476L99.1211 16.375C98.8184 15.8574 98.5205 15.418 98.2275 15.0566C97.9443 14.6855 97.6514 14.3828 97.3486 14.1484C97.0557 13.9141 96.7334 13.7432 96.3818 13.6357C96.0303 13.5283 95.6348 13.4746 95.1953 13.4746H93.7891V22H90.3174V0.994141H97.2314C98.2178 0.994141 99.126 1.11133 99.9561 1.3457C100.786 1.58008 101.509 1.93652 102.124 2.41504C102.739 2.88379 103.218 3.47461 103.56 4.1875C103.911 4.89062 104.087 5.71582 104.087 6.66309C104.087 7.40527 103.975 8.08887 103.75 8.71387C103.535 9.3291 103.223 9.88086 102.812 10.3691C102.412 10.8477 101.924 11.2578 101.348 11.5996C100.781 11.9414 100.142 12.2051 99.4287 12.3906V12.4492C99.8096 12.6641 100.142 12.9033 100.425 13.167C100.708 13.4209 100.977 13.6846 101.23 13.958C101.484 14.2314 101.733 14.5439 101.978 14.8955C102.231 15.2373 102.51 15.6377 102.812 16.0967L106.548 22ZM93.7891 3.82129V10.6475H96.6895C97.2266 10.6475 97.7197 10.5645 98.1689 10.3984C98.6279 10.2324 99.0234 9.99316 99.3555 9.68066C99.6875 9.36816 99.9463 8.9873 100.132 8.53809C100.317 8.08887 100.41 7.58594 100.41 7.0293C100.41 6.02344 100.093 5.2373 99.458 4.6709C98.8232 4.10449 97.9102 3.82129 96.7188 3.82129H93.7891ZM121.182 3.95312H115.147V22H111.661V3.95312H105.64V0.994141H121.182V3.95312Z'
                fill='#2B2D42'
              />
            </svg>
          </Link>
          <div className='w-full max-w-xl relative flex'>
            <span className='absolute left-4 top-3 text-lg text-gray-400'>
              <i className='fa-solid fa-magnifying-glass' />
            </span>
            <input
              type='text'
              name='search'
              id='search'
              className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex'
              placeholder='search'
            />
            <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex'>
              Search
            </button>
          </div>
          <div className='flex items-center space-x-4'>
            <Link to='#' className='text-center text-gray-700 hover:text-primary transition relative'>
              <div className='text-2xl'>
                <i className='fa-solid fa-bag-shopping' />
              </div>
              <Link to={'/card'} className='text-xl leading-3'>
                Cart
              </Link>
              <div className='absolute bottom-[7px] left-[-12px] w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-x'>
                {quantityCard}
              </div>
            </Link>
            <Link to='#' className='text-center text-gray-700 hover:text-primary transition relative'>
              <div className='text-2xs'>
                <i className='fa-regular fa-user' />
              </div>
              <div className='text-xl leading-3 group relative'>
                Account
                <ul className='hidden z-20 group-hover:block absolute w-[200px] right-[0px] top-3 bg-black rounded text-white'>
                  <li>
                    <Link to={'/account'} className='block mb-2 hover:bg-slate-600 px-2 py-3'>
                      Tài khoản
                    </Link>
                  </li>
                  <li>
                    <Link to={'/forgotpassword'} className='block mb-2 hover:bg-slate-600 px-2 py-3'>
                      Quên mật khẩu
                    </Link>
                  </li>
                  <li>
                    <a onClick={logOut} className='block mb-2 hover:bg-slate-600 px-2 py-3' href='#'>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <nav className='bg-gray-800'>
        <div className='container flex'>
          <div>
            <span className='capitalize ml-2 text-white hidden'>All Categories</span>
            {/* dropdown */}
            <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
              <Link to='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                <img src='assets/images/icons/sofa.svg' alt='sofa' className='w-5 h-5 object-contain' />
                <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
              </Link>
              <Link to='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                <img src='assets/images/icons/terrace.svg' alt='terrace' className='w-5 h-5 object-contain' />
                <span className='ml-6 text-gray-600 text-sm'>Terarce</span>
              </Link>
              <Link to='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                <img src='assets/images/icons/bed.svg' alt='bed' className='w-5 h-5 object-contain' />
                <span className='ml-6 text-gray-600 text-sm'>Bed</span>
              </Link>
              <Link to='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                <img src='assets/images/icons/office.svg' alt='office' className='w-5 h-5 object-contain' />
                <span className='ml-6 text-gray-600 text-sm'>office</span>
              </Link>
              <Link to='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                <img src='assets/images/icons/outdoor-cafe.svg' alt='outdoor' className='w-5 h-5 object-contain' />
                <span className='ml-6 text-gray-600 text-sm'>Outdoor</span>
              </Link>
              <Link to='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                <img src='assets/images/icons/bed-2.svg' alt='Mattress' className='w-5 h-5 object-contain' />
                <span className='ml-6 text-gray-600 text-sm'>Mattress</span>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-between flex-grow md:pl-12 py-4'>
            <div className='flex items-center space-x-6 capitalize'>
              <Link to='/' className='text-gray-200 hover:text-white transition'>
                Home
              </Link>
              <Link to='pages/shop.html' className='text-gray-200 hover:text-white transition'>
                Shop
              </Link>
              <Link to='#' className='text-gray-200 hover:text-white transition'>
                About us
              </Link>
              <Link to='#' className='text-gray-200 hover:text-white transition'>
                Contact us
              </Link>
            </div>
            {usernameLocal ? (
              <span className='text-white'> Xin chào: {usernameLocal}</span>
            ) : (
              <div>
                <Link to='/register' className='text-gray-200 hover:text-white transition'>
                  Register
                </Link>
                <Link to='/login' className='text-gray-200 hover:text-white transition ml-3'>
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
