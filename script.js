
const prom = prompt('Enter Your Amount')

const url = new URL('https://random-data-api.com/api/v2/users')
let params = new URLSearchParams()
 params.set('size', prom)
 params.set ('response_type' , 'json');
 url.search = params;
 
function fastCheck (){
    fetch (url) 
    .then(respose => respose.json())
    .then(result => {
        const fastText = document.querySelector('.fastText')
        fastText.innerHTML = result.map((fast)=>{
            // console.log(fast);
            return `<div class="fastText">
                <div class="card">
                    <img src="${fast.avatar}" alt="">
                    <h4 class="name">Name: ${fast.first_name + fast.last_name}</h4>
                    <code class="number"> Number: ${fast.phone_number}</code>
                    <p>Gender:  ${fast.gender}</p>
                    <p>Date Of Barth :  ${fast.date_of_birth}</p>
                    <p>Email :  ${fast.email}</p>
                    <p>Password :  ${fast.password}</p>
                </div>
            </div>`
        })
        
    })
    .then(error =>{console.log(error)})

}
fastCheck()