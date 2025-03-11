document.getElementById("menuToggler").addEventListener("click",function(){
    document.getElementById("navbardiv").classList.toggle("show");
});

document.querySelectorAll("#navbardiv .nav-link").forEach(li=>{
    li.addEventListener("click",function(){
    document.querySelectorAll("#navul .nav-link").forEach(li2=>li2.classList.remove("active"));
    this.classList.add("active");
});
});
let cardContainer=document.getElementById("cardContainer");
function createCard(heading,item1,item2,item3,image,link){
    let card=document.createElement("div");
    card.className="card";

    let imageBox=document.createElement("div");
    imageBox.className="image-box";
    card.appendChild(imageBox);

    let img=document.createElement("img");
    img.src=image;
    imageBox.appendChild(img);

    let body=document.createElement("div");
    body.className="content";
    card.appendChild(body);

    let h2=document.createElement("h2");
    h2.className="cardHeading";
    body.appendChild(h2);

    let ul=document.createElement("ul");
    body.appendChild(ul);

    let li1=document.createElement("li");
    ul.appendChild(li1);

    let li2=document.createElement("li");
    ul.appendChild(li2);

    let li3=document.createElement("li");
    ul.appendChild(li3);

    h2.innerHTML=heading;
    li1.innerHTML=item1;
    li2.innerHTML=item2;
    li3.innerHTML=item3;

    let button=document.createElement("button");
    button.className="btn btn-primary";
    button.innerHTML="Explore";
    button.onclick=function(){
        window.open(link,"_self");
    }
    body.appendChild(button);

    cardContainer.appendChild(card);
    console.log(cardContainer);
}
createCard("Kerala – God’s Own Country","Houseboat cruises in Alleppey","Tea plantations in Munnar","Ayurvedic wellness retreats","Images/i11.jpg","kerala.html");
createCard("Karnataka – A Blend of Heritage & Nature","Heritage sites like Hampi","Wildlife safaris in Kabini & Bandipur","Stunning waterfalls and trekking in Coorg","Images/i12.jpg","karnataka.html");
createCard("Andhra Pradesh & Telangana","Spiritual journeys to Tirumala & Srisailam","Cityscapes of Hyderabad with Charminar & Ramoji Film City","Pristine beaches in Visakhapatnam","Images/i13.jpg","apts.html");


