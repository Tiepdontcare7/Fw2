import { useParams } from 'react-router-dom'
import { useProducts } from '../../apis/products'
import { useEffect, useState } from 'react'
import { InputNumber } from 'antd'
import { useAddToCard, useCard } from '../../apis/card'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setQuantityCard } from '../../redux/slices/cardSlice'

const DetailPage = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { data } = useProducts()
  const { mutate } = useAddToCard()
  const { data: dataCard } = useCard()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  const product = data?.docs.find((item: IProduct) => item?._id === id)
  const relatedProduct = data?.docs?.filter((item: IProduct) => item.categoryId == product.categoryId && item._id != id)

  const onChange = (value: number) => {
    setQuantity(value)
  }

  const userId = localStorage.getItem('userId')
  const findByUserId = dataCard?.data?.find((i: any) => i.userId == userId)
  useEffect(() => {
    dispatch(setQuantityCard(findByUserId?.products?.length))
  })

  const handleAddToCard = () => {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      toast('Bạn cần đăng nhập!')
    } else {
      mutate({
        userId: userId,
        productId: product._id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity
      })
    }
  }

  return (
    <div>
      {/* Product section*/}
      <section className='py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='row gx-4 gx-lg-5 align-items-center'>
            <div className='col-md-6'>
              <img
                className='card-img-top mb-5 mb-md-0 w-[400px] ml-28 hover:scale-105 cursor-pointer transition-all'
                src={product?.img}
                alt='...'
              />
            </div>
            <div className='col-md-6'>
              <div className='small mb-1'>SKU: BST-498</div>
              <h1 className='display-5 fw-bolder'>{product?.name}</h1>
              <div className='fs-5 mb-5'>
                <span className='text-decoration-line-through'>$45.00</span>
                <span className='ml-2'>${product?.price}</span>
              </div>
              <p className='lead'>${product?.desc}</p>
              <div className='d-flex'>
                <InputNumber min={1} max={50} defaultValue={1} onChange={onChange} />
                <button onClick={handleAddToCard} className='btn btn-outline-dark flex-shrink-0' type='button'>
                  <i className='bi-cart-fill me-1' />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related items section*/}
      <section className='py-5 bg-light'>
        <div className='container px-4 px-lg-5 mt-5'>
          <h2 className='fw-bolder mb-4'>Related products</h2>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4'>
            {relatedProduct?.map((item: any, index: number) => {
              return (
                <div key={index} className='col mb-5'>
                  <div className='card h-100'>
                    <div
                      className='badge bg-dark text-white position-absolute'
                      style={{ top: '0.5rem', right: '0.5rem' }}
                    >
                      Sale
                    </div>
                    <img className='card-img-top' src={item?.img} alt='...' />
                    <div className='card-body p-4'>
                      <div className='text-center'>
                        <h5 className='fw-bolder'>${item?.name}</h5>
                        <span className='text-muted text-decoration-line-through'>$50.00</span>
                        $${item?.price}
                      </div>
                    </div>
                    <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                      <div className='text-center'>
                        <a className='btn btn-outline-dark mt-auto' href='#'>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailPage
