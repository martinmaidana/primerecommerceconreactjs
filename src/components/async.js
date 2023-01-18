const data =[
    {
        id:1,
        nombre:"julian"
    },
    {
        id:2,
        nombre:"juan"
    },
    {
        id:3,
        nombre:"pedro"
    },
]

//informacion cruda. en JSON X EJ
//ITERAR Y TRANSFORMAR EN HTML
//RENDERIZAR EL NUEVO ARRAY

//DATA
//DATA EN HTML
//RENDERIZO DATA EN HTML




data.forEach((elemento)=>{
    console.log(elemento.nombre)
})

for(let i=0; i<data.length; i++){
    console.log(data[i].nombre)
}
// // const mostrarData =()=>{
// //     return data
// // }
// // console.log[mostrarData()];

// // setTimeout(()=>{
// //     console.log("tardo 5 segundos")
// // },5000)

// // construir un promesa, una instancia en la clase promesa
// // resolve cuando se resuelve positivamente y reject cuando no se cumple

// // const promesa = new Promise((resolve, reject)=>{
// //     if(false){resolve("el viernes hay after")}
// //     reject("no se cumplio la promesa")
// // })
// // si no usamos then()obtendremos el objeto promesa, si usamos then()obtendremos el RESOLVE de esa promesa
// // promesa.then((data)=>{console.log(data);}).catch((err)=>{console.log(err)})

// // fetch('https://fakestoreapi.com/products/1')
// //             .then(res=>res.json())
// //             .then(json=>console.log(json))
// //             .catch((err)=>{console.log(err)})
// //             .finally(console.log("la promesa finalizó"))


