import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id
      name
      email
      age
    }
  }
`;

const ADD_STUDENTS = gql `
    mutation AddStudent($id: Int!, $name: String!, $email: String!, $age: Int!){
        addStudent(
            input: {id: $id, name: $name, email: $email, age: $age}
        ){
            id
            name
            email
            age
        }
    }    
`

const Students = () => {
    const { loading, error, data } = useQuery(GET_STUDENTS);
    const [updateStudent] = useMutation(ADD_STUDENTS);

    if(loading)
        return <h1>Loading ...</h1>

    if(error)
        return <h1>Error</h1>
        
    const {students} = data;

    return (
    <>
        <h1>Student List</h1>
        <table border="2" width="400">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {students.map(std => {
                    return(
                        <tr key={std.id}>
                            <td>{std.name}</td>
                            <td>{std.email}</td>
                            <td>{std.age}</td>
                        </tr>
                    )
                })}
            </tbody> 
        </table>
        <button type="submit" 
        onClick={() => 
            updateStudent({variables: {id: 3, name:"Ameen", email:"ameen@gmail.com", age:23}})
        }>Update Student</button>
    </>
    )
}

export default Students;
