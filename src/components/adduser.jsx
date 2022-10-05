import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Stack } from '@chakra-ui/react';
import axiosInstance from '../axios';
import {useQueryClient, useMutation} from 'react-query';




const AddUser = () => {

  const queryClient = useQueryClient()

  const { control, handleSubmit } = useForm();

  const addUser = async data => {
    const response = await axiosInstance.post(data);
    return response;
  };

  const { mutate, isLoading } = useMutation(addUser, {
    onSuccess: data => {
      console.log(data);
      const message = "success"
      alert(message)
    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });

  const onSubmit = data => {
    const user = {
      ...data
    };
    mutate(user);
  };
   
  return (
    <Stack padding={'24px'}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input placeholder="first name" {...field} />}
            />
            <Controller
            name="lastName"
            control={control}
            render={({ field }) => <Input placeholder="last name" {...field} />}
            />
            <Controller
            name="birthdate"
            control={control}
            render={({ field }) => <Input type={'date'} {...field} />}
            />
            <Controller
            name="email"
            control={control}
            render={({ field }) => <Input placeholder="email" type={'email'} {...field} />}
            />
            <Controller
            name="submit"
            control={control}
            render={({ field }) => <Input type={'submit'} {...field} />}
            />
        </form>
    </Stack>
  );
}

export default AddUser;