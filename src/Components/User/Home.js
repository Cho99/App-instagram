import React, {Component} from "react";
import Timeline from "./Timeline/Timeline";
import callApi from "../../utils/apiCaller";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: []
        })
    }

    componentDidMount() {
        callApi("post","get",null).then( res => {
            console.log(res.data);
        });      
    }

    render() {
        return(
            <div className="Home">
                <Timeline/>
            </div>
        );
    }
}