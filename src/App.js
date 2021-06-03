import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')


  return (
    <div className="app">
      <div className="container-fluid mt-5">
        <h1 className="heading">To do list</h1>
        <h5 className="sub-heading">Whoop its Wednesday ☕ </h5>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <h5 className="sub-heading">Create tasks  </h5>
            <div className="input">
              <input onChange={(e) => { setTodo(e.target.value) }} value={todo} type="text" className="input-text" name="" id="" />
              <i onClick={() =>
                setTodos([...todos, { id: Date.now(), name: todo, donestatus: false, rejstatus: false }])
              } className="fa fa-plus"></i>
            </div>
            {
              todos.map((item) => {
                if (!item.rejstatus && !item.donestatus) {
                  return (
                    <div className="row mt-3 todos ">
                      <div className="col-12 ">
                        <div className="d-flex justify-content-between ">
                          <div>
                            {/* Start here */}
                            <input value={item.status} onChange={
                              (eve) => {
                                setTodos(
                                  todos.filter(obj => {
                                    if (item.id === obj.id) {
                                      obj.donestatus = eve.target.checked
                                    }
                                    return obj
                                  })
                                )
                              }
                            } className="ml-3" type="checkbox" name="" id="" />
                            {/* End here */}
                            <label className="ml-3" >{item.name}</label>
                          </div>
                          <div className="mr-5">
                            <i onClick={(e) => {

                              setTodos(
                                todos.filter(obj => {
                                  if (obj.id === item.id) {
                                    obj.rejstatus = true;
                                  }
                                  return obj
                                })
                              )
                              console.log(item);
                            }} className="fas fa-times"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })

            }


          </div>

          <div className="col-sm-6 col-lg-4" >
            <h5 className="sub-heading">Completed tasks </h5>

            {
              todos.map((item) => {
                if (item.donestatus) {
                  return (
                    <div className="row mt-3 todos ">
                      <div className="col-12 ">
                        <div className="d-flex justify-content-between ">
                          <div>
                            <input checked className="ml-3" type="checkbox" name="" id="" />
                            <label className="ml-3" >{item.name}</label>
                          </div>
                          <div className="mr-5">
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })

            }
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="sub-heading">Cancelled tasks </h5>

            {
              todos.map((item) => {
                if (item.rejstatus) {
                  return (
                    <div className="row mt-3 todos ">
                      <div className="col-12 ">
                        <div className="d-flex justify-content-between ">
                          <div>
                            <input value={item.status} className="ml-3" type="checkbox" name="" id="" />
                            <label className="ml-3" style={{ textDecoration: "line-through" }} >{item.name}</label>
                          </div>
                          <div className="mr-5">
                            <i onClick={(e) => {

                              setTodos(
                                todos.filter(obj => {
                                  if (obj.id === item.id) {
                                    obj.rejstatus = false;
                                  }
                                  return obj
                                })
                              )
                              console.log(item);
                            }} className="fas fa-times"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })

            }
          </div>
        </div>
      </div>

    </div >

  );
}

export default App;
