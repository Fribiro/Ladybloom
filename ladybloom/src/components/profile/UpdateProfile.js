import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { faCity } from "@fortawesome/free-solid-svg-icons";

const UpdateProfile = () => {
  const [message, setMessage] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [nationalId, setnationalId] = useState("");
  const [profession, setprofession] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [county, setcounty] = useState("");
  const [town, settown] = useState("");
  const [address, setaddress] = useState("");
  const [postalcode, setpostalCode] = useState("");
  const [redirect, setRedirect] = useState("");

  const updateProfile = () => {
    let data = {};
    Axios.put("http://localhost:5500/update", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      nationalId: nationalId,
      profession: profession,
      street: street,
      location: city,
      county: county,
      town: town,
      address: address,
      postalCode: postalcode,
    }).then(
      (res) => {
        if (res.status === 201) {
          setRedirect("/");
        }
      },
      (e) => {
        setMessage(e.response.data.err);
      }
    );
  };

  return (
    <div>
      <div class="tab-pane active" id="home">
        <h4>Personal Details</h4>
        <div
          class="form"
          id="registrationForm"
          style={{ display: "grid", gridTemplateColumns: "50%, 50%" }}
        >
          <div className="editFields" style={{ gridColumn: "1", gridRow: "1" }}>
            <label for="first_name" style={{ fontWeight: "bold" }}>
              First name
            </label>
            <br />
            <input
              type="text"
              className=""
              name="firstName"
              id="first_name"
              placeholder="First name"
              title="Enter your first name"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "1" }}>
            <label for="Last_name">Last name</label>
            <br />
            <input
              type="text"
              className=""
              name="lastName"
              id="Last_name"
              placeholder="Last name"
              title="Enter your last name"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "1", gridRow: "2" }}>
            <label for="email">Email</label>
            <br />
            <input
              type="email"
              className=""
              name="email"
              id="email"
              placeholder="Email"
              title="Enter your email"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "2" }}>
            <label for="phone">Phone</label>
            <br />
            <input
              type="text"
              className=""
              name="phone"
              id="phone"
              placeholder="Phone"
              title="Enter phone"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "1", gridRow: "3" }}>
            <label for="gender">Gender</label>
            <br />
            <input
              type="text"
              className=""
              name="gender"
              id="gender"
              placeholder="Gender"
              title="Enter your first name"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "3" }}>
            <label for="nationalId">National ID</label>
            <br />
            <input
              type="text"
              className=""
              name="nationalId"
              id="nationalId"
              placeholder="National ID"
              title="Enter National ID"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "1", gridRow: "4" }}>
            <label for="profession">Profession</label>
            <br />
            <input
              type="text"
              className=""
              name="profession"
              id="profession"
              placeholder="Profession"
              title="Enter your profession"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "5" }}>
            <button
              className="profile-edit-btn"
              onClick={updateProfile}
              style={{ marginLeft: "200px !important", marginTop: "20px" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div class="tab-pane active" id="home" style={{ marginTop: "40px" }}>
        <h4>Address Details</h4>
        <div
          class="form"
          id="registrationForm"
          style={{ display: "grid", gridTemplateColumns: "50%, 50%" }}
        >
          <div className="editFields" style={{ gridColumn: "1", gridRow: "1" }}>
            <label for="street" style={{ fontWeight: "bold" }}>
              Street
            </label>
            <br />
            <input
              type="text"
              className=""
              name="street"
              id="street"
              placeholder="Street"
              title="Enter your street name"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "1" }}>
            <label for="town">Town</label>
            <br />
            <input
              type="text"
              className=""
              name="town"
              id="town"
              placeholder="town"
              title="Enter your town"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "1", gridRow: "2" }}>
            <label for="city">City</label>
            <br />
            <input
              type="text"
              className=""
              name="city"
              id="city"
              placeholder="city"
              title="Enter your city"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "2" }}>
            <label for="address">Address</label>
            <br />
            <input
              type="text"
              className=""
              name="address"
              id="address"
              placeholder="address"
              title="Enter your address"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "1", gridRow: "3" }}>
            <label for="postal_code">Postal code</label>
            <br />
            <input
              type="text"
              className=""
              name="postalCode"
              id="postal_code"
              placeholder="postal_code"
              title="Enter your postal code"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "3" }}>
            <label for="county">County</label>
            <br />
            <input
              type="text"
              className=""
              name="county"
              id="county"
              placeholder="county"
              title="Enter your county"
            />
          </div>
          <div className="editFields" style={{ gridColumn: "2", gridRow: "5" }}>
            <button
              className="profile-edit-btn"
              onClick={updateProfile}
              style={{ marginLeft: "200px !important", marginTop: "20px" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
