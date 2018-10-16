import React, { Component } from "react";
import axios from "axios";

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="editProfile" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered profile-modal-dialog"
            role="document"
          >
            <div className="modal-content p-2 profile-modal-content">
              <div className="modal-header profile-modal-header">
                <i
                  className="fa fa-user envelope-icon mr-2"
                  style={{ fontSize: "20px" }}
                />
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Profile
                </h5>
                <button className="close profile-close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <input type="text" className="modal-input-box profile-input" />
              </div>
              <div className="modal-footer profile-modal-footer">
                <button
                  className="btn btn-secondary invite-buttn profile-save-btn"
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
