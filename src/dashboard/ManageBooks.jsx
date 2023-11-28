import axios from 'axios';
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { URL } from '../url';
const ManageBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        axios(`${URL}/all-books`).then(data => setAllBooks(data.data)); //See it on console.data {data:{}}

    }, [])


    const notifyError = () => toast.error('Book Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });



    const handleDelete = (async (id) => {
        // console.log(id);

        if (confirm("Confirm to Delete") == true) {
            axios.delete(`${URL}/book/${id}`)
            await axios(`${URL}/all-books`).then(data => setAllBooks(data.data));
            notifyError()
        } else {
            return
        }
    })


    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Books</h2>
            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>No</Table.HeadCell>
                    <Table.HeadCell>Book Name</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Prices</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr">Edit or Manage</span>
                    </Table.HeadCell>
                </Table.Head>

                {
                    allBooks.map((book, index) => <Table.Body key={book._id} className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.bookTitle}
                            </Table.Cell>
                            <Table.Cell>{book.authorName}</Table.Cell>
                            <Table.Cell>{book.category}</Table.Cell>
                            <Table.Cell><b>$</b>{Math.floor(Math.random() * (22 - 12 + 1) + 12)}</Table.Cell>
                            <Table.Cell>

                                <Link
                                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to={`/admin/dashboard/manage/${book._id}`}>
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(book._id)}
                                    className='bg-red-600 px-4 py-1 font-semibold text-white rounded hover:bg-sky-600' >
                                    Delete

                                </button>
                                <ToastContainer />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }


            </Table>
        </div>
    )
}

export default ManageBooks