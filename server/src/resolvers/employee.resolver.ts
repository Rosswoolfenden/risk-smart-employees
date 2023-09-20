
import { PrismaClient } from "@prisma/client";
import { CreateEmployeeInput, UpdateEmployeeInput } from "../types";

const prisma = new PrismaClient();
const resolver = {
    Query: {
        employees: async ( _: unknown, args: { search: string  }): Promise<any> => {
            let employees;
            if(!args.search) {
                employees =  prisma.employee.findMany();
            }
            else {
                employees = await prisma.employee.findMany({
                    where: {
                        OR: [
                            {
                                email: {
                                    startsWith: args.search,
                                }
                            },
                            {
                                firstName: {
                                    startsWith: args.search,
                                }
                            },
                            {
                                familyName: {
                                    startsWith: args.search,
                                }
                            },
                            {
                                position: {
                                    startsWith: args.search,
                                }
                            },
                            {
                                email: {
                                    contains: args.search,
                                    mode: 'insensitive',
                                }
                            },
                            {
                                firstName: {
                                    contains: args.search,
                                    mode: 'insensitive',
                                }
                            },
                            {
                                familyName: {
                                    contains: args.search,
                                    mode: 'insensitive',
                                }
                            },
                            {
                                position: {
                                    contains: args.search,
                                    mode: 'insensitive',
                                }
                            }
                        ]
                    }
                });
            }
            return employees;
        }
    },
    Mutation: {
        createNewEmployee: async (
            _: unknown,
            args: { 
                eid: number
                email: string
                firstName: string
                familyName: string
                position: string
                knowAs?:  string
             }
        ) => {
            return prisma.employee.create({
                data: {
                    email: args.email,
                    firstName: args.firstName,
                    familyName: args.familyName,
                    position: args.position,
                    knowAs: args.knowAs,
                    dateJoined: new Date()
                }
            });
        },

        deleteEmployee:  async (
            _:unknown,
            args: { eid: number }
        ) => {
            return prisma.employee.delete({
                where: { eid: args.eid }
            });
        },

        updateEmployee:  async ( 
            _:unknown, 
            args: { 
                eid: number
                email?: string
                firstName?: string
                familyName?: string
                position?: string
                knowAs?:  string
             }
        ) => {
            return prisma.employee.update({
                where: { eid: args.eid },
                data: {
                    email: args.email,
                    firstName: args.firstName,
                    familyName: args.familyName,
                    position: args.position,
                    knowAs: args.knowAs,
                }
            })
        }
    }
}

export default resolver;