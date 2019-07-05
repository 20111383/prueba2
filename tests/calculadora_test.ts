
import { Calculadora } from "../main";
// Pruebas unitarias
describe("Calculadora_test",()=>{
    it("sumar",() =>{
        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(5,8)
        let resEsperado = 13
        expect(resEsperado).toEqual(resObtenido)
    })
})