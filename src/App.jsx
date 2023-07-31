import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const addData=()=>{
    !value && setData([...data, value]), setValue("")
  }

  return (
    <main className='border-2 border-red-500 w-[30rem] aspect-[1.2/1] fixed inset-0 m-auto p-2 flex gap-2 flex-col'>
      <div className='border-2 border-black w-full flex justify-between px-3 rounded-md'>
        <input type="text" className='outline-none m-2 border-2 rounded-md w-[60%] px-1' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button className='text-white border-2 border-black bg-black my-2 text-sm px-4 py-1 rounded-md font-medium transition-all duration-300 hover:bg-transparent hover:text-black active:font-semibold active:scale-[1.05]' onClick={addData}>ADD</button>
      </div>
      <section className='border-2 w-full h-full m-auto rounded-md p-2'>
        <div className='border-2 border-black flex justify-between rounded-md px-2 items-center font-semibold tracking-wide'>
          <span>Apple</span>
          <button className='text-white border-2 border-red-600 bg-red-600 my-1 text-sm px-4 py-1 rounded-md font-medium transition-all duration-300 hover:bg-transparent hover:text-red-600 active:font-semibold'>Delete</button>
        </div>
      </section>
    </main>
  )
}

export default App
