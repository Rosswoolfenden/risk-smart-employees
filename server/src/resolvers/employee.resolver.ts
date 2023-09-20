
import { PrismaClient } from "@prisma/client";
import { CreateEmployeeInput, UpdateEmployeeInput } from "../types";

const prisma = new PrismaClient();

const resolver = {
    Query: {
        employees: async () => await prisma.employee.findMany()
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