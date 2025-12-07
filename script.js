
let container = document.querySelector('.container');

let data;
async function API_Task() {
    try {
       let response = await fetch("https://fakestoreapi.com/products");
       data = await response.json();
       return data;
    } catch (error) {
        throw error;
    }
}

async function pdata(w) {
    
    let Datap = await API_Task();
    
    if (w >= Datap.length) {
        return; 
    }

    let fproduct = Datap[w];

    let card = document.createElement('div');
    card.classList.add('card'); 

    let Img = document.createElement('img');
    Img.classList.add('img');
    let Title = document.createElement('h2');
    let Description = document.createElement('p');
    Description.classList.add('descrip');
    let Category = document.createElement('p');
    let Price = document.createElement('p');
    let Count = document.createElement('p');
    let Rate = document.createElement('p');

    Title.textContent = fproduct.title;
    Img.src = fproduct.image;
    Description.textContent = fproduct.description;
    Category.textContent =`Category :  ${fproduct.category}`;
    Price.textContent =`Price : $${fproduct.price}` ;
    Rate.textContent = `Rating : ${fproduct.rating.rate}(based on ${fproduct.rating.count} reviews)`;
    
    card.appendChild(Img);
    card.appendChild(Title);
    card.appendChild(Description);
    card.appendChild(Category);
    card.appendChild(Price);
    card.appendChild(Count);
    card.appendChild(Rate);
   
    container.appendChild(card);
}

for (let x = 0; x < 20; x++) {
    pdata(x);    
}