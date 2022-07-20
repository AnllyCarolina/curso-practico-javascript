// const precioOriginal=100;
// const descuento=15;
function calcularPrecionConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100 -descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

 function onclicButtonPriceDiscount(){
    const inputPrice=document.getElementById("inputPrice")
    const priceValue =inputPrice.value;


    const inputDiscount=document.getElementById("inputDiscount")
    const discountValue =inputDiscount.value;
    const precioConDescuento=calcularPrecionConDescuento(priceValue, discountValue);

    const resultP=document.getElementById("resultP");
    resultP.innerText= "El precio con descuento son: $" + precioConDescuento;


 }


// const porcentajePrecioConDescuento=100-descuento;

// const precioConDescuento=(precioOriginal*porcentajePrecioConDescuento)/100;

// console.log({
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento,
// });
