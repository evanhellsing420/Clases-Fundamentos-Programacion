const price = 5000;
const age = 20;
const hasCoupon = true;
const couponDiscount = 10;
const hasStudentId = true;

if ( age < 12 ) {
    const finalPrice = 0;
    console.log ('Descuento menor de 12 anos: ' + finalPrice);
} else if ( age > 65 ) {
    const discount = price * 40/100;
    const finalPrice = price - discount;
    console.log ('Descuento mayor de 65 anos: ' + finalPrice);
} else if ( hasStudentId == true) {
    const discount = price * 25/100;
    const finalPrice = price - discount;
    console.log ('Descuento estudiante: ' + finalPrice);
} else if ( hasCoupon == true) {
    const discount = price * couponDiscount/100;
    const finalPrice = price - discount;
    console.log ('Descuento cupón: ' + finalPrice);
} else { 
    const finalPrice = price;
    console.log ('Sin descuento: ' + finalPrice);
}