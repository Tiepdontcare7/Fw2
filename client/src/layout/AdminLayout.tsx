import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { DashboardOutlined, AliwangwangOutlined } from '@ant-design/icons'
import HeaderAdmin from '../components/HeaderAdmin'
import ListOrder from '../pages/admin/orders/List'

const { Content, Footer, Sider } = Layout

const menuItem = [
  { label: 'Dashboard', key: '/dashboard', icon: <DashboardOutlined /> },

  {
    label: 'Products',
    key: 'sub1',
    icon: <AliwangwangOutlined />,
    children: [
      { label: 'List product', key: '/products', icon: <DashboardOutlined /> },
      { label: 'Add product', key: '/products/add', icon: <DashboardOutlined /> }
    ]
  },
  {
    label: 'Categories',
    key: 'sub2',
    icon: <AliwangwangOutlined />,
    children: [
      { label: 'List category', key: '/category', icon: <DashboardOutlined /> },
      { label: 'Add category', key: '/category/add', icon: <DashboardOutlined /> }
    ]
  },
  {
    label: 'Order',
    key: 'sub3',
    icon: <AliwangwangOutlined />,
    children: [{ label: 'List order', key: '/order', icon: <ListOrder /> }]
  }
]

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const next = useNavigate()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const handleClick = ({ key }: { key: string }) => {
    next('/admin' + key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={menuItem} onClick={handleClick} />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <HeaderAdmin />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb items={[{ title: 'admin' }, { title: 'products' }]} />
          <div style={{ padding: '0 20px', minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
