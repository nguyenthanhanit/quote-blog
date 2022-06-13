import React, {useState} from "react";
import type {NextPage} from 'next'

const Home: NextPage = () => {
  const [data, setData] = useState({
    quote: '',
    author: '',
    source: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = '/api/quote'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(endpoint, options);
    const result = await response.json();
  }

  const handleChange = (event: React.ChangeEvent<{ name: string, value: string }>) => {
    const name = event?.currentTarget?.name,
      value = event?.currentTarget?.value;
    setData({...data, ...{[name]: value}});
  }

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <table className='w-1/2 mx-auto'>
        <tbody>
        <tr>
          <td className='uppercase'>Quote</td>
          <td>
            <textarea name='quote' className='border-2 h-10 w-full p-2'
                      value={data?.quote}
                      onChange={handleChange}/>
          </td>
        </tr>
        {/*<tr>*/}
        {/*  <td className='uppercase'>Author</td>*/}
        {/*  <td>*/}
        {/*    <input type="text" name='author' className='border-2 h-10 w-full p-2'*/}
        {/*           value={data?.author}*/}
        {/*           onChange={handleChange}/>*/}
        {/*  </td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <td className='uppercase'>Source</td>*/}
        {/*  <td>*/}
        {/*    <input type="text" name='source' className='border-2 h-10 w-full p-2'*/}
        {/*           value={data?.source}*/}
        {/*           onChange={handleChange}/>*/}
        {/*  </td>*/}
        {/*</tr>*/}
        </tbody>
      </table>

      <div className='w-1/2 mt-2'>
        <button type='submit'
                className='float-right bg-blue-500 text-white px-3 py-2 rounded-md font-medium'>Save
        </button>
      </div>
    </form>
  )
}

export default Home
