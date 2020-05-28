import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { AppMenu } from "./shared/services/MenuProvider";
import "./App.scss";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
    selectedMenu: AppMenu[0],
    selectedSubMenu: AppMenu[0].children && AppMenu[0].children[0],
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuChangeHandler = ({ key }) => {
    const menu = AppMenu.filter((m) => m.id === key)[0];
    this.setState({
      selectedMenu: menu,
      selectedSubMenu: menu.children && menu.children[0],
    });
  };

  subMenuChangeHandler = ({ key }) => {
    this.setState((s) => ({
      selectedSubMenu: s.selectedMenu.children.filter((m) => m.id === key)[0],
    }));
  };

  render() {
    return (
      <Layout className="App">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.state.selectedMenu.id]}
            onSelect={this.menuChangeHandler}
          >
            {AppMenu.map((m) => (
              <Menu.Item key={m.id}>{m.name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{this.state.selectedMenu.name}</Breadcrumb.Item>
            {this.state.selectedSubMenu && (
              <Breadcrumb.Item>
                {this.state.selectedSubMenu.name}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            {this.state.selectedMenu && this.state.selectedMenu.children && (
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={[
                    this.state.selectedSubMenu && this.state.selectedSubMenu.id,
                  ]}
                  style={{ height: "100%" }}
                  onSelect={this.subMenuChangeHandler}
                >
                  {this.state.selectedMenu.children.map((m) => (
                    <Menu.Item key={m.id}>{m.name}</Menu.Item>
                  ))}
                </Menu>
              </Sider>
            )}
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content here
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2020 Created by Sumudu</Footer>
      </Layout>
    );
  }
}

export default App;
