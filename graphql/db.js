export const people = [
    {
        id: '0',
        name: 'soohyun',
        age: 31,
        gender: 'male'
    },
    {
        id: '1',
        name: 'nico',
        age: 13,
        gender: 'male'
    },
    {
        id: '2',
        name: 'nico22',
        age: 14,
        gender: 'male'
    },
    {
        id: '3',
        name: 'nico33',
        age: 15,
        gender: 'male'
    },
    {
        id: '4',
        name: 'nico44',
        age: 165,
        gender: 'male'
    },
    {
        id: '5',
        name: 'nico55',
        age: 161,
        gender: 'male'
    },
    {
        id: '6',
        name: 'nico66',
        age: 17,
        gender: 'male'
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}