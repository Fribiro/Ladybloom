import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneAlt,
  faUsers,
  faHandshake,
  faHandsHelping,
  faHistory,
  faGift,
  faLandmark,
  faUser,
  faEnvelope,
  faFilePdf,
  faBalanceScale,
  faShieldAlt,
  faClipboardList,
  faChevronUp,
  faMapMarker,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import ScrollUp from "./components/ScrollUp";
import BeatLoader from "react-spinners/BeatLoader";
import MetaDecorator from "./components/utils/Metadecorator";
import Login from "./components/userauth/Login";
import Signup from "./components/userauth/Signup";
import { useDispatch } from "react-redux";
import { userSet } from "./state/user";
import LocalAuthority from "./components/protected/LocalAuthority";
import Packages from './components/protected/Packages'
import Mentors from './components/protected/Mentors'
import MentorPage from "./components/profile/MentorPage";
import AdministratorPage from './components/profile/AdministratorPage'
import Beneficiary from "./components/profile/Beneficiary";
import BeneficiaryPages from "./components/protected/BeneficiaryPages";
import Learn from "./components/protected/Learn";

library.add(
  fab,
  faBars,
  faPhoneAlt,
  faPaperPlane,
  faMapMarkerAlt,
  faUsers,
  faHandshake,
  faHandsHelping,
  faHistory,
  faGift,
  faLandmark,
  faUser,
  faEnvelope,
  faFilePdf,
  faBalanceScale,
  faShieldAlt,
  faClipboardList,
  faChevronUp,
  faMapMarker,
  faTimes
);

export const UserContext = React.createContext([]);

function App(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  //get a new accesstoken if a refreshtoken exists
  useEffect(() => {
    const checkRefreshToken = () => {
      Axios.post("http://localhost:5500/auth/refresh_token", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        //  setUser({
        //    accesstoken: res.data.accesstoken,
        //  });
        dispatch(userSet(res.data.accesstoken));

        setLoading(false);
      });
    };
  }, []);

  const logoutCallback = async () => {
    Axios.post("http://localhost:5500/logout", {
      method: "POST",
      credentials: "include",
    });
    //create user from context
    setUser({});
    setRedirect("/");
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Router>
          <MetaDecorator
            title="Ladybloom | Homepage"
            description=""
          ></MetaDecorator>
          <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/mentors" component={Mentors} />
            <Route exact path="/local-authority" component={LocalAuthority} />
            <Route exact path="/menstrual-packages" component={Packages} />

            <Route
              exact
              path="/administrator-page"
              component={AdministratorPage}
            />
            <Route exact path="/beneficiary" component={Beneficiary} />
            <Route
              exact
              path="/beneficiarycards"
              component={BeneficiaryPages}
            />
            <Route exact path="/educational-content" component={Learn} />
            <Route exact path="/mentor/:id" component={MentorPage} />
          </Switch>
        </Router>
        <ScrollUp showBelow={1500} />
      </div>
    </UserContext.Provider>
  );
}

export default App;

{/* <div
  className="loader"
  style={{
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    verticalAlign: "middle",
    height: "100vh",
    flexDirection: "column",
  }}
>
  <div className="ladybLoaderLogo" style={{ width: "14rem", height: "4rem" }}>
    {/* <img
              src="./img/logo.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            /> */}
//     <h1
//       style={{
//         fontFamily: "Abril Fatface",
//         color: "rgb(241, 148, 138)",
//       }}
//     >
//       Ladybloom
//     </h1>
//   </div>
//   <BeatLoader color={"rgb(241, 148, 138 )"}></BeatLoader>
// </div>; */}