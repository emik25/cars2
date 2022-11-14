let cars = [
    {   
        id: Math.random(),
        color: "red",
        mark: "ferrari",
        engine: 5.0,
        isTurbo: true,
        hasHatch: true,
        price: 500000,
        img: "https://cdn.motor1.com/images/mgl/Znnm7r/s3/ferrari-sp48-unica.webp"
    },
    {   
        id: Math.random(),
        color: 'green',
        mark: 'lamborgine',
        engine: 4.2,
        isTurbo: true,
        hasHatch: true,
        price: 650000,
        img: 'https://fastmb.ru/uploads/posts/2017-12/1512662955_svetoidodna-optika-lamborghini-urus-2019.jpg'

    },
    {   
        id: Math.random(),
        color: 'blue',
        mark: 'lacceti',
        engine: 3.2,
        isTurbo: true,
        hasHatch: true,
        price: 120000,
        img: 'https://avatars.mds.yandex.net/i?id=5fe553aefc5fa669669ae25648c42a67_l-5287716-images-thumbs&n=13'

    },
    {   
        id: Math.random(),
        color: 'yellow',
        mark: 'lamborgine urus ',
        engine: 8.2,
        isTurbo: true,
        hasHatch: true,
        price: 500000,
        img: 'https://avatars.mds.yandex.net/i?id=ef9fa34842e638d11dc73528278e6577-5236667-images-thumbs&n=13'
    },
    {   
        id: Math.random(),
        color: "white",
        mark: "lada_zhiguli06",
        engine: "3.0",
        isTurbo: false,
        hasHatch: false,
        price: "1500",
        img: "https://avatars.mds.yandex.net/i?id=f7fa48ba965ef47f7cd70e2beb63c65f-4538204-images-thumbs&n=13"
    },
    {   
        id: Math.random(),
        color: "white",
        mark: "mustang",
        engine: "6.0",
        isTurbo: true,
        hasHatch: true,
        price: "50000",
        img: "https://avatars.mds.yandex.net/i?id=61fce67a170382a6b79d101a298bf1085a71f1dd-4578804-images-thumbs&n=13&exp=1"
    },
    {   
        id: Math.random(),
        color: "grey",
        mark: "malibu",
        engine: "4.5",
        isTurbo: true,
        hasHatch: true,
        price: "250000",
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
    {   
        id: Math.random(),
        color: "darkblue",
        mark: "buggatti",
        engine: 10.2,
        isTurbo: true,
        hasHatch: true,
        price: "250000",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bugatti_Chiron_%2836559710091%29.jpg"
    },
    {   
        id: Math.random(),
        color: "white",
        mark: "malibu",
        engine: 4.5,
        isTurbo: true,
        hasHatch: true,
        price: "250000",
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
    {   
        id: Math.random(),
        color: "white",
        mark: "gentra",
        engine: 4.5,
        isTurbo: true,
        hasHatch: true,
        price: "250000",
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
    {   
        id: Math.random(),
        color: "white",
        mark: "gentra",
        engine: 2.5,
        isTurbo: false,
        hasHatch: true,
        price: "15000",
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
    {   
        id: Math.random(),
        color: "black",
        mark: "gentra",
        engine: 20.5,
        isTurbo: false,
        hasHatch: true,
        price: "15000",
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
]

let max = cars.reduce((a,b) => a.engine > b.engine ? a : b)

cars.forEach(item => {
    let percent = item.engine * 100 / max.engine
    document.write(`
       <div class="block" >
            <span>car id: ${item.id}</span> <hr> //////
            <i>${item.mark}</i> 
            <b style="color: ${item.color};" >${item.color}</b> <br>
            <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
            <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
            <div class="eng">
                <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
            </div>
            <img src="${item.img}" alt="${item.mark}" />
            <h3>Цена: ${item.price}</h3>        
       </div>
    `)
    
})



setTimeout(() => {
    let select = prompt('Какую хотите купить машину?')

    cars.filter(item => {
        if (select === item.id) {
            cars.forEach(item => {
                let percent = item.engine * 100 / max.engine
                document.write(`
                   <div class="block" >
                        <span>car id: ${item.id}</span> <hr> //////
                        <i>${item.mark}</i> 
                        <b style="color: ${item.color};" >${item.color}</b> <br>
                        <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
                        <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
                        <div class="eng">
                            <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
                        </div>
                        <img src="${item.img}" alt="${item.mark}" />
                        <h3>Цена: ${item.price}</h3>        
                   </div>
                `)
                item.splice(cars, 1)
                console.log(cars);
            })    
        }
    })
}, 3000);








// setTimeout(() => {
//     let selectId = prompt('Какую машину хотите купить?')
//      cars.filter(item => {
//         if(item.id == selectId){
//             cars.splice(item, 1)
//             console.log(cars);
//         }
//     })
// }, 3000);