import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../../services/actions/movie.action';
import { useNavigate } from 'react-router';

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movie } = useSelector(state => state.movieReducer)
  const [input, setInput] = useState(movie)
  const [arrayInput, setArrayInput] = useState({
    category: '',
    cast: ''
  })
  const handleChange = (e) => {
    if (e.target.name == 'thumbnail') {
      setInput({ ...input, 'thumbnail': e.target.files[0] })
    } else if (e.target.name == 'category' || e.target.name == 'cast') {
      setArrayInput({ ...arrayInput, [e.target.name]: e.target.value })
    } else {
      setInput({ ...input, [e.target.name]: e.target.value })
    }
  }
  useEffect(() => {
    setInput(movie);
  }, [movie])
  const handleEnter = (cate) => {
    if (cate == 'category') {
      setInput({ ...input, 'category': [...input.category, arrayInput.category] })
      setArrayInput({ ...arrayInput, 'category': '' })
    } else {
      setInput({ ...input, 'cast': [...input.cast, arrayInput.cast] })
      setArrayInput({ ...arrayInput, 'cast': '' })
    }
  }
  const handleSubmit = () => {

    const formData = new FormData();
    formData.append('title', input.title);
    formData.append('releaseDate', input.releaseDate);
    formData.append('description', input.description);
    formData.append('director', input.director);
    formData.append('rating', input.rating);
    formData.append('movieTime', input.movieTime);
    formData.append('category', input.category);
    formData.append('cast', input.cast);
    formData.append('thumbnail', input.thumbnail);
    dispatch(editMovie(input._id, formData));
    navigate('/');
  }
  return (
    <section className='px-24 py-20'>
      <form method='post'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-4'>
            <label htmlFor="title" className='text-xl font-semibold'>Title :</label>
            <input type="text" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={input?.title} name='title' id='title' />
          </div>
          <div className='col-span-2'>
            <label htmlFor="releaseDate" className='text-xl font-semibold'>Release Date :</label>
            <input type="date" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={input?.releaseDate} name='releaseDate' id='releaseDate' />
          </div>
          <div className='col-span-6'>
            <label htmlFor="description" className='text-xl font-semibold'>Description :</label>
            <textarea type="text" rows={4} className='border resize rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={input?.description} name='description' id='description' ></textarea>
          </div>
          <div className='col-span-2'>
            <label htmlFor="director" className='text-xl font-semibold'>Director :</label>
            <input type="text" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={input?.director} name='director' id='director' />
          </div>
          <div className='col-span-2'>
            <label htmlFor="rating" className='text-xl font-semibold'>Rating :</label>
            <input type="number" min={0} max={5} className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={input?.rating} name='rating' id='rating' />
          </div>
          <div className='col-span-2'>
            <label htmlFor="movieTime" className='text-xl font-semibold'>Movie Time :</label>
            <input type="text" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={input?.movieTime} name='movieTime' id='movieTime' />
          </div>
          <div className='col-span-3'>
            <label htmlFor="category" className='text-xl font-semibold'>Category :</label>
            <div className='flex items-center'>
              <input type="text" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={arrayInput?.category} name='category' id='category' />
              <button type="button" className='border rounded-r-lg px-5 py-2 mt-2 bg-slate-900 text-white font-bold' onClick={() => { handleEnter('category') }}>Enter</button>
            </div>
          </div>
          <div className='col-span-3'>
            <label htmlFor="cast" className='text-xl font-semibold'>Cast :</label>
            <div className="flex items-center">
              <input type="text" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} value={arrayInput?.cast} name='cast' id='cast' />
              <button type="button" className='border rounded-r-lg px-5 py-2 mt-2 bg-slate-900 text-white font-bold' onClick={() => { handleEnter('cast') }}>Enter</button>
            </div>
          </div>
          <div className='col-span-2'>
            <label htmlFor="thumbnail" className='text-xl font-semibold'>Thumbnail :</label>
            <input type="file" className='border rounded-lg px-5 w-full mt-2 py-2 block' onChange={handleChange} name='thumbnail' id='thumbnail' />
          </div>
          <div className='col-start-1'>
            <button type="button" onClick={handleSubmit} className='border px-5 py-2 rounded-xl font-bold text-white bg-green-700 text-lg'>Edit</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Edit