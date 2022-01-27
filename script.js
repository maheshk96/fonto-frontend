const base_url = " https://take-home.hasura.app/api/rest/properties/"

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close]')
const overlay = document.getElementById('overlay')

//action to close the modal whenever there is a click outside the overlay
overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})
//Action buttons to open/close the modal
openModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return 
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return 
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//The cancel button functionality
function clearData(){
    document.getElementById('add').value = "";
    document.getElementById('val').value = "";
}

//Fetch data from the backend on load of the webpage
function getProperties(){
    fetch(base_url+"all", {
        headers : {
            "x-hasura-user-id" : "EBx22JCTOKbqrsF"
        }
    
    })
    .then(res => res.json())
    .then(json => {
      
        // Create a variable to store HTML
        let li = `<tr><th>ID</th><th>Address</th><th>Valuations</th></tr>`;
       
        // Loop through each data and add a table row
        var sum = 0
        for (i=0; i<json.properties.length;i++){
                var obj = json.properties[i] 
                if(!obj.hidden){
                    li += `<tr>
                    <td>${obj.id} </td>
                    <td>${obj.address}</td> 
                    <td>$${obj.valuation.toLocaleString()}</td>        
                </tr>`;
                }
                sum = sum + obj.valuation
        }
        li += `<tfoot><tr><th colspan="2">Total :</th>
        <td>$${sum.toLocaleString()}</td>
        </tr></tfoot>`;
    
    // Display result
    document.getElementById("users").innerHTML = li;
    });
}

//Add property information on the accept button being clicked
function addProperty(add, val){
    // POST request using fetch()
    fetch(base_url+"add", {
	
	// Adding method type
	method: "POST",
	
	// Adding body or contents to send
	body: JSON.stringify({
		address: add,
		valuation: val,
	}),
	
	// Adding headers to the request
	headers : {
        "x-hasura-user-id" : "EBx22JCTOKbqrsF"
    }
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));
}

