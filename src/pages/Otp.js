import {React, useState} from 'react';
import  "../components/Auth.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {
const [verificationCode, setVerificationCode] = useState({
  code: 'F5C41',
});

    const verifyEmail = async () => {
      const urlencoded = new URLSearchParams();
      urlencoded.append('code', verificationCode.code);

      const requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow',
      };

      const verifyEmailResponse = await fetch(
        'https://falconlite.com/v1/api/verify-email',
        requestOptions
      );
      const result = await verifyEmailResponse.text();
      console.log(result);
      toast.success("Email confirmed successfully")
    };
  return (
    <>
      <div className="container">
        <div className="form-main">
          <h2>Please verify your Email</h2>
          <p>Kindly Input the code sent to your Email</p>
          <form onSubmit={verifyEmail}>
            <div className="form-group">
              <label id="number">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="****"
                required
                onChange={(e) => setVerificationCode(e.target.value)}
              />

              <button id="signUp" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
