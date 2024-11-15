import React from 'react';

const NewsCard = (props = {}) => {
    const { news } = props || {};

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden  my-4">
            {/* Header with Author, Date, Bookmark and Share Icons */}
            <div className="bg-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img 
                        src={news.author.img} 
                        alt={news.author.name} 
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{news.author.name}</h3>
                        <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex space-x-2 text-gray-400">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0118 6.106V4a2 2 0 10-4 0v2.106a2 2 0 01-.447 1.618L9 10m6 0v6M9 10v6M7 16h10M7 20h10M7 8h10M7 4h10" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Thumbnail */}
            <img 
                src={news.thumbnail_url} 
                alt="Thumbnail" 
                className="w-full h-80 object-contain mt-3"
            />

            <div className="p-4">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800">
                    {news.title}
                </h2>

                {/* Details */}
                <p className="text-gray-700 mt-2 line-clamp-3">
                    {news.details}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                    {/* Rating */}
                    <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                            <svg 
                                key={index}
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-5 w-5 ${index < Math.round(news.rating.number) ? 'text-yellow-500' : 'text-gray-300'}`}
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.584 4.875a1 1 0 00.95.69h5.11c.969 0 1.371 1.24.588 1.81l-4.14 3.034a1 1 0 00-.364 1.118l1.584 4.875c.3.921-.755 1.688-1.54 1.118l-4.14-3.034a1 1 0 00-1.175 0l-4.14 3.034c-.785.57-1.84-.197-1.54-1.118l1.584-4.875a1 1 0 00-.364-1.118L2.32 10.302c-.783-.57-.381-1.81.588-1.81h5.11a1 1 0 00.95-.69l1.584-4.875z" />
                            </svg>
                        ))}
                        <span className="text-sm font-semibold ml-2">
                            {news.rating.number}
                        </span>
                    </div>
                    {/* View Count */}
                    <div className="flex items-center text-gray-500 text-sm">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 mr-1" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path d="M10 3c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7zM10 15a5 5 0 110-10 5 5 0 010 10zm0-9a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                        {news.total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
