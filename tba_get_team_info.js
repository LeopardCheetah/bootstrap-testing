
async function testingAPI(){ 
    var key = "";
    const get_file = await fetch("secret.txt")
        .then((res) => res.text())
        .then((text) => {
        key = text;
        })
    .catch((e) => console.error(e));
    console.log(get_file);


    var url_front = "https://www.thebluealliance.com/api/v3/team/frc";
    var url_back = "/awards";

    var team_number = document.getElementById('team_number_thing_id').value;
    console.log("Team number entered: "+team_number);


    document.getElementById('TBA_team_award').innerHTML = await fetchTwo(url_front + Number(team_number) + url_back, key); 


    
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


    
    console.log(data);
    return await data[0];
}


testingAPI();