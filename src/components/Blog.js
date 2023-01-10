import React from 'react';
import { useDispatch } from 'react-redux';
import { search_by_author, search_by_catagory } from '../redux/actionTypes';

const Blog = ({blog}) => {

    const dispach = useDispatch()

    const searchCatagory = (catagoryName)=>{
        dispach(search_by_catagory(catagoryName))
    }
    const searchAthor = (athorName)=>{
        dispach(search_by_author(athorName))
    }


    return (
              
                    <div
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src={blog.image}
                                alt=""
                            />
                        </div>
                        <div
                            className="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div className="flex-1">
                                <p onClick={()=> searchCatagory(blog.catagory)} className="text-sm font-medium text-indigo-600">
                                    <span
                                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                    >
                                        {blog.catagory} 
                                    </span>
                                </p>
                                <span className="block mt-1">
                                    <p
                                        className="text-xl font-semibold text-gray-900"
                                    >
                                        {blog.title}
                                    </p>
                                </span>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                        alt=""
                                    />
                                </div>
                                <div onClick={()=>searchAthor(blog.author)} className="ml-3">
                                    <p
                                        className="text-sm font-medium text-gray-900 hover:underline"
                                    >
                                        {blog.author}
                                    </p>
                                    <div
                                        className="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time dateTime="2020-03-16"
                                            >20 Mar, 2022
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> 9 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
        
       
    );
}

export default Blog;
