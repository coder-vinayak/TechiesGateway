import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="terms-main-sec-wrapper">
      <section className="terms-main-sec-options-tab">
        <ul>
          <li className="active-terms-tab">
            <Link className="terms-link">General Info</Link>
          </li>
          <li>
            <Link className="terms-link">Payment Info</Link>
          </li>
          <li>
            <Link className="terms-link">Refund Policy</Link>
          </li>
          <li>
            <Link className="terms-link">Privacy Policy</Link>
          </li>
          <li>
            <Link className="terms-link">Term & Condition</Link>
          </li>
        </ul>
      </section>
      <section className="terms-main-sec-content">
        <div className="terms-main-sec-content-sec-1">
          <h2>Terms of Service Agreement</h2>
          <p>
            By placing an order with SMM Panel, you automatically accept all the
            below-listed terms of service whether you read them or not. We
            reserve the right to change these terms of service without notice.
            You are expected to read all terms of service before placing an
            order to ensure you are up to date with any changes or any future
            changes. You will only use the SMM Panel website in a manner which
            follows all agreements made with
            Instagram/Facebook/Twitter/YouTube/Other social media sites on their
            Terms of Service page. SMM Panel rates are subject to change at any
            time without notice. The payment/refund policy stays in effect in
            the case of rate changes. SMM Panel does not guarantee a delivery
            time for any services. We offer our best estimation for when the
            order will be delivered. This is only an estimation, and SMM Panel
            will not refund orders that are processing if you feel they are
            taking too long. SMM Panel tries hard to deliver exactly what is
            expected from us by our resellers. In this case, we reserve the
            right to change a service type if we deem it necessary to complete
            an order.
          </p>
        </div>
        <div className="terms-main-sec-content-sec-2">
          <h2>Disclaimer</h2>
          <p>
            SMM Panel will not be responsible for any damages you or your
            business may suffer.
          </p>
        </div>
        <div className="terms-main-sec-content-sec-3">
          <h2>Liabilities</h2>
          <p>
            SMM Panel is in no way liable for any account suspension or picture
            deletion done by Instagram or Twitter or Facebook or YouTube or
            Other Social Media.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Main;
