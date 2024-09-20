// this works!

async function testingAPI(){ 
    var key = "";
    const get_file = await fetch("secret.txt")
        .then((res) => res.text())
        .then((text) => {
        key = text;
        })
    .catch((e) => console.error(e));
    console.log(get_file);


    var url = "https://www.thebluealliance.com/api/v3/status";
    fetchTwo(url, key); 
}

async function fetchTwo(url, key){
    const request_headers = new Headers();
    request_headers.append("X-TBA-Auth-Key", key);



    const request = new Request(url, {
        method: "GET",
        headers: request_headers
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(response.status, data.current_season);
}


// go get the secret from the file!
async function getFile(){
    const get_file = await fetch("secret.txt")
        .then((res) => res.text())
        .then((text) => {
        console.log(text);
        })
    .catch((e) => console.error(e));
    console.log(get_file);
}

getFile();




