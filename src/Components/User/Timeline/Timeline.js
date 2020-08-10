import React, { Component } from "react";
import "../../../assets/Css/Timeline.css"
import axios from "axios";
import callApi from "../../../constants/Config";
import { user } from "../../../constants/Config";

var baseURL = "http://localhost:4000/post/";

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            contentComment: "",
            isLike: false,
        };
        this.onLike = this.onLike.bind(this);
        this.addHeart = this.addHeart.bind(this);
    }
    
    onLike(e) {
      e.preventDefault();// lấy dữ liệu về: name, length
      const { isLike } = this.state; 
      this.setState({
        isLike : !isLike
      })
    }

    addHeart(e) {
      e.preventDefault();
      var id = this.props.id;
      const {isLike, post} = this.state;
      this.setState({
        isLike : !isLike
      })
      axios({
        method: "post",
        url: "heart",
        baseURL: baseURL,
        data: {
          user,
          posts: post,
          id
        }
      })
        .then(response => {
          console.log("form submitted");
        })
        .catch(errror => {
          console.log("Error: " + errror);
        })
    }

    render() {
        var { post, isLike } = this.state;
        var { items, userNamePost, imagePost, like } = this.props;
        var  data = [items];
        var a ;
        if(isLike === true) {
            a = (
                <svg
                aria-label="Bỏ thích"
                class="_8-yf5 "
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            );
        }
        if(!isLike) {
            a = (
                <svg
                  aria-label="Nguồn cấp dữ liệu hoạt động"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
            );
        } 
        return(
          <div className="Timeline">
            <div className="Card">
              <div className="Header-Card">
                <div className="info">
                  <img src="https://robohash.org/quisexcepturimagni.png?size=50x50&set=set1" />
                  <b>{userNamePost}</b>
                </div>
                <a src="#" className="More">
                  <svg
                    aria-label="More options"
                    class="_8-yf5 "
                    fill="#262626"
                    height="16"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <circle
                      clipRule="evenodd"
                      cx="8"
                      cy="24"
                      fillRule="evenodd"
                      r="4.5"
                    />
                    <circle
                      clipRule="evenodd"
                      cx="24"
                      cy="24"
                      fillRule="evenodd"
                      r="4.5"
                    />
                    <circle
                      clipRule="evenodd"
                      cx="40"
                      cy="24"
                      fillRule="evenodd"
                      r="4.5"
                    />
                  </svg>
                </a>
              </div>
              <div className="Image-z">
                <img
                  className="img-fluid"
                  src={imagePost}
                  className="Img"
                  width="614"
                  height="614"
                />
              </div>
              <div className="Content">
                <div className="Menu-z">
                  <div className="Menu-Bar">
                    <button onClick= {this.addHeart} className="Like">{a}</button>
                    <div className="Comment">
                      <svg
                        aria-label="Comment"
                        class="_8-yf5 "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="Post">
                      <svg
                        aria-label="Share Post"
                        class="_8-yf5 "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                      </svg>
                    </div>
                    <div className="Save">
                      <svg
                        aria-label="Save"
                        class="_8-yf5 "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="Comment-z">
                  <div className="Like-z">
                    <b>{like} Like</b>
                  </div>
                  <div className="Comments">
                    <div className="User">
                      <b>Dog123</b> <span>It's not stupid if it works.</span>
                    </div>
                    <div className="Time">
                      <span>2 HOURS AGO</span>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <p>{this.props.userNamePost}</p>
                  <p>{this.props.contentPost}</p>
                </div>
                <div className="Add-Comment">
                  <input type="text" placeholder="Add a comment..." />
                </div>
              </div>
            </div>
          </div>
        )
    }
} 

