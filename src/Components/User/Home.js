import React, {Component} from "react";
import Timeline from "./Timeline/Timeline";
import callApi from "../../utils/apiCaller";
import Post from "../User/Post";
import Add from "./AddForm";
import AddForm from "./AddForm";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: [],
            isAvailable: false
        });
        this.onAdd = this.onAdd.bind(this);
        this.onExit = this.onExit.bind(this);
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
    }

    onExit() {
        this.setState({
            isAvailable: false
        })
    }

    render() {
        var {posts, isAvailable} = this.state;
        const user = localStorage.getItem("user");
        const userdata = JSON.parse(user);
        return(
            <div className="Home">
                <AddForm name = {userdata.username} avatar = {userdata.avatar} onAdd = {this.onAdd}/>
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
                <Post isAvailable = {isAvailable} onExit = {this.onExit}/>
            </div>
        );
    }
}