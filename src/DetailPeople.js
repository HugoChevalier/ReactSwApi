import React from 'react';
import Query from './Query';


export default React.createClass({

    getInitialState() {
        return {
            detail: []
        }
    },

    insertDetail(detail) {
        this.setState({
            detail: detail
        });
    },

    getDetail() {
        var id = this.props.params.id;
        Query.getDetail(id,this.insertDetail)
    },

    componentWillMount (){
        this.getDetail();
    },

    render() {
        return (
            <ul className="collection with-header">
                <li className="collection-header"><h4>{this.state.detail.name}</h4></li>
                <li className="collection-item">Height : {this.state.detail.height}</li>
                <li className="collection-item">Mass : {this.state.detail.mass}</li>
                <li className="collection-item">Hair Color : {this.state.detail.hair_color}</li>
                <li className="collection-item">Skin Color : {this.state.detail.skin_color}</li>
                <li className="collection-item">Birth Year : {this.state.detail.birth_year}</li>
                <li className="collection-item">Gender : {this.state.detail.gender}</li>
            </ul>
        )
    }
})

