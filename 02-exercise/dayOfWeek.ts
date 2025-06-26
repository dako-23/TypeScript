

const dayOfWeek = (day: number): void => {

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(Days[day] || 'error');
}

dayOfWeek(8)