import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { _id, bookTitle, authorName, imageURL, bookDescription, bookPDFURL } = useLoaderData();

    return (
        // <div className='mt-28 px-4 lg:px-24'>
        //     <img src={imageURL} alt={bookTitle} className='h-96' />
        //     <h2>{bookTitle}</h2>
        // </div>

        // <div className="max-w-md mx-auto mt-36 bg-white rounded-md overflow-hidden shadow-md">
        //     <img className="w-full h-96 object-cover" src={imageURL} alt={bookTitle} />

        //     <div className="p-6">
        //         <h2 className="text-2xl font-bold mb-2">{bookTitle}</h2>
        //         <p className="text-gray-600 mb-4">By {authorName}</p>
        //         <p className="text-gray-800">{bookDescription}</p>
        //     </div>
        // </div>

        <div className="lg:max-w-5xl mx-auto mt-28 bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0 ">
                    <img
                        className="h-96 w-full object-cover"
                        src={imageURL}
                        alt={`${bookTitle} cover`}
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
                        {authorName}
                    </div>
                    <a
                        href={bookPDFURL}
                        className=" mb-4 block mt-1 text-lg leading-tight font-bold text-black hover:underline"
                        target='__blank'
                    >
                        {bookTitle}
                    </a>
                    <p className="mt-2 text-gray-500 font-semibold">{bookDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBook