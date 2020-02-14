

let list = document.getElementById('list');


// Create the list item with a delete button
function addInput() 
{
  
  let listinput = document.getElementById('liInput').value;
  console.log(listinput);

  list.innerHTML += '<li>' + '<input type="checkbox">' + listinput + '<button onClick="deleteInput(this)">Delete</button></li>';

};

function deleteInput(e) 
{
  e.parentNode.parentNode.removeChild(e.parentNode);
};




//add event listener to each li  on click
for(let i = 0; i < listinput.length; i++) 
{
  listinput[i].addEventListener('click', checkIt); 
}

//function checkIt to put a line-through each li
function checkIt(e)
{
	 e.target.style.textDecoration = 'line-through';

}  