/* Get using axios based on assignment 2 test */
/* axios.get('https://dp8v6pzap0.execute-api.us-east-2.amazonaws.com/dev')
        .then(function (response) {
            // handle success

            const obj = response.data;
            const bObj = obj.body
            const bObb = JSON.parse(bObj);

            console.log(bObb);
            
            const {average} = bObb[2];

            console.log(average);
            
            document.getElementById("foodTitle").innerHTML = average;
            
            
            document.getElementById("foodDescription").innerHTML = 
            document.getElementById("foodType").innerHTML = 
            document.getElementById("foodTime").innerHTML = 
            document.getElementById("serveSize").innerHTML = 
            document.getElementById("foodIngredients").innerHTML =
            document.getElementById("foodEquipments").innerHTML =
            document.getElementById("foodInstructions").innerHTML =
        
            
        })
        .catch(function (error) {

            console.log(error);
        })
        .finally(function () {
            
        }); */



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
        
          const idValue = '1'; // Replace '2' with the actual ID
        getDataById(idValue);
















