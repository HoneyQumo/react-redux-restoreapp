import React, { Component } from 'react'
import { connect } from 'react-redux';


import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        // 1. Получить данные
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        // 2. передать действия в store
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)