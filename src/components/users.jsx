import React from "react";
import { useQuery } from 'react-query';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
  import axiosInstance from '../axios';


  const getUsers = async () => {
    const response = await axiosInstance.get();
    return response.data;
    };



const Users = () => {

    const users = useQuery('users', getUsers);

    return(
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Surname</Th>
                        <Th>Birthday</Th>
                        <Th>Email</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                           users && users.map( user => (
                            <>
                                <Tr>
                                    <Td>{user.firstname}</Td>
                                    <Td>{user.lastname}</Td>
                                    <Td>{user.birthdate}</Td>
                                    <Td>{user.email}</Td>
                                </Tr>
                            </>
                           ) 
                           )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Users;