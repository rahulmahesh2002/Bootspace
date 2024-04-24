
const noofpas = document.getElementById('noofpas');  // connect noofpas to input html ele noofpas

const L = document.getElementsByName('selection1');  // connect L to radio btn with name = selection1
const M = document.getElementsByName('selection2');  // similar to L
const S = document.getElementsByName('selection3');

const submitbtn = document.getElementById('submitbtn'); // connect submitbtn to html ele with submitbtn

L.forEach(radioButton => {
    radioButton.addEventListener('dblclick', () => {
        if (radioButton.checked) {
            radioButton.checked = false; // Double click for L to deselect
        }
    });
});

M.forEach(radioButton => {
    radioButton.addEventListener('dblclick', () => {
        if (radioButton.checked) {
            radioButton.checked = false; // Double click for M to deselect
        }
    });
});

S.forEach(radioButton => {
    radioButton.addEventListener('dblclick', () => {
        if (radioButton.checked) {
            radioButton.checked = false; // Double click for S to deselect
        }
    });
});




submitbtn.addEventListener('click', (e) => {  // func when click occurs to submit btn
    e.preventDefault();     // prevent default reload page
    const name = document.getElementById('Name');  // connect name to input element id Name
    const nameval = name.value; // gets the val of input field to nameval
    const totalcap = (getSelectedValue(L) * 4) + (getSelectedValue(M) * 2) + getSelectedValue(S); // formula
    const passengers = parseInt(noofpas.value);  // get val of noofpas and convert it into integer

    const carType = decider(passengers, totalcap); // func decider that returns cartype is activated and parameters is passed
    if (carType !== null) {  // checks if cartype is null
        
        console.log(totalcap);
        console.log(nameval);
        console.log(carType);  
        localStorage.setItem('user',nameval);   // sets nameval to local storge to pass to next html pg
        localStorage.setItem('type',carType);   // same
        window.location.href = 'nextpage.html'; // Change 'nextpage.html' to your local HTML file path
    }
    
    
});

function getSelectedValue(radioButtons) { // func declared and radiobuttons is passed
    let selectedValue = 0;   // initialize zero and let is used as it is changed in each loop
    radioButtons.forEach(radioButton => {  // loops through each radio btn
        if (radioButton.checked) {   // checks if radiobtn is clicked/checked
            selectedValue = parseInt(radioButton.value); // gets value of radiobutton individually
        }
    });
    return selectedValue; // func returns the value of selected btn
}

function decider(passengers, totalcap) {   // simple func that returns cartype
    if (!isNaN(passengers) && passengers > 0 && passengers < 11) {
        if (passengers<=2 && totalcap <= 5) {
            return 'Mini';
        } else if (passengers>=2 && totalcap > 5 && totalcap <= 10) {
            return 'Sedan';
        } else if (passengers>=2 && totalcap > 10 && totalcap <= 15) {
            return 'SUV';
        } else if (passengers>=2 && totalcap > 15 && totalcap <= 50) {
            return 'Truck';
        }
        else
        {
            return ('No vehicle Match');
        }
    } else {
        alert('Invalid Input, Sorry!');  // alert popup to make sure correct info entered
        return null;
    }
}
