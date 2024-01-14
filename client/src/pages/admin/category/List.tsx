import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useCategory, useDeleteCategory } from '../../../apis/category'

const AdminCategories = () => {
  const { data } = useCategory()
  const { mutate } = useDeleteCategory()

  const handleDelete = (id: any) => {
    if (!confirm('Are you sure you want to delete?')) return
    mutate(id)
  }
  const { searchText } = useSelector((state: any) => state.search)

  const [dataCategory, setFilteredData] = useState(data)
  console.log(dataCategory)

  useEffect(() => {
    const dataF = data?.filter((i: any) => i.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredData(dataF)
  }, [searchText])

  return (
    <div className='overflow-x-auto rounded-lg border border-gray-200'>
      <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
        <thead className='ltr:text-left rtl:text-right'>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>#</th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Name</th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Slug</th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {data?.map((item: any, i: any) => {
            return (
              <tr key={i}>
                <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>{i + 1}</td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>{item?.name}</td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>{item?.slug}</td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  <Link to={`/admin/category/update/${item?._id}`} className='btn btn-primary'>
                    Update
                  </Link>
                  <button onClick={() => handleDelete(item?._id)} className='btn btn-danger ml-1'>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdminCategories
