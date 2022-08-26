import axios from 'axios'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Employees(){

  const [employees,setEmployees] = useState([])
  const [name,setName] = useState('')
  const [designation,setDesignation] = useState('')
  const [addFlag,setAddFlag] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:4000/employees').then((res) => {setEmployees(res.data)})
  },[])

  let handleDelete = (id) => {
    axios.delete('http://localhost:4000/employees/' + id ).then((res) =>{
      axios.get('http://localhost:4000/employees').then((res) =>{
        setEmployees(res.data)
      })
    })
  }

  let addEmployeee = (e) => {
    e.preventDefault()
    let newEmployee = {
      name:name, designation:designation
    }
    axios.post('http://localhost:4000/employees', newEmployee).then((res) =>{
      setEmployees([...employees,res.data])
    })
  }

  return(<>
  <h1>Employee Data</h1>
  <table style={{width:"60%"}}class="table table-bordered">
    <thead>
      <tr>
      <th>Emp Id</th>
      <th>Emp name</th>
      <th>Emp designation</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        employees.map((emp) => {
          return(<tr>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.designation}</td>
            <td><button onClick={()=>handleDelete(emp.id)} >Delete</button></td>
            </tr>)
        })
      }
    </tbody>
  </table>
  <button onClick={()=>setAddFlag(!addFlag)}>
      Add Employee
  </button>

{
  addFlag ? (<form>
      Name<input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
      Designation<input type="text" value={designation} onChange={(e) => {setDesignation(e.target.value)}}></input>
      <button type="submit" onClick={addEmployeee}>submit</button>
  </form>) : null

}

</>)
}

export default Employees;



