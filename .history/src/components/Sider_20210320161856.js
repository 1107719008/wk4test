import NavBar from "./NavBar";

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
      
  </Sider>
   );
}