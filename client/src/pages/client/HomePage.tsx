import { useAddToCard, useCard } from '../../apis/card'
import { useProducts } from '../../apis/products'
import Banner from '../../components/Banner'
import Features from '../../components/Features'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setQuantityCard } from '../../redux/slices/cardSlice'
import { toast } from 'react-toastify'

const HomePage = () => {
  const dispatch = useDispatch()
  const { data } = useProducts()
  const { data: dataCard } = useCard()
  const { mutate } = useAddToCard()

  const userId = localStorage.getItem('userId')
  const findByUserId = dataCard?.data?.find((i: any) => i.userId == userId)
  useEffect(() => {
    dispatch(setQuantityCard(findByUserId?.products?.length))
  })

  const handleAddToCard = (id: any) => {
    const product = data?.docs?.find((item: any) => item._id === id)

    if (!userId) {
      toast('Bạn cần đăng nhập!')
    } else {
      mutate({
        userId: userId,
        productId: product._id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: 1
      })
    }
  }

  return (
    <>
      <Banner />
      <Features />
      <div className='container pb-16 mt-16'>
        <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>recomended for you</h2>
        <div className='grid grid-cols-4 gap-6'>
          {data?.docs.map((item: IProduct, i: any) => {
            return (
              <div key={i} className='bg-white shadow rounded overflow-hidden'>
                <Link to={`/detail/${item?._id}`} className='relative'>
                  <div>
                    <img src={item?.img} alt='product 1' className='w-full h-[200px] object-cover' />
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
                    <a
                      href='#'
                      className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                      title='view product'
                    >
                      <i className='fa-solid fa-magnifying-glass' />
                    </a>
                    <a
                      href='#'
                      className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                      title='add to wishlist'
                    >
                      <i className='fa-solid fa-heart' />
                    </a>
                  </div>
                </Link>
                <div className='pt-4 pb-3 px-4'>
                  <a href='#'>
                    <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                      {item?.name}
                    </h4>
                  </a>
                  <div className='flex items-baseline mb-1 space-x-2'>
                    <p className='text-xl text-primary font-semibold'>${item?.price}</p>
                    <p className='text-sm text-gray-400 line-through'>$55.90</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCard(item?._id)}
                  className='hover:opacity-90 w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary'
                >
                  Add to cart
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
