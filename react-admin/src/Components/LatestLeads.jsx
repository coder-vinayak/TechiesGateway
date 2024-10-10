import React from 'react';
// import './LatestLeads.css'; // You can use this for custom styling if needed

const LatestLeads = () => {
    return (
        <div className="col-xxl-8">
            <div className="card stretch stretch-full">
                <div className="card-header">
                    <h5 className="card-title">Latest Leads</h5>
                    <div className="card-header-action">
                        <div className="card-header-btn">
                            <div data-bs-toggle="tooltip" title="Delete">
                                <a href="javascript:void(0);" className="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Refresh">
                                <a href="javascript:void(0);" className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                            </div>
                            <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                <a href="javascript:void(0);" className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                <div data-bs-toggle="tooltip" title="Options">
                                    <i className="feather-more-vertical"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-at-sign"></i>New</a>
                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-calendar"></i>Event</a>
                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-bell"></i>Snoozed</a>
                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-trash-2"></i>Deleted</a>
                                <div className="dropdown-divider"></div>
                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-settings"></i>Settings</a>
                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-life-buoy"></i>Tips & Tricks</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr className="border-b">
                                    <th scope="row">Users</th>
                                    <th>Proposal</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-image">
                                                <img src="assets/images/avatar/2.png" alt="" className="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span className="d-block">Archie Cantones</span>
                                                <span className="fs-12 d-block fw-normal text-muted">arcie.tones@gmail.com</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-gray-200 text-dark">Sent</span></td>
                                    <td>11/06/2023 10:53</td>
                                    <td><span className="badge bg-soft-success text-success">Completed</span></td>
                                    <td className="text-end">
                                        <a href="javascript:void(0);"><i className="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                                {/* Other table rows */}
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-image">
                                                <img src="assets/images/avatar/3.png" alt="" className="img-fluid" />
                                            </div>
                                            <a href="javascript:void(0);">
                                                <span className="d-block">Holmes Cherryman</span>
                                                <span className="fs-12 d-block fw-normal text-muted">golms.chan@gmail.com</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-gray-200 text-dark">New</span></td>
                                    <td>11/06/2023 10:53</td>
                                    <td><span className="badge bg-soft-primary text-primary">In Progress</span></td>
                                    <td className="text-end">
                                        <a href="javascript:void(0);"><i className="feather-more-vertical"></i></a>
                                    </td>
                                </tr>
                                {/* Additional rows */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
                        <li>
                            <a href="javascript:void(0);"><i className="bi bi-arrow-left"></i></a>
                        </li>
                        <li><a href="javascript:void(0);" className="active">1</a></li>
                        <li><a href="javascript:void(0);">2</a></li>
                        <li>
                            <a href="javascript:void(0);"><i className="bi bi-dot"></i></a>
                        </li>
                        <li><a href="javascript:void(0);">8</a></li>
                        <li><a href="javascript:void(0);">9</a></li>
                        <li>
                            <a href="javascript:void(0);"><i className="bi bi-arrow-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LatestLeads;
