import {getChildById, isArrayEqual, sortByCouples} from './../util'
import {ICouple, IPerson} from './../typings'

describe('Util', () => {
    it('should return true if the items in both arrays are equal', () => {
        const array1 = [213,234,345,3456456,34,7899,-1]
        const array2 = [213,234,345,3456456,34,7899,-1]
        expect(isArrayEqual(array1,array2)).toBeTruthy()
    })

    it('should return false if the items in both arrays are NOT equal', () => {
        const array1 = [213,234 ,34,7899,-1]
        const array2 = [213,234,345,345,34,7899,-1]
        expect(isArrayEqual(array1,array2)).toBeFalsy()
    })

    it('should return the child with the child id', () => {
        expect(getChildById(1231239887112, familyTree)).toBeDefined()
    })

    it('should return couples with their children', () => {
        const couples : ICouple[]  = sortByCouples(familyTree)
        expect(couples[0].parent1).toBeDefined()
        expect(couples[0].parent2).toBeDefined()
        expect(couples[0].children.length).toBe( 1 )
        expect(couples[0].children[0].gender ).toBe( 'female' )
    })
})

 const  familyTree :  IPerson[] = [
    {
        id: 2351232112252,
        name: "Sally",
        children: [5555, 6666, 7777, 8458189966444, 897543276547654765443576],
        gender: "female",
        parents: []
    },
    {
        id: 1231239887112,
        name: "Billy",
        children: [8458189966444, 5555, 6666, 7777, 897543276547654765443576],
        gender: "male",
        parents: [],
    },
    {
        id: 7777,
        name: "Suzie",
        gender: "female",
        children: [317849882, 8569047194214199353],
        parents: [2351232112252, 1231239887112],
    },
    {id: 23123122, name: "Sam", gender: "male", children: [317849882, 8569047194214199353], parents: []},
]

