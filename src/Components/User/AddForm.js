import React,{Component} from "react";

export default class AddForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name ,avatar, onAdd } = this.props;
        return(
            <div className="AddForm">
                <div className="form__add">
                    <div className="form__content__add">
                        <img className="form__avatar" src={`/image/${avatar}`}></img>
                        <input className="form__input" placeholder={`${name} ơi, bạn đang nghĩ gì?` } onClick={onAdd}></input>
                    </div>
                </div>
            </div>
        );
    }
}