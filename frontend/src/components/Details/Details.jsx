import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getOneMovie } from '../../services/actions/movie.action';
import { FaStar } from "react-icons/fa6";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie } = useSelector(state => state.movieReducer)
    const [movieData, setMovieData] = useState(movie);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date(movie?.releaseDate)
    useEffect(() => {
        dispatch(getOneMovie(id));
    }, [])
    useEffect(() => {
        setMovieData(movie);
    }, [movie])
    return (
        <section className='py-20 px-24 flex'>
            <div className='w-3/12'>
                <img src={`http://localhost:3000/uploads/${movieData?.thumbnail}`} className='object-cover w-full rounded-2xl' alt="" />
            </div>
            <div className='w-9/12 ps-7 flex flex-wrap items-center'>
                <div className='w-full'>
                    <h1 className='font-bold w-full family1 text-4xl'>{movieData?.title}</h1>
                    <p className='font-bold pt-3 family1 text-xl'>About the Movie</p>
                    <p className='pt-1 w-11/12 family1'>
                        {movieData?.description}
                    </p>
                    <div className='border-2 border-black rounded-xl w-full my-4'></div>
                    <div className='flex items-center'>
                        <div className="flex items-center pe-2">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <FaStar
                                    key={rating}
                                    className={classNames(
                                        movieData?.rating > rating ? 'text-amber-700' : 'text-amber-200',
                                        'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <div className='border-4 border-black rounded-full'></div>
                        <p className='font-bold text-md px-2'>{date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()}</p>
                        <div className='border-4 border-black rounded-full'></div>
                        <p className='font-bold text-md px-2'>{movieData?.movieTime}</p>
                        <div className='border-4 border-black rounded-full'></div>
                        <ul className='flex gap-2 px-2'>
                            {
                                movie?.category.map((m, index) => {
                                    return (
                                        movie?.category.length == index + 1 ?
                                            <li key={index} className='family1'>{m}</li>
                                            :
                                            <li key={index} className='family1'>{m + ' /'}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className='border-2 border-black rounded-xl w-full my-4'></div>
                    <p className='font-bold family1 text-xl'>Cast</p>
                    <ul className='flex gap-2'>
                        {
                            movie?.cast.map((m, index) => {
                                return (
                                    movie?.cast.length == index + 1 ?
                                        <li key={index} className='family1'>{m}</li>
                                        :
                                        <li key={index} className='family1'>{m + ' ,'}</li>
                                )
                            })
                        }
                    </ul>
                    <div className='border-2 border-black rounded-xl w-full my-4'></div>
                    <p className='font-bold family1 text-xl'>Director</p>
                    <p className='family1'>{movie?.director}</p>

                </div>
            </div>
        </section>
    )
}

export default Details