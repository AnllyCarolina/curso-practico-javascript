
//helpers
function esPar(numerito){
    
        return (numerito % 2 === 0);
    
}

function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function (valorAcumulado=0, nuevoElemeto){
            return valorAcumulado + nuevoElemeto;
        }
    );
const promedioLista=sumaLista/lista.length;
return promedioLista;

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad=parseInt(lista.length /2);


    if(esPar(lista.length)){

        const personMitad1=lista[mitad-1];
        const personMitad2=lista[mitad];

        const mediana=calcularMediaAritmetica([personMitad1,personMitad2]);
        return mediana;
        
    }else{
        const personMitad=lista[mitad];
        return personMitad;

}

  }
 

//mediana General
    }
    const salariosCol=colombia.map(
        function(person){
            return person.salary;
        }
    );
    
    
    const salariosColSorted=salariosCol.sort(
        function(salaryA, salaryB){
            return salaryA-salaryB;
    
        }
    );

const medianaGeneralCol=medianaSalarios(salariosColSorted);

//mediana deln top 10%

const spliceStart=(salariosColSorted.length*90)/100;
const spliceCount=salariosColSorted.length-spliceStart;
const salariosColTop10=salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col=medianaSalarios(salariosColTop10);

  console.log(
    medianaGeneralCol,
    medianaGeneralCol,
  );