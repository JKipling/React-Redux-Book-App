import React, { Component } from 'react';
import { connect } from 'react-redux';          //Imported the "connect" function from react-redux. react-redux is the glue between React and Redux, they are two seperate libraries 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';    //this is a function that we will use to make sure that the action created by the action creator actually flows through all the reducers in our application. 

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}     //Whenver this is clicked call this.props.selectBook and pass it the book.
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

//Purpose of this function is to take our application state and whatever gets returned will show up as props inside of BookList.
function mapStateToProps(state) {
    return {
        books: state.books          //We want to have access to this.props.books within our component.  
    };                              //So we return an object with a key of books and a value of state.books.
}                                   //If our state ever changes this container will instantly re-render with a new list of books. 

//Anything returned from this function will end up as props on the BookList container. 
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be pased to all of our reducers. 
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//whenver we make a containter file we dont want to export the plain component, we want to export the container.
//Promote BookList form a component to a container - it needs to know about this new dispatch method, selectBook. 
//Make it available as a prop.  
export default connect(mapStateToProps, mapDispatchToProps) (BookList);

//React-Redux makes the 'connect' function available. Connect takes a function and a component and produces a container. 
//A container is a normal react component that is aware of the state that is contained by Redux.
//The mapStateToProps function is important. The first argument is the state and returns an object. Whatever object is returned will be availbale to our component as "this.props".
//This function is the glue between React and Redux. 

//The second important fact by using "connect" to create a container is that whenever the application state changes, the object in the state function wil be assigned as props to the component. 