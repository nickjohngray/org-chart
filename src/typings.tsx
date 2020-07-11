export interface IPerson {
    readonly id: number
    readonly name: string
    readonly children: number[]
    readonly gender: string
    readonly parents: number[]
}

export interface ICouple {
    parent1: IPerson
    parent2: IPerson
    children: IPerson[]
}