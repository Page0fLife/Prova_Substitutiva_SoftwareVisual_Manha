namespace API.Utils
{
    public class Calculo{
        public static double CalcularImc(double peso, double altura) => peso/(altura*altura);

        public static string ClassificacaoImc(double imc){
            if (imc>40) return "Obesidade Grave"; 
            if (imc>30) return "Obesidade"; 
            if (imc>25) return "Sobrepeso"; 
            if (imc>=18.5) return "Normal"; 
            return "Magreza";
        }
    }
}