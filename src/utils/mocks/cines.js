const cinesMock = [{
        id: 1,
        nombre: "Atlas",
        foto: "https://filer.365.clarin.com/filer/materiales-salesforce/prod/201701/06/201701-06-1f1f0827-4a40-483e-83f4-d4c4bd358d03.jpg",
        paisOrigen: "Argentina",
        peliculas: [{
            id: 1,
            nombre: "Rapido y Furiosos 10",
            tipo: "otros",
            fechaEstreno: "2000-12-02",
            cantidadPublico: 100000,
            fotoPelicula: "https://static.misionesonline.news/wp-content/uploads/2020/03/16084200/rapidos-y-furiosos-9-coronavirus.jpeg",
            actores: [{
                    id: 1,
                    nombre: "Vin Disel",
                    apellido: "Perez",
                    sexo: "Masculino",
                    fechaNacimiento: "04/06/2000",
                    paisOrigen: "estados Unidos",
                    foto: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/03/12164026/Vin_Diesel_Countdown_Rep2.jpg",


                },
                {
                    id: 2,
                    nombre: "Paul",
                    apellido: "Walker",
                    sexo: "Masculino",
                    fechaNacimiento: "04/06/2000",
                    paisOrigen: "estados Unidos",
                    foto: "https://zolfm.com/admin/imagenes/paul_walker_1-1572955487.jpg"
                }
            ]
        }, {
            id: 2,
            nombre: "DeadPool 2",
            tipo: "comedia",
            fechaEstreno: "2010-12-11",
            cantidadPublico: 560000,
            fotoPelicula: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            actores: [{
                id: 1,
                nombre: "Ryan",
                apellido: "Reinolds",
                sexo: "Masculino",
                fechaNacimiento: "22/02/1996",
                paisOrigen: "estados Unidos",
                foto: "https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg"
            }]
        }]
    }, {
        id: 2,
        nombre: "Village Cines Avellaneda",
        foto: "https://www.elcomercio.com/files/article_main/uploads/2020/04/07/5e8ccce014854.jpeg",
        paisOrigen: "Argentina",
        peliculas: [{
            id: 1,
            nombre: "Master and commander",
            tipo: "drama",
            fechaEstreno: "2000-00-00",
            cantidadPublico: 50000,
            fotoPelicula: "../../assets/master.jpg",
            actores: [{
                    id: 1,
                    nombre: "Russel",
                    apellido: "Crowe",
                    sexo: "Masculino",
                    fechaNacimiento: "04/06/1970",
                    paisOrigen: "estados Unidos",
                    foto: "../../assets/crowe.jpg"
                },
                {
                    id: 2,
                    nombre: "paul",
                    apellido: "bettany",
                    sexo: "Masculino",
                    fechaNacimiento: "04/06/2000",
                    paisOrigen: "estados Unidos",
                    foto: "../../assets/paul.jpg"
                }
            ]
        }]
    },
    {
        id: 3,
        nombre: "Village Cines Recoleta",
        foto: "https://www.tododisca.com/wp-content/uploads/2019/01/sala-de-cine-1000x600.jpg",
        paisOrigen: "Argentina",
        peliculas: [{
                id: 1,
                nombre: "Apocalypto",
                tipo: "otros",
                fechaEstreno: "2000-12-03",
                cantidadPublico: 9000,
                fotoPelicula: "../../assets/apocalypto.jpg",
                actores: [{
                        id: 1,
                        nombre: "Rudy",
                        apellido: "Joungblood",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/rudy.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Rodolfo",
                        apellido: "Palacios",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/rodolfo.jpg"
                    }
                ]
            },
            {
                id: 2,
                nombre: "Al filo del peligro (the edge)",
                tipo: "otros",
                fechaEstreno: "2000-12-03",
                cantidadPublico: 9000,
                fotoPelicula: "../../assets/alfilo.jpg",
                actores: [{
                        id: 1,
                        nombre: "Antony",
                        apellido: "Hopkins",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/antony.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Alec",
                        apellido: "Baldwin",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/alec.jpg"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        nombre: "Village Cines Martinez",
        foto: "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/03/13/Recortada/img_fmartinez_20200312-195239_imagenes_lv_getty_gettyimages-143923007-kPYB-X5DBUGEGVA3YHWGI-992x558@LaVanguardia-Web.jpg",
        paisOrigen: "Argentina",
        peliculas: [{
                id: 1,
                nombre: "Rocky 6",
                tipo: "otros",
                fechaEstreno: "2000-12-03",
                cantidadPublico: 300000,
                fotoPelicula: "../../assets/rocky6.jpg",
                actores: [{
                        id: 1,
                        nombre: "Sylvester",
                        apellido: "Es talon",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/sylvester.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Mason",
                        apellido: "Frontera Dixon",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/mason.jpg"
                    }
                ]
            },
            {
                id: 2,
                nombre: "Rapido y Furiosos 4521",
                tipo: "otros",
                fechaEstreno: "2000-12-03",
                cantidadPublico: 300000,
                fotoPelicula: "https://static.misionesonline.news/wp-content/uploads/2020/03/16084200/rapidos-y-furiosos-9-coronavirus.jpeg",
                actores: [{
                        id: 1,
                        nombre: "Vin Disel",
                        apellido: "Perez",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/03/12164026/Vin_Diesel_Countdown_Rep2.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Paul",
                        apellido: "Walker",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "https://zolfm.com/admin/imagenes/paul_walker_1-1572955487.jpg"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        nombre: "Monumental Lavalle",
        foto: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/1b/d1/2c/cine-multiplex-lavalle.jpg",
        paisOrigen: "Argentina",
        peliculas: [{
                id: 1,
                nombre: "Rapido y Furiosos 90",
                tipo: "otros",
                fechaEstreno: "2000-12-03",
                cantidadPublico: 300000,
                fotoPelicula: "https://static.misionesonline.news/wp-content/uploads/2020/03/16084200/rapidos-y-furiosos-9-coronavirus.jpeg",
                actores: [{
                        id: 1,
                        nombre: "Vin Ramon Disel",
                        apellido: "Perez",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/03/12164026/Vin_Diesel_Countdown_Rep2.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Paulo Edgardo",
                        apellido: "Walker",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "https://zolfm.com/admin/imagenes/paul_walker_1-1572955487.jpg"
                    }
                ]
            },
            {
                id: 2,
                nombre: "Volver al futuro",
                tipo: "otros",
                fechaEstreno: "1955-10-10",
                cantidadPublico: 300000,
                fotoPelicula: "../../assets/volver.jpg",
                actores: [{
                        id: 1,
                        nombre: "Miguel",
                        apellido: "Zorro",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/miguel.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Doctor Emmet",
                        apellido: "Brown",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/1800",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/emmet.jpg"
                    }
                ]
            },

            {
                id: 3,
                nombre: "Corazon de Leon",
                tipo: "otros",
                fechaEstreno: "1955-10-10",
                cantidadPublico: 300000,
                fotoPelicula: "../../assets/corazon.jpg",
                actores: [{
                        id: 1,
                        nombre: "Chanclon",
                        apellido: "Vandam",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/2000",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/chanclon.jpg"
                    },
                    {
                        id: 2,
                        nombre: "Harrison",
                        apellido: "Page",
                        sexo: "Masculino",
                        fechaNacimiento: "04/06/1800",
                        paisOrigen: "estados Unidos",
                        foto: "../../assets/harrison.png"
                    }
                ]
            }


        ]
    },
]

export class CinesServiceMock {
    async getCines() {
        return Promise.resolve(cinesMock);
    }
}