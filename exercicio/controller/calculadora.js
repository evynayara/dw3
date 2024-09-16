const fSoma = (num1, num2) => parseInt(num1) + parseInt(num2);
const fSub = (num1, num2) => parseInt(num1) - parseInt(num2);
const fMult = (num1, num2) => parseInt(num1) * parseInt(num2);
const fDiv = (num1, num2) => parseInt(num1) / parseInt(num2);

const resulcalc = (request, res) => (async () =>{
   const { num1, num2, operacao } = request.body
   let resultado = '';

   if(operacao == "+"){
       resultado = fSoma(num1, num2);
   }else{
       if(operacao == "-"){
           resultado = fSub(num1, num2);
       }else{
           if(operacao == "*"){
               resultado = fMult(num1, num2);
           }else{
               if(operacao == "/"){
                   resultado = fDiv(num1, num2);
               }else{
                   resultado = "Valor inválido.";
               }
           }
       }
   }

   res.json({ status: "ok", "Número 1:": num1, "Número 2:" : num2, "Operação: ": operacao, "Resultado:" : resultado });
} )();
   
module.exports = {
   resulcalc
}