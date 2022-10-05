import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
  } from '@chakra-ui/react';

const Navigation = () => {

    const navigate = useNavigate();

    const changePage = (e) => {
        navigate(e.target.value)
    }

    return(
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Button onClick={changePage} value={"/"} colorScheme='blue'>Users</Button>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Button onClick={changePage} value={"adduser"} colorScheme='blue'>Add User</Button>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <Button onClick={changePage} value={"edituser"} colorScheme='blue'>Edit User</Button>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <Button onClick={changePage} value={"deleteuser"} colorScheme='blue'>Delete User</Button>
                </BreadcrumbItem>
            </Breadcrumb>
            <Outlet/>
        </>
    )
}

export default Navigation;