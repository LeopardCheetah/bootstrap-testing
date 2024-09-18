async function getRequest(request) {
    const url = "https://www.thebluealliance.com/api/v3";

    if (!(typeof request === 'string' || request instanceof String)){
        console.error("API Request link is not a string!")
    }
   




    

    let cool_tba_key = '';
    const reader = new FileReader();


    // make file
    const my_cool_file = new File(["some cool text"], "test.txt");

    cool_tba_key = reader.readAsText(my_cool_file);
    console.log("Key:");
    console.log(cool_tba_key);
    console.log("11111");











    // this part still needs to be done

    try {
        const response = await fetch(url + request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const json = response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}



getRequest('/status')
console.log('1');

let status = false;
let tba_button = document.getElementById('TBA_button');
let status_text = document.getElementById('Status');


status_text.innerText = `Current status: ????`; 

tba_button.addEventListener('click', () => {
    console.log("TBA button was clicked");

    
    let bool = getRequest("/status")
    throw new Error("Var bool is not a bool! (line 79)");
    if (bool) { // note this aint a bool i gotta convert the json i get to something good
    console.log("You haven't finished this part dum dum (gotta convert the output to a bool)");
    console.log(bool);
    }
    status_text.innerText; // what is this
})
