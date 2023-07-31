import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const styles={
  main:'w-[30rem] aspect-[1.2/1] fixed inset-0 m-auto p-2 flex gap-2 flex-col rounded-md bg-white shadow-[0_0_5px_#fff]',
  inputBox:'border-2 border-slate-600 w-full flex justify-between px-3 rounded-md',
  input:'outline-none m-2 border-2 rounded-md w-[60%] px-1',
  addBtn:'text-white border-2 border-black bg-black my-2 text-sm px-4 py-1 rounded-md font-medium transition-all duration-300 hover:bg-transparent hover:text-black active:font-semibold active:scale-[1.05]',
  editBtn:'text-white border-2 border-black bg-black my-2 text-sm px-4 py-1 rounded-md font-medium transition-all duration-300 hover:bg-transparent hover:text-black active:font-semibold active:scale-[1.05]',
  deleteBtn:'text-white border-2 border-red-600 bg-red-600 my-1 text-sm px-4 py-1 rounded-md font-medium transition-all duration-300 hover:bg-transparent hover:text-red-600 active:font-semibold active:scale-[1.05]',
  listItemsSection:'border-2 border-slate-600 w-full h-full m-auto rounded-md p-2 flex flex-col gap-2',
  list:'border-2 border-black flex justify-between rounded-md px-2 items-center font-semibold tracking-wide',
  removeBtn:'text-white border-2 border-red-600 bg-red-600 my-1 text-sm px-4 py-1 rounded-md font-medium transition-all duration-300 hover:bg-transparent hover:text-red-600 active:font-semibold m-auto block active:scale-[1.05'
}

function App() {
  const [data, setData] = useState(getData());
  const [value, setValue] = useState('');
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editToggle, setEditToggle] = useState(null);

  const addData = () => {
    if(value.length>0){
      const allData = { id: new Date().getTime().toString(), name:value}
      setData([...data, allData]);
      setValue("");
    }    
    if(value && !toggleBtn){
        setData(
          data.map((lists)=>{
            if(lists.id === editToggle){
              return { ...lists, name:value} 
            }
            return lists;
          })
        )
        setToggleBtn(true)
        setValue('')
        setEditToggle(null);
    }
  }
  const deleteData = (id) => {
    setData(
      data.filter((lists) => {
        return id !== lists.id;
      })
    )
  }

  const editData=(id)=>{
  let editListItem = data.find((list)=>{
   return list.id === id;
  })
  console.log(editListItem)
  setToggleBtn(false)
  setValue(editListItem.name)
  setEditToggle(id)
    }

  const removeAll=()=>{
    setData([])
  }

 function getData(){
    return localStorage.getItem('listsItems') ? JSON.parse(localStorage.getItem('listsItems')) : []
  }

  useEffect(()=>{
   localStorage.setItem('listsItems',JSON.stringify(data))
  },[data])

  return (
    <main className={styles.main}>
      <div className={styles.inputBox}>
        <input type="text" className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} />
        {
          toggleBtn ? 
          <button className={styles.addBtn} onClick={addData}>ADD</button>
          :
          <button className={styles.editBtn} onClick={addData}>Edit</button>
      }
      </div>
      <section className={styles.listItemsSection}>
        {
          data.map((lists) => {
            return (
              <div className={styles.list} key={lists.id}>
                <span>{lists.name}</span>
                <div className='flex gap-1'>
                <button className={styles.editBtn} onClick={() => editData(lists.id)}>Edit</button>
                <button className={styles.deleteBtn} onClick={() => deleteData(lists.id)}>Delete</button>
              </div>
              </div>
            )
          })
        }
      </section>
      <div><button className={styles.removeBtn} onClick={removeAll}>Remove All</button></div>
    </main>
  )
}

export default App
