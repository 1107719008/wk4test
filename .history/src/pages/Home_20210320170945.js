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
      <div className="ham">
      <Menu theme="dark"
             mode="vertical" 
             className="menu"
             defaultSelectedKeys={['6']}>
        <Menu.Item key="1" >
          Tableware
        </Menu.Item>
        <Menu.Item key="2" >
          Cookware
        </Menu.Item>
        <Menu.Item key="3" >
          Home accessories
        </Menu.Item>
        <Menu.Item key="4" >
          Lighting
        </Menu.Item>
        <Menu.Item key="5" >
          Textile
        </Menu.Item>
        <Menu.Item key="6" >
          Furniture
        </Menu.Item>
      </Menu>
      </div>
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
