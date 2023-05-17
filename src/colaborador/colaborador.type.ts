export interface colaborador{
    Nome: string,
    Gerente: boolean
}

export interface colaboradorDetail{
    Gerente: string,
    Departamento: colaborador[]
}
