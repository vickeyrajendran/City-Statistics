const button = document.querySelector('button')
let resultdiv=document.createElement('div');
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
//event listener
button.addEventListener('click',displaystats)
function displaystats(event){
    const input=document.querySelector('select')
//   vk = input.setAttriconstbute('value','tumbai')
   const vk= new Option('Kolkatta','kolkatta')
   let nk=input.add(vk)

    const city =input.options[input.selectedIndex].value



    let population = 0, literacyRate = 0, language =''
    switch(city){
        case 'Bengaluru':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case 'Mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case 'Delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break

    }
    let text=`The indian city of ${city} has a language of ${language} with population ${population} and literacy rate${literacyRate}%`;
    console.log(text);
    document.getElementById('result').innerHTML=text

}