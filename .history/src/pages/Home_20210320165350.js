import { Layout,Menu } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

const { Header, Content, Footer,Sider} = Layout;




function Home() {
  return (
    <Layout className="container main-layout">
      <Sider
      className="layout-sider"
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
        
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" >
          nav 1
        </Menu.Item>
        <Menu.Item key="2" >
          nav 2
        </Menu.Item>
        <Menu.Item key="3" >
          nav 3
        </Menu.Item>
        <Menu.Item key="4" >
          nav 4
        </Menu.Item>
      </Menu>
      
    </Sider>
    <Layout>
      <Header className="layout-header">
        <AppHeader title="NORDIC NEST Shopping Cart"/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
 
  );
}

export default Home;
