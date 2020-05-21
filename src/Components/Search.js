import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Select, { components } from 'react-select';

import { NONAME } from 'dns';


const options = [
    { value: 'Abbotsford', label: 'Abbotsford' },
    { value: 'Carlton', label: 'Carlton' },
    { value: 'Collingwood', label: 'Collingwood' },
    { value: 'Fitzroy', label: 'Fitzroy' },
    { value: 'Melbourne CBD', label: 'Melbourne CBD' },
    { value: 'Northcote', label: 'Northcote' },
    { value: 'Preston', label: 'Preston' },
    { value: 'South Melbourne', label: 'South Melbourne' },
    { value: 'South Yarra', label: 'South Yarra' },
    { value: 'etc', label: 'etc' }
]

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid hsla(213.33333333333331, 4.52%, 39.02%, 0.20)',
      width: 300,
      //marginBottom: 10,
      fontFamily: 'Inter beta, sans-serif',
      fontSize: 12,
      //lineHeight: 30,
      fontWeight: 1000,
      textAlign: 'left',
      display: 'flex',
      backgroundColor: state.isSelected ? '#f8f9fa' : 'white',
      
    }),
    control: () => ({
      display: 'flex',
      alignItems: 'center',
      width: 'auto',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        position: 'relative',
        zIndex: 1,
        marginTop: 25,
        marginBottom: 0,
        color: 'hsla(48.23529411764706, 100.00%, 50.00%, 1.00)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        textDecoration: 'underline',
        fontSize: 42,
        //lineHeight: 4,
        letterSpacing: -1,
        width:'auto',
        
    }),
    indicatorContainer: (provided) => ({
        // ...provided,
        padding: 0,
        
    }),
    menuList: () => ({
        marginBottom: 0,
        fontFamily: 'Inter beta, sans-serif',
        fontSize: 24,
        //lineHeight: 30,
        fontWeight: 300,
        textAlign: 'left',
        marginTop: 0,
        color: '#5f6368',
        letterSpacing: 0,
        
    }),
    menu: (provided) => ({
        ...provided,
        width:300,
    }),
    singleValue:(provided, state) => ({
        ...provided,
        position: 'relative',
        zIndex: 1,
        marginTop: 25,
        marginBottom: 0,
        color: 'hsla(48.23529411764706, 100.00%, 50.00%, 1.00)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        textDecoration: 'underline',
        fontSize: 42,
        //lineHeight: 4,
        letterSpacing: -1,
        maxWidth:400,
    }),
    
  }
  
const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
         <img src="https://uploads-ssl.webflow.com/5c68aa0a46b367677ef35fd6/5c7dbdaa10414d6de34e7361_HFG-Search-Icon.png" width="540" srcSet="https://uploads-ssl.webflow.com/5c68aa0a46b367677ef35fd6/5c7dbdaa10414d6de34e7361_HFG-Search-Icon-p-500.png 500w, https://uploads-ssl.webflow.com/5c68aa0a46b367677ef35fd6/5c7dbdaa10414d6de34e7361_HFG-Search-Icon-p-800.png 800w, https://uploads-ssl.webflow.com/5c68aa0a46b367677ef35fd6/5c7dbdaa10414d6de34e7361_HFG-Search-Icon.png 1080w" sizes="30px" data-w-id="423b74c0-ca9d-45a3-f26d-ba504766731e" alt="" className="image"/>              
        </components.DropdownIndicator>
      )
    );
};

const Option = (props) => {
    console.log(props)
    return (
        components.Option && (
        <components.Option {...props}>
        
        <img src="/images/icon_map_marker@3x.png" className="image-option" sizes="15px"/>
        <div className="text-option-container">
            <span className="text-option1">{props.data.label}<br/><span className="text-option2">Location</span></span>
            
            
        </div>
        
        </components.Option>
        )
    );
};

export default class Search extends Component {
    state = {
        selected: options[3].value         
    }

    onChange = (option) => {
        this.props.getInfo(option)
        this.setState({selected: option})
    }
        
    render(){
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
                 
        return(
            <div className="search-div">
                <Select 
                    menuShouldScrollIntoView={false}
                    styles={customStyles}
                    options={options} 
                    placeholder={placeHolderValue}
                    components={{
                        Option,
                        DropdownIndicator,
                        IndicatorSeparator: () => null,
                        Input: () => null }}
                    onChange={this.onChange}
                />               
            </div>
        );
    }
}



