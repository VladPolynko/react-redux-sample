import React from 'react';
import {bindActionCreators} from "redux"
import InputText from './InputText.js';
import Title from './../authForm/Title.js';
import text from './../../helpers/text.js';
import {connect} from "react-redux";
import {increaseCounterToValue, decCounterToValue, resetToDefaultValue} from './../../actions/counter.actions.js';

class MainTestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title title={text.TitleTestPage}/>
                <InputText values={this.props.counter}/>
                <input type="button" defaultValue="increment" onClick={() => {this.props.increaseCounterToValue(1)}}/>
                <input type="button" defaultValue="decrement" onClick={() => {this.props.decCounterToValue()}}/>
                <input type="button" defaultValue="reset" onClick={() => {this.props.resetToDefaultValue()}}/>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        counter: store.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounterToValue: bindActionCreators(increaseCounterToValue, dispatch),
        decCounterToValue: bindActionCreators(decCounterToValue, dispatch),
        resetToDefaultValue: bindActionCreators(resetToDefaultValue, dispatch)
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(MainTestPage);
