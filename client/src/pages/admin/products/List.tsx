import { Image, Space, Table } from 'antd'
import { useDeleteProduct, useProducts } from '../../../apis/products'
import { Link } from 'react-router-dom'
import { useCategory } from '../../../apis/category'
import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const { Column } = Table

const AdminProducts = () => {
  const [current, setCurrent] = useState(10)
  const { data, refetch } = useProducts()
  const { data: dataC } = useCategory()
  const { mutate } = useDeleteProduct()

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page)
    // refetch({ page })
  }

  const handleDelete = (id: any) => {
    if (!confirm('Bạn có muốn xóa sản phẩm?')) return
    mutate(id)
  }

  // const { searchText } = useSelector((state: any) => state.search)
  // const [dataProduct, setFilteredData] = useState(data)
  // useEffect(() => {
  //   const dataF = data?.docs?.filter((i: any) => i.name.toLowerCase().includes(searchText.toLowerCase()))
  //   setFilteredData(dataF)
  // }, [data, searchText])

  return (
    <>
      <Table pagination={false} dataSource={data?.docs?.map((record: any) => ({ ...record, key: record._id }))}>
        <Column title='Name' dataIndex='name' key='name' />
        <Column title='Price' dataIndex='price' key='price' />
        <Column title='Desc' dataIndex='desc' key='desc' />
        <Column title='Image' key='img' render={(record) => <Image src={record.img} alt={record.name} width={100} />} />
        <Column title='Quantity' dataIndex='quantity' />
        <Column
          title='Category'
          dataIndex='categoryId'
          render={(categoryId) => {
            const category = dataC?.find((c: any) => c._id === categoryId)
            return category ? category.name : 'N/A'
          }}
        />
        <Column
          title='Action'
          render={(record) => (
            <Space size='middle'>
              <Link to={`/admin/products/update/${record._id}`} className='btn btn-primary'>
                Update
              </Link>
              <a className='btn btn-danger' onClick={() => handleDelete(record._id)}>
                Delete
              </a>
            </Space>
          )}
        />
      </Table>
      <Pagination current={current} onChange={onChange} total={50} />
    </>
  )
}

export default AdminProducts
