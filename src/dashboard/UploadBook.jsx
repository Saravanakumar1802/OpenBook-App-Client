import { useState } from 'react'
import { Button, Textarea, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from '../url';
const UploadBook = () => {

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Action",
        "Science Fiction",
        "Fantacy",
        "Horror",
        "Romantic",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Bussiness",
        "Children-Books",
        "Travel",
        "Religion",
        "Art and Design"
    ]

    //! Toastify
    const notifySuccess = () => toast.success('Book Uploaded Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value)
    }

    const handleBookSubmit = ((event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        }
        console.log(bookObj);

        axios.post(`${URL}/upload-book`, bookObj).then(data => {
            // console.log(data);
            notifySuccess();
            form.reset()
        })
    })

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
                    </div>

                    {/* authorName */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
                    </div>

                </div>


                {/* secondRow */}

                <div className='flex gap-8'>
                    {/* imageURL */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
                    </div>

                    {/* category */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>

                        <select id='inputState' name="categoryName" className='w-full rounded' value={selectedBookCategory}
                            onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </select>

                    </div>

                </div>

                {/* bookDescription */}

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name="bookDescription" placeholder="Write Your Book Description..." className='w-full' required rows={6} />
                </div>

                {/* books pdf link */}

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book Pdf url" required />
                </div>

                <Button type='submit' className='mt-5'>Upload Book</Button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default UploadBook