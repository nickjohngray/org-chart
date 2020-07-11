import React, {FC} from 'react'
import {familyTree} from './data.js'
import './tree.css'
import {ICouple, IPerson} from './typings'
import {sortByCouples} from './util'

const Tree: FC = () => {
    const couples: ICouple[] = sortByCouples(familyTree as IPerson[])
    return (
        <div>
            <div className='family-true'>
                Family Tree
            </div>
            <div className='tree'>
                {makeCouple(couples[0], couples)}
            </div>
        </div>
    )
}
const makeCouple = (couple: ICouple, couples: ICouple[]) =>
    <div className='family'
         key={`family_${couple.parent1.id}_${couple.parent1.id}`}>
        <div className='parents'
             key={`parents_${couple.parent1.id}_${couple.parent1.id}`}>
            {makePerson(couple.parent1)}
            {makePerson(couple.parent2)}
        </div>
        {couple.children.length > 0 && makeChildren(couple, couples)}
    </div>

const makeChildren = (couple: ICouple, couples: ICouple[]) =>
    <div className='kids'
         key={`kids_${couple.parent1.id}_${couple.parent2.id}`}>
        {couple.children.map((child: IPerson) => {
            if (child.children.length === 0) {
                return makePerson(child)
            } else {
                const parents = couples.find(
                    (c: ICouple) => c.parent1.id === child.id
                        || c.parent2.id === child.id)
                return parents ? <div
                    key={`couple_parent_node${parents.parent1.id}_${parents.parent2.id}`}>
                    {makeCouple(parents, couples)}
                </div> : <></>
            }
        })}
    </div>

const makePerson = (person: IPerson) =>
    <div className='person'
         key={`person_${person.id}`}
         style={person.gender === 'male' ? style.male : style.female}>
        {person.name}
    </div>

export default Tree

const style = {
    male: {
        backgroundColor: 'rgb(241,249,253,70%)',
        border: '20 px solid rgb(241,249,253,70%)'
    },
    female: {
        backgroundColor: 'rgb(251,234,241,70%)',
        border: '20 px solid rgb(251,234,241,70%)'
    }
}