import React, {Component} from "react";
import SearchInput from "./SearchInput";
import '../../../assets/Css/Header.css';

class SearchBox extends Component {
    state = {
      focus: false,
      limit:false,
      show: false
    };
    handleInputFocus = () => {
      this.setState({ focus: true });
    };
    handleInputBlur = () => {
      this.setState({ focus: false });
    };
  
    handleInputSearch = (e) => {
      if(e.target.value.length >= 10){
        this.setState({limit:true})
      }
    
      else{
        this.setState({limit:false})
      }
    };
    render() {
      return (
  <div className='search-box  mx-auto'>
      <div className="ss_header">
           <div className="box">
            <div className="container-1">
            <SearchInput
            // onFocus={this.handleInputFocus, this.handleInputSearch}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputSearch}
            />
          </div>
         </div>
  
      </div>
      <div className=  { this.state.limit ?'notifi-of-not-result': 'no-display ' }>no result </div>
  </div>
      );
    }
  }
  
  export default SearchBox;