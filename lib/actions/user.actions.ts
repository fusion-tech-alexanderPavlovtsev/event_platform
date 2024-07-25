'use server';

import { CreateUserParams } from "@/types";

export const createUser = async (user: CreateUserParams) => {
    return {
        message: 'User Created'
    }
}