import React, { Fragment, useState } from "react";
import { useCookies } from "react-cookie";
function Signup(params) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [Data, setData] = useState({});
  const [Error, setError] = useState(null);
  console.log(cookies);
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const body = Data;

      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.status == 200 && response.ok) {
        const data = await response.json();
        setCookie("Email", data.email);
        setCookie("AuthToken", data.token);
        setError(null);
        window.location.reload();
      } else if (response.status == 400) {
        setError("Email already in Use, Try Logging in");
      } else if (response.status == 500) {
        setError("Enter all field data properly");
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Fragment>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-1 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className=" my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                SIGN
                <span style={{ color: "hsl(218, 81%, 75%)" }}>UP</span>
              </h1>
            </div>
            <div className=" col-lg-6 mb-5 mb-lg-0 position-relative ">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>
              <div className="card bg-glass my-lg-5 hey">
                <div className="card-body px-4 py-5 px-md-5">
                  {/* Form Begin*/}
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            value={Data.fname}
                            onChange={(e) => {
                              setData({
                                ...Data,
                                fname: e.target.value,
                              });
                            }}
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                            value={Data.lname}
                            onChange={(e) => {
                              setData({
                                ...Data,
                                lname: e.target.value,
                              });
                            }}
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-7 form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                          value={Data.email}
                          onChange={(e) => {
                            setData({
                              ...Data,
                              email: e.target.value,
                            });
                          }}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>
                      <div className="col-md-5 mb-4">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="form3Example4"
                            className="form-control"
                            value={Data.phno}
                            onChange={(e) => {
                              setData({
                                ...Data,
                                phno: e.target.value,
                              });
                            }}
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example6"
                        className="form-control"
                        value={Data.password}
                        onChange={(e) => {
                          setData({
                            ...Data,
                            password: e.target.value,
                          });
                        }}
                      />
                      <label className="form-label" htmlFor="form3Example6">
                        Password
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-sm-7 login">
                        <button type="submit" className="btn button-signup">
                          <span>Sign up</span>
                        </button>
                      </div>
                      <div className="col-md-5 col-lg-5 col-sm-4 login">
                        <a
                          className="login cursor-pointer"
                          onClick={() => {
                            params.PUserPresent(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <span>Login instead</span>
                        </a>
                      </div>
                    </div>
                    <div style={{ marginTop: "30px", marginBottom: 0 }}>
                      {Error && <p style={{ color: "red" }}>{Error}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Signup;
