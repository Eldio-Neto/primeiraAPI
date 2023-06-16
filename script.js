var url = 'https://economia.awesomeapi.com.br/json/USD-BRL'


function Converter(){
    let input = document.getElementById('valor');
    let valor = input.value;
    let Resultado = document.getElementById('resultado')

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{

        let valorDolar = data.USDBRL.high;
        let BRLUSD = Math.round((valor / valorDolar)*100) / 100

        if(valor == "" || valor == 0){

            alert('por favor digite um numero maior que 0')

        }
        else if(valor == 1){
            Resultado.innerHTML = `Com ${valor} real você consegue comprar ${BRLUSD} dolares`
            
        }
        
        else if(valor > 1){
            Resultado.innerHTML = `Com ${valor} reais você consegue comprar ${BRLUSD} dolares`
            
        }
    })     

    document.getElementById('valor').value = ""
    
}





