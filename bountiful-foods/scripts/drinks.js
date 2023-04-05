fetch("fruit-data.json")
        .then(response => response.json())
        .then(data => {
          // Get select elements
          const select1 = document.getElementById('fruit1');
          const select2 = document.getElementById('fruit2');
          const select3 = document.getElementById('fruit3');

          // Populate select elements with options
          data.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.id;
            option.text = fruit.name;
            select1.appendChild(option);

            const option2 = document.createElement('option');
            option2.value = fruit.id;
            option2.text = fruit.name;
            select2.appendChild(option2);

            const option3 = document.createElement('option');
            option3.value = fruit.id;
            option3.text = fruit.name;
            select3.appendChild(option3);
        });
    });

    //form output
    document.querySelector('#drinkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const fruit1 = document.querySelector('#fruit1').value;
    const fruit2 = document.querySelector('#fruit2').value;
    const fruit3 = document.querySelector('#fruit3').value;
    const specialInstructions = document.querySelector('#instructions').value;
      
    const orderDate = new Date().toLocaleString();
    
    fetch("fruit-data.json")
        .then(response => response.json())
        .then(data => {
            const fruits = data.filter(fruit => {
                return fruit.id == fruit1 || fruit.id == fruit2 || fruit.id == fruit3;
            });
  
            const totalNutrition = fruits.reduce((total, fruit) => {
                total.carbohydrates += fruit.nutritions.carbohydrates;
                total.protein += fruit.nutritions.protein;
                total.fat += fruit.nutritions.fat;
                total.calories += fruit.nutritions.calories;
                total.sugar += fruit.nutritions.sugar;
                return total;
            }, {
                carbohydrates: 0,
                protein: 0,
                fat: 0,
                calories: 0,
                sugar: 0
            });
  
            const output = `
            <div><h2>Your Order:</h2></div>
            <div>Name: ${firstName}</div>
            <div>Email: ${email}</div>
            <div>Phone: ${phone}</div>
            <div>Fruit 1: ${fruits.find(fruit => fruit.id == fruit1).name}</div>
            <div>Fruit 2: ${fruits.find(fruit => fruit.id == fruit2).name}</div>
            <div>Fruit 3: ${fruits.find(fruit => fruit.id == fruit3).name}</div>
            <div>Special Instructions: ${specialInstructions}</div>
            <div>Order Date: ${orderDate}</div>
            <div><h3>Total Nutrition:</h3></div>
            <div>Carbohydrates: ${totalNutrition.carbohydrates.toFixed(2)}g</div>
            <div>Protein: ${totalNutrition.protein.toFixed(2)}g</div>
            <div>Fat: ${totalNutrition.fat.toFixed(2)}g</div>
            <div>Calories: ${totalNutrition.calories.toFixed(2)}</div>
            <div>Sugar: ${totalNutrition.sugar.toFixed(2)}g</div> `;
              
            const outputDiv = document.getElementById('output');
            
            // Only display the output if the form has been submitted
            if (fruit1 !== "" && fruit2 !== "" && fruit3 !== "") {
              outputDiv.innerHTML = output;
              outputDiv.style.display = 'flex';
              outputDiv.style.flexDirection = 'column';
              outputDiv.style.backgroundColor = 'rgb(250, 232, 192)';
              outputDiv.style.backgroundSize = '300px';
              outputDiv.style.border = 'solid 2px rgb(98, 154, 199)';
              outputDiv.style.borderRadius = '2em';
              outputDiv.style.padding = '2em'; 
            } else {
              outputDiv.style.display = "none";
            }
        });
});