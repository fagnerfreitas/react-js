import React, { Component } from 'react';

export default class Alert extends Component {

    constructor(props) {
        super(props);

        this.state = {}

        this.sucess = this.sucess.bind(this);
    }


    sucess(){

    }

    render() {

        return (
            <div className={this.props.success ? 'alert alert-success' : 'alert alert-danger' } role="alert">
              {this.props.msg}
            </div>
        )

    }
}


// const styles = StyleSheet.create({

//     container: {
 
//     },

//   });