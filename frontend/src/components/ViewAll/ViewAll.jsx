import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie, getOneMovie } from '../../services/actions/movie.action';
import { useNavigate } from 'react-router';


const ViewAll = () => {
  const navigate = useNavigate()
  const { movies } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id))
    navigate('/')
  }
  const handleEdit = (id) => {
    dispatch(getOneMovie(id))
    navigate('/edit')
  }
  return (
    <section className='px-24 py-20 family1'>
      <table className='w-full'>
        <thead className='w-full'>
          <tr className='grid grid-cols-12'>
            <th className='col-span-1 border-2 text-white bg-gray-900 px-5 py-2 text-start'>#</th>
            <th className='col-span-2 border-2 text-white bg-gray-900 px-5 py-2 text-start'>Title</th>
            <th className='col-span-3 border-2 text-white bg-gray-900 px-5 py-2 text-start'>Description</th>
            <th className='col-span-2 border-2 text-white bg-gray-900 px-5 py-2 text-start'>Director</th>
            <th className='col-span-1 border-2 text-white bg-gray-900 px-5 py-2 text-start'>Rating</th>
            <th className='col-span-1 border-2 text-white bg-gray-900 px-5 py-2 text-start'>Duration</th>
            <th className='col-span-2 border-2 text-white bg-gray-900 px-5 py-2 text-start'>Action</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {
            movies?.map((movie , index) => {
              return (
                <tr className='grid grid-cols-12'>
                  <td className='col-span-1  border px-5 py-2'>{index +1}</td>
                  <td className='col-span-2  border px-5 py-2'>{movie.title}</td>
                  <td className='col-span-3  border px-5 py-2 truncate'>{movie.description}</td>
                  <td className='col-span-2  border px-5 py-2'>{movie.director}</td>
                  <td className='col-span-1  border px-5 py-2'>{movie.rating}</td>
                  <td className='col-span-1  border px-5 py-2'>{movie.movieTime}</td>
                  <td className='col-span-2  border px-5 py-2'>
                    <button type="button" className='px-5 py-2 border bg-emerald-600 text-white font-bold rounded-xl' onClick={() => handleEdit(movie._id)}>Edit</button>
                    <button type="button" className='px-5 py-2 border bg-rose-600 text-white font-bold rounded-xl' onClick={() => handleDelete(movie._id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default ViewAll