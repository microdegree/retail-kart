import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
const DeleteUser = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div style={{ backgroundColor:'#0000CC',padding:'30px'}}>
        <center> 
        <Card style={{ width: '38rem' }}>
        <Card.Body>
        <Card.Title>Delete Users </Card.Title>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <ol>
                        {allUsers.map(user =>
                            <Link to={{
                                pathname: `/superAdminDashboard/modal/deleteUser`,
                                userData: user
                            }}> <li key={user._id}>{user.name}</li></Link>
                        )}
                    </ol>
                </td>
                <td>
                        {allUsers.map(user =>
                            <Link to={{
                                pathname: `/superAdminDashboard/modal/deleteUser`,
                                userData: user
                            }}> <li key={user._id}> {user.email}</li></Link>
                        )}
                    
                </td>
                <td>
                        {allUsers.map(user =>
                            <Link to={{
                                pathname: `/superAdminDashboard/modal/deleteUser`,
                                userData: user
                            }}> <li key={user._id}>{user.role}</li></Link>
                        )}
                </td>
                </tr>
            </tbody>
        </Table>
        </Card.Body>
        </Card>
        </center> 
    </div>
    )

    async function getAllUsers() {
        console.log('In SUperAdmin getAllUsers ')
        fetch('/api/superAdmin/getAllUsers')
            .then(response => response.json())
            .then(data => {
                setAllUsers(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default DeleteUser
