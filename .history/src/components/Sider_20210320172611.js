import NavBar from "./NavBar";
import { Layout,Menu } from 'antd';
export default function Sider({title}) {
   return (
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
             mode="inline" 
             className="menu"
             defaultSelectedKeys={['6']}>
        <Menu.Item key="1" className="menu-item">
          Tableware
        </Menu.Item>
        <Menu.Item key="2" className="menu-item">
          Cookware
        </Menu.Item>
        <Menu.Item key="3" className="menu-item">
          Home accessories
        </Menu.Item>
        <Menu.Item key="4" className="menu-item">
          Lighting
        </Menu.Item>
        <Menu.Item key="5" className="menu-item">
          Textile
        </Menu.Item>
        <Menu.Item key="6" className="menu-item">
          Furniture
        </Menu.Item>
      </Menu>
      </div>
    </Sider>
   );
}