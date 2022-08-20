export interface UserData {
   type: string,
   counterAgent: string,
   details: string,
   amount: string
}

export interface HasFormatting {
   format(): string
}