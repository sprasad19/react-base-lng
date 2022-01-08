import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./container/Home/Home";
import Error from "./components/Error/Error";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectDevice } from "./redux/redux/device/selectors";
import { connect } from "react-redux";
import Translate from "./components/Translate";
import About from "./container/About/About";
import ModalManager from "./components/Modals/ModalManager";
import NavBar from './components/UI/TopBarNav';
import SideBar from './components/UI/SideBarNav';
function App(props) {
  return (
    <div className="App">
      <Helmet
        titleTemplate={`%s - ${props.t("common.appName")}`}
        defaultTitle={props.t("common.appName")}
      >
        <meta name="description" content={props.t("common.appDescription")} />
      </Helmet>
      <SideBar />
      <div>
      <Routes>
        <Route path="/" exact element={<Home {...props} />} />
        <Route path="/about" exact element={<About {...props} />} />
        <Route path="*" element={<Error errorTitle="404" {...props} />} />
      </Routes>
      <ModalManager />
      </div>
      
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  device: makeSelectDevice(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(Translate, withConnect)(App);
