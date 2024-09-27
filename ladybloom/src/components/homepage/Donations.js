import React,{useState} from 'react'
import { DonationsWrapper } from './Donations.style';
import Axios from "axios";
import { API_BASE_URL } from '../../constants/constants';

const Donations = () => {
  const [fullname, setFullName] = useState()
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [transcode, setTranscode] = useState();
  const [amount, setAmount] = useState();


  const handleDonations = async (e) => {
    try {
      await Axios.post(`${API_BASE_URL}/auth/donations`, {
        fullname,
        email,
        phone,
        date,
        transcode,
        amount
      });
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <DonationsWrapper>
        <h2 id="donations-head">Donations</h2>
        <div className="parent-donations">
          <div className="right-donations">
            <form action="" onSubmit={handleDonations}>
              <div className="input-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  id="fullname"
                  placeholder="Enter Full Name"
                  className="contactFormInput"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  valuue={email}
                  id="email"
                  placeholder="Enter Email"
                  className="contactFormInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone No. used to pay"
                  className="contactFormInput"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="date">Date & Time</label>
                <input
                  type="datetime-local"
                  name="date"
                  value={date}
                  id="date"
                  placeholder="Date & Time of payment"
                  className="contactFormInput"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="code">Mpesa Transaction Code</label>
                <input
                  type="text"
                  name="code"
                  value={transcode}
                  id="code"
                  placeholder="Enter transaction code"
                  className="contactFormInput"
                  onChange={(e) => setTranscode(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="amount">Amount Donated</label>
                <input
                  type="text"
                  name="amount"
                  value={amount}
                  id="amount"
                  placeholder="Enter amount donated"
                  className="contactFormInput"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className="left-donations">
            <div className="frozen-glass">
              <h3>For donations</h3>
              <div className="mpesa">
                <img src="./img/mpesa2.png" alt="" />
              </div>
              <div className="paybill">
                <h2>Paybill</h2>
                <div className="paybill-no">
                  <div className="num">
                    <p>3</p>
                  </div>
                  <div className="num">
                    <p>4</p>
                  </div>
                  <div className="num">
                    <p>3</p>
                  </div>
                  <div className="num">
                    <p>4</p>
                  </div>
                  <div className="num">
                    <p>3</p>
                  </div>
                  <div className="num">
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className="acc">
                <h2>Account Number:</h2>
                <h4>Full Name</h4>
              </div>
            </div>
          </div>
        </div>
      </DonationsWrapper>
    );
}

export default Donations
