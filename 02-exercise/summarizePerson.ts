

const summarizePerson = (
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] => {

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`
    const hobbiesData = hobbies ? `${hobbies.join(', ')}` : '-'
    const workData = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-'
    

    return [
        id,
        fullName,
        age,
        hobbiesData,
        workData
    ]
}

console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
