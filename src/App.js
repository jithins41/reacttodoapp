import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')


  return (
    <div className="app">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <h1 className="heading">To do list</h1>
            <h5 className="sub-heading">Whoop its Wednesday ☕ </h5>
            <div className="input">
              <input onChange={(e) => { setTodo(e.target.value) }} value={todo} type="text" className="input-text" name="" id="" />
              <i onClick={() => setTodos([...todos, {id:Date.now(), name:todo,status:false}])} className="fa fa-plus"></i>
            </div>
            {
              todos.map((item) => {
                return (
                  <div className="row mt-3 todos ">
                    <div className="col-12 ">
                      <div className="d-flex justify-content-between ">
                        <div>
                          <input value={item.status} className="ml-3" type="checkbox" name="" id="" />
                          <label className="ml-3" >{item.name}</label>
                        </div>
                        <div className="mr-5">
                          <i onClick={(e)=>{
                            
                          }} className="fas fa-times"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })

            }


          </div>

          {/* <div className="col-sm-6 col-lg-3" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="col-sm-6 col-lg-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="col-sm-6 col-lg-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div> */}
        </div>
      </div>

    </div>

  );
}

export default App;
