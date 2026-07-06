export type LeadPole = "it" | "cosmetics" | "recruitment"

export interface LeadPayload {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    pole: LeadPole
    intent?: "quote"
    locale: string
}

export interface ApplicationPayload {
    name: string
    email: string
    phone: string
    position: string
    message: string
    locale: string
}
