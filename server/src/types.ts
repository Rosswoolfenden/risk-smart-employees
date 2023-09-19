export interface CreateEmployeeInput {
    firstName: string
    familyName: string
    dateJoined?: Date
    knowAs?: string
    position: string
    email: string
}

export interface UpdateEmployeeInput {
    eid: number
    firstName?: string
    familyName?: string
    dateJoined?: Date
    knowAs?: string
    position?: string
    email?: string
}