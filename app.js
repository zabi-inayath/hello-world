let url = "https://fakerapi.it/api/v1/companies?_quantity=";
let imgUrl = "https://dog.ceo/api/breeds/image/random/";
let btn = document.querySelector("button");
let para = document.querySelector("p");
let span = document.createElement("span");
para.appendChild(span);
let comData = document.querySelector(".comData");

btn.addEventListener("click", async () => {
  let userInput = document.querySelector("input").value;

  if (userInput == "" || userInput == 0) {
    alert("enter the value to get data");
  } else {
    span.innerText = " Getting Data, Please Wait !";

    let datArr = await getData(userInput);
    datArr = datArr.data;

    // let dogImg = await getImg(userInput);

    showData(datArr);
  }
});

function showData(datArr) {
  comData.innerHTML = "";

  for (com of datArr) {
    let nameSpan = document.createElement("p");
    let phnSpan = document.createElement("p");
    let emailSpan = document.createElement("p");
    let webSpan = document.createElement("p");
    let counSpan = document.createElement("p");
    let addSpan = document.createElement("p");
    let hr = document.createElement("hr");

    comData.appendChild(nameSpan);
    comData.appendChild(phnSpan);
    comData.appendChild(emailSpan);
    comData.appendChild(webSpan);
    comData.appendChild(counSpan);
    comData.appendChild(addSpan);
    comData.append(hr);

    nameSpan.innerHTML = `<b>Name: </b>${com.name}`;
    phnSpan.innerHTML = `<b>Phone: </b>${com.phone}`;
    emailSpan.innerHTML = `<b>E-mail: </b>${com.email}`;
    webSpan.innerHTML = `<b>Website: </b>${com.website}`;
    counSpan.innerHTML = `<b>Country: </b>${com.country}`;
    addSpan.innerHTML = "<b>Addresses:</b>";
    for (add of com.addresses) {
      let addressParagraph = document.createElement("p");
      addressParagraph.innerHTML = `No: ${add.street}, <br> 
        Street Name: ${add.streetName}, <br> City: ${add.city}, <br> 
        Zip code: ${add.zipcode}`;
      addSpan.appendChild(addressParagraph);
    }

    // Add addresses
  }
  span.innerText = " Completed";
  console.log("Code properly Executed");
  // console.log(com);
}

async function getData(input) {
  try {
    let res = await axios.get(url + input);
    span.innerText = " Completed";
    return res.data;
  } catch (e) {
    console.log("Error:", e);
    span.innerText = " Caught an Error: Too many requests, Refresh the page";
    return [];
  }
}
