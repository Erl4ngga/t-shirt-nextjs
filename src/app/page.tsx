import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <main className={styles.maintop}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.customselectbox}>
              <select
                id="basic"
                className="selectpicker show-tick form-control"
                data-placeholder="$ USD"
              >
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div>
            <div className={styles.rightphonebox}>
              <p>
                Call US :<a href="#"></a>
              </p>
            </div>
            <div className={styles.ourlink}>
              <ul>
                <li>
                  <a href="">
                    <i className="fa fa-user s_color"></i>My Account
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-location-arrow"></i>Track Order
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-headset"></i> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
        </div>
      </div>
    </main>
  );
}
