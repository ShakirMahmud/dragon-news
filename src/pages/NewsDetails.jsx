import React from 'react';
import Header from '../components/Header';
import RightNavBar from '../components/layout-components/RightNavBar';
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from '../components/NavBar';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <NavBar></NavBar>
            </nav>
            <main className='w-11/12 mx-auto grid lg:grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <div className="card bg-base-100  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions w-full">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-neutral w-full rounded-none mt-3">Back to Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavBar></RightNavBar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;