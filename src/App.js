import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ListPeople from './ListPeople';
import Nav from './Nav';
import DetailPeople from './DetailPeople';
import  './css/app.css';

const Container = (props) =>
    <div>
        <Nav />
        {props.children}
    </div>;


const NotFound = () => (
    <h1>404... This page is not found!</h1>);


export default React.createClass({

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={ListPeople} />
                    <Route path="/people/:id" component={DetailPeople}/>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
});


