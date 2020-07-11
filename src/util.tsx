import {ICouple, IPerson} from "./typings"

export const getChildById = (childId: number, people: IPerson[]): any =>
   people.find((child: IPerson) => child.id === childId)

export const isArrayEqual = (array1: number[], array2: number[]) => {
    if (array1.length !== array2.length) return false
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true
}

export const sortByCouples = (people: IPerson[]): ICouple[] => {
    const couples: ICouple[] = []
    people.forEach((parent1) => {
        people.forEach((parent2) => {
            if (parent1 !== parent2 &&
                isArrayEqual(
                    parent1.children.sort(),
                    parent2.children.sort())
            ) {
                const children = parent2.children.map(
                    (id) =>
                        getChildById(id, people))
                    .filter((child) => child !== undefined)

                couples.push({
                    parent1,
                    parent2,
                    children
                })
            }
        })
    })
    return couples
}