import Departamento from "./departamento/departamento"
import empresa from "./empresa/empresa"

function inicializarEmpresa(){
    var Departamento1 = new Departamento() 
    Departamento1.AddColaborador("Renan", true)
    Departamento1.AddColaborador("Felipe", false)
    Departamento1.AddColaborador("Matheus", false)
    Departamento1.AddColaborador("Eduardo", false)
    Departamento1.AddColaborador("Pedro", false)

    var Departamento2 = new Departamento() 
    Departamento2.AddColaborador("Thiago", true)
    Departamento2.AddColaborador("Vinicius", false)
    Departamento2.AddColaborador("João", false)
    Departamento2.AddColaborador("Antonio", false)
    Departamento2.AddColaborador("Lucas", false)

    var Departamento3 = new Departamento() 
    Departamento3.AddColaborador("Rodrigo", true)
    Departamento3.AddColaborador("Fernando", false)
    Departamento3.AddColaborador("David", false)
    Departamento3.AddColaborador("Mikael", false)
    Departamento3.AddColaborador("Alan", false)

    var Departamento4 = new Departamento() 
    Departamento4.AddColaborador("Guilherme", true)
    Departamento4.AddColaborador("Natan", false)
    Departamento4.AddColaborador("Erick", false)
    Departamento4.AddColaborador("Enzo", false)
    Departamento4.AddColaborador("Ronaldo", false)

    var Departamento5 = new Departamento() 
    Departamento5.AddColaborador("Cristiano", true)
    Departamento5.AddColaborador("Carlos", false)
    Departamento5.AddColaborador("Otavio", false)
    Departamento5.AddColaborador("Bernardo", false)
    Departamento5.AddColaborador("Leandro", false)

    var Empresa = new empresa()
    Empresa.SetDepartamentos(Departamento1)
    Empresa.SetDepartamentos(Departamento2)
    Empresa.SetDepartamentos(Departamento3)
    Empresa.SetDepartamentos(Departamento4)
    Empresa.SetDepartamentos(Departamento5)
    return Empresa
}

function main(){    
    var Empresa = inicializarEmpresa()
    var Departamento1 = new Departamento() 
    Departamento1.AddColaborador("Renan", true)
    Departamento1.AddColaborador("Felipe", false)
    Departamento1.AddColaborador("Matheus", false)
    Departamento1.AddColaborador("Eduardo", false)
    Departamento1.AddColaborador("Pedro", false)

    // const Resposta0 = Empresa.FindDepartamentoWithDepartamento(Departamento1)
    // const Resposta1 = Empresa.FindDepartamentoWithIndex(0)
    // const Resposta2 = Empresa.FindSubordinados({Nome: "Renan", Gerente: true})
    const Resposta3 = Empresa.GetColaboradorDetail({Nome: "Renan", Gerente: true})
    
    console.log(Resposta3)
}

main();