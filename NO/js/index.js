const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const gon = document.querySelector('.gon');
const vag = document.querySelector('.vag');

plus.addEventListener('click',function(){
    const fastinp = document.querySelector('#fastinp').value;
    const secondinp = document.querySelector('#secondinp').value;
    const result = document.querySelector('.result');
    // alert('fast')
   let plusresult = parseInt(fastinp) + parseInt(secondinp)
//    console.log(plusresult)
   result.innerHTML = plusresult ;
})

minus.addEventListener('click',function(){
    const fastinp = document.querySelector('#fastinp').value;
    const secondinp = document.querySelector('#secondinp').value;
    const result = document.querySelector('.result');

   let plusresult = fastinp - secondinp
   result.innerHTML = plusresult ;
})
gon.addEventListener('click',function(){
    const fastinp = document.querySelector('#fastinp').value;
    const secondinp = document.querySelector('#secondinp').value;
    const result = document.querySelector('.result');

   let plusresult = fastinp * secondinp
   result.innerHTML = plusresult ;
})
vag.addEventListener('click',function(){
    const fastinp = document.querySelector('#fastinp').value;
    const secondinp = document.querySelector('#secondinp').value;
    const result = document.querySelector('.result');

   let plusresult = fastinp / secondinp
   result.innerHTML = plusresult ;
})