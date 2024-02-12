interface Admin {
    title: string;
    pass: string
}

interface TeamRequest {
    title: string
    cost: number
    membersCount: number
}

interface Person {
    title: string
    cost: number
    specialization: "IT" | "CIO"
    avalable: boolean
}