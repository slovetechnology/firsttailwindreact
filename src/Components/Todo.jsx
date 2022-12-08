import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todoid, setTodoid] = useState('')
    const [formstate, setFormstate] = useState(false)
    const [form, setForm] = useState({
        title: ''
    })
    const handleform = (e) => {
        e.persist()
        setForm({...form, [e.target.name]: e.target.value})
    }
    const saveForm = async(e) => {
        e.preventDefault()
        const data = {title: form.title}
        await axios.post('http://localhost:5000/api/todo/save', data).then(res => {
            if(res.data.status === 200) {
                Swal.fire({
                    title: 'Request Successful',
                    text: res.data.msg,
                    icon: 'success',
                    showConfirmButton: false
                })
                setForm({title: ''})
                alltodos()
            }else {
                Swal.fire({
                    title: 'Request Failed',
                    text: res.data.msg,
                    icon: 'error',
                    showConfirmButton: false
                })
            }
        }).catch(err => console.log(err))
    }
    const updateForm = async(e) => {
        e.preventDefault()
        const data = {title: form.title}
        await axios.put(`http://localhost:5000/api/todo/save/${todoid}`, data).then(res => {
            if(res.data.status === 200) {
                Swal.fire({
                    title: 'Request Successful',
                    text: res.data.msg,
                    icon: 'success',
                    showConfirmButton: false
                })
                setForm({title: ''})
                alltodos()
            }else {
                Swal.fire({
                    title: 'Request Failed',
                    text: res.data.msg,
                    icon: 'error',
                    showConfirmButton: false
                })
            }
        }).catch(err => console.log(err))
    }

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todo/${id}`)
        .then(res => {
            if(res.data.status === 200) {
                alltodos()
            }
        })
    }

    const editTodo = async (id) => {
        const res = await axios.get(`http://localhost:5000/api/todo/${id}`)
        setForm({title: res.data.msg.title})
        setTodoid(res.data.msg._id)
        setFormstate(true)
    }
    const alltodos = useCallback(async () => {
            await axios.get('http://localhost:5000/api/todo')
            .then(res => {
                setTodos(res.data.msg)
            })
    }, [])

    useEffect(() => {
        alltodos()
    }, [alltodos])

    const activeformstate = () => {
        if(!formstate) { setFormstate(true) }else{ 
            setFormstate(false)
            setTodoid('')
            setForm({title: ''})
        }
    }
  return (
   <>
    <div className='w-full h-screen bg-slate-200 mt-24'>
        <div className="w-full md:w-2/3 mx-auto">
            <div className="h-screen p-3">
                <div className="text-end">
                    <button className={`py-2 text-white text-sm rounded-lg px-4 text-semibold shadow-xl ${!formstate ? 'bg-orange-500 hover:bg-orange-600' : 'bg-red-500 hover:bg-red-600'}`} onClick={activeformstate}>{!formstate ? 'Add New' : 'Close'}</button>
                </div>
                <div className={`mt-4 border-2 border-slate-300 rounded-xl p-3 ${formstate ? '' : 'hidden'}`}>
                    <form onSubmit={!todoid ? saveForm : updateForm}>
                        <div className="mb-3">
                            <input type="text" name="title" className="border w-full focus:outline-none rounded-lg py-2 pl-3" onChange={handleform} value={form.title} placeholder='Enter Title' />
                        </div>
                        <div className="text-end">
                            <button className='py-2 px-5 text-sm bg-green-600 rounded-sm font-semibold uppercase text-white'>{!todoid ? 'save' : 'update'}</button>
                        </div>
                    </form>
                </div>
                {/* all todos */}
                <div className="mt-5 overflow-y-auto h-[69vh]">
                {todos && todos.map((item, index) => (
                    <div className="flex justify-between py-2 mb-3 border-[1px] px-2 rounded-lg border-gray-300" key={index}>
                        <div className=""> {item.title} </div>
                        <div className="flex gap-6">
                            <button className='py-1 px-4 bg-blue-600 text-sm text-white rounded-full' onClick={() => editTodo(item._id)}>Edit</button>
                            <button className='py-1 px-4 bg-red-600 text-sm text-white rounded-full' onClick={() => deleteTodo(item._id)}>Delete</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Todo