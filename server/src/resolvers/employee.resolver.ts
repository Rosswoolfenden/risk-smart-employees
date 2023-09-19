
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
            args: { data : CreateEmployeeInput }
        ) => {
            return prisma.employee.create({
                data: {
                    email: args.data.email,
                    firstName: args.data.firstName,
                    familyName: args.data.familyName,
                    position: args.data.position,
                    knowAs: args.data.knowAs,
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
            args: { data: UpdateEmployeeInput }
        ) => {
            return prisma.employee.update({
                where: { eid: args.data.eid },
                data: {
                    email: args.data.email,
                    firstName: args.data.firstName,
                    familyName: args.data.familyName,
                    position: args.data.position,
                    knowAs: args.data.knowAs,
                    dateJoined: new Date()
                }
            })
        }
    }
}

export default resolver;