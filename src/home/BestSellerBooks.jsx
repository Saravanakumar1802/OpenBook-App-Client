import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookCards from '../components/BookCards';
import { URL } from '../url';
const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios(`${URL}/all-books`).then(data => setBooks(data.data.slice(0, 8)))
    }, [])
    return (
        <div>
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    )
}

export default BestSellerBooks