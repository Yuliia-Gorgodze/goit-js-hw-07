const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


  
  const galleryRef = document.querySelector("#gallery");
  galleryRef.classList.add("js_galerry_style")
  const criationGalery = (img) => {
  
    const criationElementGaleryRef = document.createElement("li");
    
    const imgElRef = document.createElement("img");
    imgElRef.classList.add("js_galerry")
    imgElRef.src = img.url;
    imgElRef.alt = img.alt;
    imgElRef.appendChild = img;
    criationElementGaleryRef.appendChild(imgElRef);
    galleryRef.appendChild(criationElementGaleryRef);
    return criationElementGaleryRef;
}


const imgagesArray = images.map(img => criationGalery(img));
galleryRef.append(...imgagesArray);

