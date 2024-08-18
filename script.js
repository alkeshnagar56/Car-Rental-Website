let selectCar = document.querySelector('#car_Input');
let carBudget = document.querySelector('#carBudget');
let SearchButton = document.querySelector('#Car_Search');
let Name, LastName, email, contactNo, PickDate, PickTime, DropDate, DropTime;

let ContactCar = document.querySelector('#ContactCar');
let ContactBudget = document.querySelector('#ContactBudget');
let ContactSubmit = document.querySelector('#ContactSubmit');
let personalInfo = [];



function ShopRent(){
let ShopRent1 = document.querySelector('#shopRent1');

ShopRent1.addEventListener('click', ()=>{
    alert('...Please Fill the Form...')
    return 0;
}) 

let ShopRent2 = document.querySelector('#shopRent2');

ShopRent2.addEventListener('click', ()=>{
    alert('...Please Fill the Form...')
    return 0;
}) 

let ShopRent3 = document.querySelector('#shopRent3');

ShopRent3.addEventListener('click', ()=>{
    alert('...Please Fill the Form...')
    return 0;
}) 

let ShopRent4 = document.querySelector('#shopRent4');

ShopRent4.addEventListener('click', ()=>{
    alert('...Please Fill the Form...')
    return 0;
}) 

let ShopRent5 = document.querySelector('#shopRent5');

ShopRent5.addEventListener('click', ()=>{
    alert('...Please Fill the Form...')
    return 0;
}) 

let ShopRent6 = document.querySelector('#shopRent6');

ShopRent6.addEventListener('click', ()=>{
    alert('...Please Fill the Form...')
    return 0;
}) 


}
function CarSearch(){
    let carValue = selectCar.value;
    if(carValue==='Choose Your Favrioute Car'){
        carBudget.value='Select Car First';
    }
    else if(carValue==='BMW M5'){
        carBudget.value='240$ day';
    }
    else if(carValue==='Lamborghini Huracan'){
        carBudget.value='540$ day';

    }
    else if(carValue==='GTR35'){
        carBudget.value='300$ day';

    }
    else if(carValue==='Dodge Challenger'){
        carBudget.value='350$ day';

    }
    else if(carValue==='Mercedes AMG GT'){
        carBudget.value='480$ day';

    }
    else if(carValue==='Lamborghini Urus'){
        carBudget.value='290$ day';
    }
}
function CarSearch2(){
    let carValue = ContactCar.value;
    if(carValue==='Select The Car'){
        ContactBudget.value='Select Car First';
    }
    else if(carValue==='BMW M5'){
        ContactBudget.value='240$ day';
    }
    else if(carValue==='Lamborghini Huracan'){
        ContactBudget.value='540$ day';

    }
    else if(carValue==='GTR35'){
        ContactBudget.value='300$ day';

    }
    else if(carValue==='Dodge Challenger'){
        ContactBudget.value='350$ day';

    }
    else if(carValue==='Mercedes AMG GT'){
        ContactBudget.value='480$ day';

    }
    else if(carValue==='Lamborghini Urus'){
        ContactBudget.value='290$ day';
    }
}

SearchButton.addEventListener('click', ()=>{
    CarSearch();
});

ShopRent();

ContactSubmit.addEventListener('click', ()=>{
    CarSearch2();
    values();
    localStorage.setItem('personalInfo',JSON.stringify(personalInfo));
    alert('..Your Information Is Saved In Local Storage..' + '\n' + '..Car will Be Booked And We Will Contact YOU..' + '\n' + '..Have a Safe Journey..' + '\n' + '...ThankYou For Choosing Rent RideHub...');
    }
);

ContactCar.addEventListener('click', ()=>{
    CarSearch2();
})


function values(){
    Name = document.querySelector('#FirstName');
    LastName = document.querySelector('#LastName');
    email = document.querySelector('#email');
    contactNo = document.querySelector('#contactNo');
    PickDate = document.querySelector('#PickDate');
    PickTime = document.querySelector('#pickTime');
    DropDate = document.querySelector('#DropDate');
    DropTime = document.querySelector('#DropTime');


    personalInfo[0] = Name.value;
    personalInfo[1] = LastName.value;
    personalInfo[2] = email.value;
    personalInfo[3] = contactNo.value;
    personalInfo[4] = PickDate.value;
    personalInfo[5] = PickTime.value;
    personalInfo[6] = DropDate.value;
    personalInfo[7] = DropTime.value;
    personalInfo[8] = ContactCar.value;
    personalInfo[9] = ContactBudget.value;


}