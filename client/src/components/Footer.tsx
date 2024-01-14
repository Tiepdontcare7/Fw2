const Footer = () => {
  return (
    <>
      <footer className='bg-white pt-16 pb-12 border-t border-gray-100'>
        <div className='container grid grid-cols-1 '>
          <div className='col-span-1 space-y-4'>
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
            <div className='mr-2'>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?</p>
            </div>
            <div className='flex space-x-5'>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <i className='fa-brands fa-facebook-square' />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <i className='fa-brands fa-instagram-square' />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <i className='fa-brands fa-twitter-square' />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <i className='fa-brands fa-github-square' />
              </a>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 gap-4 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>Solutions</h3>
                <div className='mt-4 space-y-4'>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Marketing
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Analitycs
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Commerce
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>Support</h3>
                <div className='mt-4 space-y-4'>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Pricing
                  </a>
                  {/* <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> */}
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Guides
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>Solutions</h3>
                <div className='mt-4 space-y-4'>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Marketing
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Analitycs
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Commerce
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>Support</h3>
                <div className='mt-4 space-y-4'>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Pricing
                  </a>
                  {/* <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> */}
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    Guides
                  </a>
                  <a href='#' className='text-base text-gray-500 hover:text-gray-900 block'>
                    API Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='bg-gray-800 py-4'>
        <div className='container flex items-center justify-between'>
          <p className='text-white'>© TailCommerce - All Right Reserved</p>
          <div>
            <img src='assets/images/methods.png' alt='methods' className='h-5' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer