import React,{useState} from 'react'
import ProtectedHeader from './ProtectedHeader.style';
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import Modal from 'react-modal'
import { PackagesBody, PackagesWrapper } from './Packages.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: '1rem',
  },
};

const Packages = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [fullname, setFullName] = useState()
  const [email, setEmail] = useState()
  const [location, setLocation] = useState()
  const [packtype, setPackType] = useState()
  const [info, setInfo] = useState()
  const [formErrors, setFormErrors] = useState({
    email: "",
  });
  const [message, setMessage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "rgb(241, 148, 138)";
  }

  function closeModal() {
    setIsOpen(false);
  }

    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      let error;
      switch (name) {
        case "email":
          error = emailRegex.test(value) ? "" : "invalid email address";
          break;
        default:
          break;
      }
      setFormErrors({ [name]: error });
    };

    const submitOrder = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:5500/auth/order", {
        fullname,
        email,
        location,
        packtype
      }).then(
        (res) => {
          if (res.status === 201) {
            setIsOpen(false);
            setFullName();
            setEmail();
            setLocation();
            setPackType();
          }
        },
        (err) => {
          setMessage(err.response.data.message);
        }
      );
    };

    return (
      <PackagesWrapper>
        <Header />
        <ProtectedHeader
          protectedtitle={"Packages"}
          protectedHeadLink={"Packages"}
        ></ProtectedHeader>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            className="modaltop"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FontAwesomeIcon
              onClick={closeModal}
              id="modalclose"
              icon="times"
              style={{
                alignSelf: "flex-end",
              }}
            />
            <h2 id="modalHeader" ref={(_subtitle) => (subtitle = _subtitle)}>
              Request for this Package
            </h2>
          </div>
          <form style={{ margin: "0 4rem 4rem 4rem" }}>
            <div class="form-group">
              <label for="exampleInputEmail1" style={{ fontFamily: "Poppins" }}>
                Key in all the fields to get this package.
              </label>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Package Type"
                value={packtype}
                style={{
                  width: "23.9rem",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
                onChange={(e) => setPackType(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your Full Name"
                value={fullname}
                style={{
                  width: "23.9rem",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class={formErrors.email ? "error" : "form-control"}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={email}
                style={{
                  width: "23.9rem",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value);
                }}
              />
              {formErrors.email && (
                <small className="danger-error">{formErrors.email}</small>
              )}
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your location"
                value={location}
                style={{
                  width: "23.9rem",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {message && (
              <small
                className="danger-error"
                style={{
                  color: "#e74c3c",
                  fontSize: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                {message}
              </small>
            )}
            <br />
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                backgroundColor: "rgb(241, 148, 138)",
                border: "none",
              }}
              onClick={submitOrder}
            >
              Request for Package
            </button>
          </form>
        </Modal>
        <PackagesBody>
          <div className="row">
            <div className="col-md-6">
              <div className="package-left">
                <img src="./img/mhm24.jpg" alt="" />
              </div>
              <div className="package-right">
                <h5>Sanitary Pads</h5>
                <p>
                  Grab the string and pull it tight from left to right and top
                  to bottom, which widens the base of the tampon and provides
                  protection for your finger.
                </p>
                <button onClick={openModal}>Request for Package</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="package-left">
                <img src="./img/sshow3.jpg" alt="" />
              </div>
              <div className="package-right">
                <h5>Tampon</h5>
                <p>
                  Grab the string and pull it tight from left to right and top
                  to bottom, which widens the base of the tampon and provides
                  protection for your finger.
                </p>
                <button>Request for Package</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="package-left">
                <img src="./img/mhm23.jpg" alt="" />
              </div>
              <div className="package-right">
                <h5>Ruby Cups</h5>
                <p>
                  Grab the string and pull it tight from left to right and top
                  to bottom, which widens the base of the tampon and provides
                  protection for your finger.
                </p>
                <button>Request for Package</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="package-left">
                <img src="./img/mhm22.jpg" alt="" />
              </div>
              <div className="package-right">
                <h5>Panty Liners</h5>
                <p>
                  Grab the string and pull it tight from left to right and top
                  to bottom, which widens the base of the tampon and provides
                  protection for your finger.
                </p>
                <button>Request for Package</button>
              </div>
            </div>
          </div>
        </PackagesBody>
        <Footer />
      </PackagesWrapper>
    );
}

export default Packages
