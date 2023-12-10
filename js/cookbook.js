
        /* get fetch method */
        async function getDataById(id) {
            try {
                const response = await fetch(`https://c1pkbg7a53.execute-api.us-east-1.amazonaws.com/BudgetBitesDeployed/BudgetBitesRetrieve?id=${id}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log('Retrieved data:', data);
            /* console.log("type", typeof data.equipment);
            console.log("type", typeof data.time_to_cook); */
            const {description, equipment,ingredients,instructions,recipe_name,time_to_cook,type_of_food} = data;
    
            document.getElementById("foodTitle").innerHTML = recipe_name; 
            document.getElementById("foodDescription").innerHTML = description;
            document.getElementById("foodType").innerHTML = type_of_food; 
            document.getElementById("foodTime").innerHTML = time_to_cook;
            
            var elements = document.getElementsByClassName("foodie");
            for (var i = 0; i < elements.length; i++){
                elements[i].innerHTML = ingredients[i];
            }

            var elements2 = document.getElementsByClassName("foodEquipments");
            for (var i = 0; i < elements2.length; i++){
                elements2[i].innerHTML = equipment[i];
            }

            var elements3 = document.getElementsByClassName("foodInstructions");
            for (var i = 0; i < elements3.length; i++){
                elements3[i].innerHTML = instructions[i];
            }

            return data;
            } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            }
        }
        
          const idValue = '5'; // Replace '2' with the actual ID
        getDataById(idValue);


/* tooltip */
/* $(function () {
    $('[data-toggle="tooltip"]').tooltip()
}) */

window.onload=function(){

var btn = document.getElementById('submitRecipe');

btn.addEventListener('click', postRecipe);

async function postRecipe(){
    alert('button clicked');
        
        
    postDataToAWSAPI();
    async function postDataToAWSAPI() {
        const apiUrl = 'https://c1pkbg7a53.execute-api.us-east-1.amazonaws.com/BudgetBitesDeployed/BudgetBitesRetrieve';
        console.log("reach the post function");

        const recipeTitle = document.getElementById("addTitle").value;
        var titleString = "" + recipeTitle + "";
        
        var des = document.getElementById("addDescription").value;
        var desString = "" + des + "";
        
        var type = document.getElementById("addType").value;
        var typeString = "" + type + "";

        var time = document.getElementById("addTime").value;
        var timeString = "" + time + "";
        

        var ingre = document.getElementById("addIngredient").value;
        var ingreSplit = ingre.split(",");
        console.log(ingreSplit);         
        
        var arrayQuote = ingreSplit.map(element => "" + element + "");
        console.log(arrayQuote);
        

        var eq = document.getElementById("addEquipment").value;
        var eqSplit = eq.split(',');
        
        var arrayEq = eqSplit.map(element => "" + element + "");
        console.log(arrayEq);

        var ins = document.getElementById("addInstruction").value;
        var insSplit = ins.split(','); 
        var arrayInst = insSplit.map(element => "" + element + "");
        console.log(arrayInst);    
        
        const data = {
            "id": "5",
      "recipe_name": titleString,
      "description": desString,
      "instructions": arrayInst,
      "time_to_cook": timeString,
      "price_point": "$10-$15",
      "ingredients": arrayQuote,
      "equipment": arrayEq,
      "type_of_food": typeString
            
        };
        

            try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                
                },
                body: JSON.stringify(data)
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
        
            const responseData = await response.json();
            console.log('Data sent successfully:', responseData);
            return data;
            } catch (error) {
            console.error('Error:', error);
            
            }
        }
}
}    
    
    /* postDataToAWSAPI(); */



    












