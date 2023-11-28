import React from 'react'
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { _id, bookTitle, authorName, imageURL, bookDescription } = useLoaderData();

    return (
        // <div className='mt-28 px-4 lg:px-24'>
        //     <img src={imageURL} alt={bookTitle} className='h-96' />
        //     <h2>{bookTitle}</h2>
        // </div>

        <div className="max-w-md mx-auto mt-36 bg-white rounded-md overflow-hidden shadow-md">
            <img className="w-full h-96 object-cover" src={imageURL} alt={bookTitle} />

            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{bookTitle}</h2>
                <p className="text-gray-600 mb-4">By {authorName}</p>
                <p className="text-gray-800">{bookDescription}</p>
            </div>
        </div>
    )
}

export default SingleBook