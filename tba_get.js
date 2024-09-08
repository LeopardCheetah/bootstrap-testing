async function getRequest(request) {
    const url = "https://www.thebluealliance.com/api/v3";

    if (!(typeof request === 'string' || request instanceof String)){
        console.error("API Request link is not a string!")
    }

    let tba_key = "";
    // read secret key
    const fs = require('fs'); // file stuff
    fs.readFile('secret.txt', (err, inputD) => {
        if (err) throw err; 
            tba_key = inputD.toString();
            console.log(tba_key);
    })

    // this should work?


    // how tf do i test this


    // this part still needs to be done

    try {
      const response = await fetch(url + request);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
}
