export interface Advisor {
    id: number,
    name: string,
    mail: string,
    phone: string
}

export interface Destinatary {
    id: number,
    name: string,
    importe: number,
    dueDate: string,
    settled: boolean,
    advisor: Advisor
}
