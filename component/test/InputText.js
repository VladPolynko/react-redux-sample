import React from 'react';

class InputText extends React.Component{

    render () {
        return <input type="text" readOnly value={this.props.values}/>
    }
}

module.exports = InputText;
