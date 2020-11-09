import { IUsers } from "../interfaces/interfaces";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function postUser(user: IUsers) {
    return await prisma.users.create({ data: user });
}

export async function getUsers() {
    return await prisma.users.findMany();
}
