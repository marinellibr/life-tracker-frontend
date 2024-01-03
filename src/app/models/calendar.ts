export interface Calendar{
    month: string,
    days: Days[]
}

export interface Days{
    day: number,
    anxietyLog: string,
    dailyLog: string,
    exerciseLog: string,
    healthLog: string,
    hobbyLog: string,
    sexualLog: string,
    sleepLog: string,
    workLog: string
}