import { Layout,Menu } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Sider from "../components/Sider"
const { Header, Content, Footer,Sider} = Layout;




function Home() {
  return (
    <Layout className="container main-layout">
      <Sider>
      
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
