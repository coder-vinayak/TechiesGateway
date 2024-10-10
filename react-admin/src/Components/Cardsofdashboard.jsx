import React from 'react';

const Card = ({ icon, count, total, title, amount, percentage, progressColor }) => {
  return (
    <div className="col-xxl-3 col-md-3 mb-4"> {/* Changed col-md-6 to col-md-3 */}
      <div className="card stretch stretch-full shadow-sm rounded-lg">
        <div className="card-body">
          <div className="d-flex align-items-start justify-content-between mb-4">
            <div className="d-flex gap-4 align-items-center">
              <div className="avatar-text avatar-lg bg-gray-200">
                <i className={icon}></i>
              </div>
              <div>
                <div className="fs-4 fw-bold text-dark">
                  <span className="counter">{count}</span>/<span className="counter">{total}</span>
                </div>
                <h3 className="fs-13 fw-semibold text-truncate-1-line">{title}</h3>
              </div>
            </div>
            <a href="javascript:void(0);" className="">
              <i className="feather-more-vertical"></i>
            </a>
          </div>
          <div className="pt-4">
            <div className="d-flex align-items-center justify-content-between">
              <a href="javascript:void(0);" className="fs-12 fw-medium text-muted text-truncate-1-line">{title}</a>
              <div className="w-100 text-end">
                <span className="fs-12 text-dark">{amount}</span>
                <span className="fs-11 text-muted">({percentage}%)</span>
              </div>
            </div>
            <div className="progress mt-2 ht-3">
              <div className={`progress-bar ${progressColor}`} role="progressbar" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
