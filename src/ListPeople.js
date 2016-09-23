import React from 'react';
import Query from './Query';
import {Link} from 'react-router';




export default React.createClass({

    getInitialState() {
        return {
            data: [],
            page:1
        }
    },

    insertPeoples(content) {
        var results = content.results;
        var data = this.state.data;
        var currentPage = this.state.page;
        data = data.concat(results);
        currentPage++;
        this.setState({
            data: data,
            page: currentPage
        });
    },

    getPeoples() {
        var page = this.state.page;
        Query.getPeople(page,this.insertPeoples)
    },

    componentWillMount (){
        this.getPeoples();
    },



    render() {
        var listPeoples = this.state.data.map(function(item) {
            var id = item.url.substring(27);
            return (
                <li  key={id} className="collection-item">
                    <Link to={'/people/' + id}>{item.name}</Link>
                </li>
            );
        });

        return (
            <div>
                <ul className="collection">
                    {listPeoples}
                </ul>
                <a  onClick={this.getPeoples} className="waves-effect waves-light btn col s2 offset-s6"><i className="material-icons left">add</i>Voir plus</a>
            </div>
        );
    }
});

