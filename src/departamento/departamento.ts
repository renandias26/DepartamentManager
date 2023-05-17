import {colaborador} from "../colaborador/colaborador.type"

class Departamento{
    private Colaboradores: colaborador[] = new Array<colaborador>()

    public GetColaboradores(): colaborador[]{
        return this.Colaboradores
    }

    public AddColaborador(Nome: string, Gerente: boolean): boolean{
        if (this.Colaboradores.length > 5){
            return false
        }
        if(Gerente){
            const TemGerente = this.Colaboradores.some(item=>{item.Gerente})
            if (TemGerente){
                return false
            }
        }
        const Colaborador: colaborador = {Nome: Nome, Gerente: Gerente}
        this.Colaboradores.push(Colaborador)
        return true
    }

    public GetSubordinados(){
        return this.Colaboradores.filter(item=>{
            return !item.Gerente
        })
    }
}

export default Departamento