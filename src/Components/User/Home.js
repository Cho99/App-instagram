import React, {Component} from "react";
import Timeline from "./Timeline/Timeline";
import callApi from "../../utils/apiCaller";
import Post from "../User/Post";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: [],
            isAvailable: false
        });
        this.onAdd = this.onAdd.bind(this);
    }

    componentDidMount() {
        callApi("post","get",null).then( res => {
            this.setState({
                posts: res.data
            })
        });      
    }

    onAdd(e) {
        e.preventDefault();
        this.setState({
            isAvailable: true
        })
        console.log("Hello");
    }

    render() {
        var {posts, isAvailable} = this.state;
        return(
            <div className="Home">
                <div className="add">
                    <button onClick={this.onAdd}>Addd</button>
                </div>
                {
                    posts.map((item, index) => {
                       var data_comments = item.comments;
                       

                       var data_heart = item.hearts;
                       var heart = data_heart.map(data => {
                            console.log(data);
                            return data.quantity;
                       });
                       var sum = 0;
                       for(let i = 0; i < heart.length; i++) {
                           sum += heart[i];
                       }
                       return(
                            <Timeline
                            key = {index}
                            id = {item.id}
                            item = {item}
                            userNamePost = {item.userNamePost}
                            contentPost = {item.contentPost}
                            imagePost = {item.imagePost}
                            like = {sum}
                            />
                       )
                    })
                }
                <Post isAvailable = {isAvailable}/>
            </div>
        );
    }
}