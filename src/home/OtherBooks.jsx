import axios from 'axios';
import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';
import { URL } from '../url';

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios(`${URL}/all-books`).then(data => setBooks(data.data.slice(4, 12)))
  }, [])
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  )
}

export default OtherBooks