import React, {useState, useEffect} from 'react'
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

import Swal from "sweetalert2";

//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "jquery/dist/jquery.min.js";

import $ from "jquery";
import { API_BASE_URL } from '../../../ladybloom/src/constants/constants';
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
  },
};

const Beneficiaries = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
    const [Id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(0);
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [benf, setBenf] = useState([]);
    const [suspend, setSuspend] = useState(false)
    const [enable, setEnable] = useState(false)
    const { id } = useParams();

    useEffect(() => {
      Axios.get(`${API_BASE_URL}/singlebeneficiary`, {
        headers: {
          id,
        },
      }).then((res) => {;
        setBenf(res.data);
      });
    }, []);

    const beneficiary = benf.length ? users[0] : null;

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

    const addUsers = () => {
      Axios.post(`${API_BASE_URL}/create`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      }).then(() => {
        setUsers([
          ...users,
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
          },
        ]);
      });
    };

    const getUsers = () => {
      Axios.get(`${API_BASE_URL}/users`).then((res) => {;
        setUsers(res.data);
      });
    };
    const getUser = (id) => {
      Axios.get(`${API_BASE_URL}/singlebeneficiary`, {
        headers: {
          id,
        },
      }).then((res) => {
        setBenf(res.data[0]);
        $("#myModal").modal("show");
      });
    };
    useEffect(() => {
       Axios.get(`${API_BASE_URL}/beneficiary`).then((res) => {
         console.log(res.data);
         setUsers(res.data);
         //console.log(users);
       });
    }, []);

    const suspendBenf = (id) => {
      Axios.put(`${API_BASE_URL}/suspendbenf`, {
        id: id
      }).then((res) => {
        setSuspend(true)
        console.log(suspend)
      });
    } 

    const enableBenf = (id) => {
      Axios.put(`${API_BASE_URL}/enablebenf`, {
        id: id,
      }).then((res) => {
        setEnable(true);
      });
    };

    const deleteUsers = (id) => {
      Axios.delete(`${API_BASE_URL}/beneficiarydel`, {
        headers: {
          id,
        },
      }).then((res) => {
        setUsers(
          users.filter((val) => {
            return val.id !== id;
          })
        );
        Swal.fire({
          title: "User " + id + " has been deleted.",
          text: "Record deleted successfully",
          type: "success",
        });
      });
    };

    return (
      <div className="main-content">
        <div className="maincontainer">
          <div className="container mb-5 mt-5 text-left">
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.firstName}</td>
                      <td>{val.lastName}</td>
                      <td>{val.email}</td>
                      <td>
                        {suspend === false ? (
                          <Tooltip title="Suspend user" placement="top">
                            <IconButton
                              htmlFor="imageInput"
                              onClick={() => {
                                suspendBenf(val.id);
                              }}
                            >
                              <VisibilityIcon
                                style={{ fontSize: 16, color: "#3DB2C7" }}
                              />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip title="Enable user" placement="top">
                            <IconButton
                              htmlFor="imageInput"
                              onClick={() => {
                                enableBenf(val.id);
                              }}
                            >
                              <VisibilityOffIcon
                                style={{ fontSize: 16, color: "#3DB2C7" }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}

                        <Tooltip title="Delete user" placement="top">
                          <IconButton
                            htmlFor="imageInput"
                            onClick={() => {
                              deleteUsers(val.id);
                            }}
                          >
                            <DeleteIcon
                              style={{ fontSize: 16, color: "#3DB2C7" }}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {beneficiary && (
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4
                        class="modal-title align-center"
                        ref={(_subtitle) => (subtitle = _subtitle)}
                      >
                        User : {beneficiary.firstName}
                      </h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>

                    <div class="modal-body text-center">
                      <table class="table table-hover table-bordered">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{beneficiary.id}</td>
                            <td>{beneficiary.firstName}</td>
                            <td>{beneficiary.laststName}</td>
                            <td>{beneficiary.email}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
}

export default Beneficiaries
