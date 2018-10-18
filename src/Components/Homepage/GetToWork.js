import React, { Component } from 'react';

export default class GetToWork extends Component {
  render() {
    return (
      <div id="why" className="gettowork-section bg-light my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto mt-5">
              <div className="work-container my-5">
                <div className="video-1-container">
                  <video
                    style={{ width: '400px' }}
                    src="https://monday.com/static/video/product/team-work-invite/team-work-invite.mp4"
                    preload="auto"
                    muted
                    autoPlay
                  />
                  <h3>Share the joy</h3>
                  <p>
                    Inviting your team is really easy. Once they’re in,
                    assigning them to relevant projects is even easier. They’ll
                    soon fall in love with the irresistibly visual and fully
                    transparent tool.
                  </p>
                </div>

                <div className="video-2-container">
                  <video
                    style={{ width: '400px' }}
                    src="https://monday.com/static/video/product/team-work-conversation/team-work-conversation.mp4"
                    preload="auto"
                    muted
                    autoPlay
                  />
                  <h3>Collaborate with ease</h3>
                  <p>
                    Keep all your conversations, files, briefs, checklists, and
                    sheets in one place and say goodbye to useless meetings and
                    painfully long email threads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
