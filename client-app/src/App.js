import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { AppMenu } from "./shared/services/MenuProvider";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.scss";
import SchoolSearchPage from "./schools/containers/SchoolSearchPage";
import RegisterSchoolPage from "./schools/containers/RegisterSchoolPage";
import EventsPage from "./events/containers/EventsPage";
import PaymentsPage from "./payments/containers/PaymentsPage";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
    subMenu: [],
    selectedMenu: {},
    selectedSubMenu: {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { history } = nextProps;

    let path = history.location.pathname;

    const [item] = AppMenu.filter((m) => m.route.includes(path));

    if (item) {
      if (prevState.selectedMenu.id !== item.id) {
        if (!item.parentId) {
          const allSub = AppMenu.filter((m) => m.parentId === item.id);

          return {
            selectedMenu: item,
            subMenu: allSub,
            selectedSubMenu: allSub.length && allSub[0],
          };
        } else {
          return {
            selectedSubMenu: item,
            selectedMenu: AppMenu.filter((m) => m.id === item.parentId)[0],
            subMenu: AppMenu.filter((m) => m.parentId === item.parentId),
          };
        }
      }
    }
    return null;
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuChangeHandler = ({ key }) => {
    const { history } = this.props;
    const menu = AppMenu.filter((m) => m.id === key)[0];
    if (menu && menu.route) {
      history.push(menu.route[0]);
    }
  };

  render() {
    return (
      <Layout className="App">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[this.state.selectedMenu.id]}
            onSelect={this.menuChangeHandler}
          >
            {AppMenu.filter((m) => !m.parentId).map((m) => (
              <Menu.Item key={m.id}>{m.name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{this.state.selectedMenu.name}</Breadcrumb.Item>
            {this.state.selectedSubMenu ? (
              <Breadcrumb.Item>
                {this.state.selectedSubMenu.name}
              </Breadcrumb.Item>
            ) : null}
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            {this.state.subMenu.length ? (
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  selectedKeys={[
                    this.state.selectedSubMenu && this.state.selectedSubMenu.id,
                  ]}
                  style={{ height: "100%" }}
                  onSelect={this.menuChangeHandler}
                >
                  {this.state.subMenu.map((m) => (
                    <Menu.Item key={m.id}>{m.name}</Menu.Item>
                  ))}
                </Menu>
              </Sider>
            ) : null}
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Route path="/schools/search/:isRefetch">
                  <SchoolSearchPage />
                </Route>
                <Route path="/schools/search">
                  <SchoolSearchPage />
                </Route>
                <Route path="/schools/register">
                  <RegisterSchoolPage />
                </Route>
                <Route path="/schools">
                  <SchoolSearchPage />
                </Route>
                <Route path="/events">
                  <EventsPage />
                </Route>
                <Route path="/payments">
                  <PaymentsPage />
                </Route>
                <Route path="/">
                  <SchoolSearchPage />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
