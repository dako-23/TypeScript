
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const reverseDayOfWeek = (dayName: string): void => {

    console.log(Days[dayName as keyof typeof Days] || 'error');

}

reverseDayOfWeek('Monday')
