"use strict";
const summarizePerson = (id, firstName, lastName, age, middleName, hobbies, workInfo) => {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesData = hobbies ? `${hobbies.join(', ')}` : '-';
    const workData = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    return [
        id,
        fullName,
        age,
        hobbiesData,
        workData
    ];
};
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
//# sourceMappingURL=summarizePerson.js.map