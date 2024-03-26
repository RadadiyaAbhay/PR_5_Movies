import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie, editMovie, getOneMovie } from '../../services/actions/movie.action';
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const View = () => {
  const { movies } = useSelector(state => state.movieReducer);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <>
      <section className='px-24 py-20'>
        <div className='grid grid-cols-5 gap-4'>
          {
            movies?.map((movie, index) => {
              const date = new Date(movie?.releaseDate)
              const imgpath = `http://localhost:3000/uploads/${movie?.thumbnail}`
              return (
                <div key={index} className='pt-7'>
                  <NavLink to={'/details/'+ movie._id}>
                    <div className='w-full h-96 border rounded-xl drop-shadow-xl overflow-hidden flex items-center justify-center'>
                      <img src={imgpath} className='object-cover w-full  h-full' alt="" />
                    </div>
                    <h4 className='font-bold text-2xl family1 ps-1 pt-2 truncate'>{movie.title}</h4>
                    <p className='ps-1'>{date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()}</p>
                    <div className="flex items-center pt-1 ps-1">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <FaStar
                          key={rating}
                          className={classNames(
                            movie.rating > rating ? 'text-amber-700' : 'text-amber-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </NavLink>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default View