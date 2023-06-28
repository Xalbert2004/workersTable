import React from 'react';

export default function UserList({ users, onDelete, onSalaryUp, onSalaryDown }) {
  return (
    <div>
        <h3>UserList</h3>
        <table border={"1px solid"}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((elm) => {
                        return (
                            <tr key={elm.id}>
                                <td>{elm.id}</td>
                                <td>{elm.name}</td>
                                <td>{elm.surname}</td>
                                <td>{elm.salary}</td>
                                <td>
                                    <button onClick={()=> onSalaryUp(elm.id)}>salary up</button>
                                    <button onClick={()=> onSalaryDown(elm.id)} >salary down</button>
                                    <button onClick={()=> onDelete(elm.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
