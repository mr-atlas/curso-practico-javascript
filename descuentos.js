/*const coupons = [ {
    name: "Bajo",
    dsct: 10,
},

{
    name: "Medio",
    dsct: 30,
},

{
    name:"Alto",
    dsct: 50,
},
]




function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;


    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 

    const InputCoupon = document.getElementById("InputCoupon");
    const userCouponValue = InputCoupon.value; 



const isCouponValueValid = function (coupon) {
    return coupon.name === userCouponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert ("El cupon " + userCouponValue + " no es valido");
} else {
    const dsct = userCoupon.dsct;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, dsct);

    const resulP = document.getElementById("ResultP");
    resulP.innerText = "El precio con descuento son: $ " + precioConDescuento;
}
}


*/





const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;


    const resulP = document.getElementById("ResultP");
    resulP.innerText = "El precio con descuento son: $ " + precioConDescuento;
    
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; 
    

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + " no es válido");
 } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
 } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
 } else if (couponValue === "es_un_secreto") {
    descuento = 25;
 }

 return calcularPrecioConDescuento(priceValue,descuento);

}



