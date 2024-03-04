import React, { Fragment, useState } from "react";
import { useCookies } from "react-cookie";
function Login(params) {
  const [Data, setData] = useState({});
  const [Error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const body = Data;
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.status == 200 && response.ok) {
        const data = await response.json();
        setCookie("Email", data.email);
        setCookie("AuthToken", data.token);
        //console.log(cookies);
        setError(null);
        window.location.reload();
        setError(null);
      } else if (response.status == 400) {
        setError("Incorrect Password");
        console.log("IP");
      } else if (response.status == 500) {
        setError("User doesn't exist, Try Signing Up");
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
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                LOG
                <span style={{ color: "hsl(218, 81%, 75%)" }}>IN</span>
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>
              <div className="card bg-glass my-lg-5">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        value={Data.email}
                        onChange={(e) => {
                          setData({
                            ...Data,
                            email: e.target.value,
                          });
                        }}
                      />
                      <label className="form-label" htmlFor="form2Example1">
                        Email ID
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control"
                        value={Data.password}
                        onChange={(e) => {
                          setData({
                            ...Data,
                            password: e.target.value,
                          });
                        }}
                      />
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-lg-5 col-sm-6 login">
                        <button
                          // type="submit"
                          className="btn button-signup"
                        >
                          <span>Login</span>
                        </button>
                      </div>
                      <div className="col-md-5 col-lg-5 col-sm-5 login">
                        <a
                          className="signup"
                          onClick={() => {
                            params.PUserPresent(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            new user ? <br />
                            SIGN UP
                          </span>
                        </a>
                      </div>
                      <div style={{ marginTop: "30px", marginBottom: 0 }}>
                        {Error && <p style={{ color: "red" }}>{Error}</p>}
                      </div>
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

export default Login;
