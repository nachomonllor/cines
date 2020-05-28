const actoresMock = [{
        id: 1,
        nombre: "Robert",
        apellido: "Donwey",
        sexo: "M",
        fechaNacimiento: "1976-12-12",
        foto: "https://avatarfiles.alphacoders.com/127/127275.jpg",
        paisOrigen: "estados unidos"
    },
    {
        id: 2,
        nombre: "Miguel",
        apellido: "Zorro",
        sexo: "M",
        fechaNacimiento: "1961-9-5",
        foto: "../../assets/miguel.jpg",
        paisOrigen: "estados unidos"

    },
    {
        id: 3,
        nombre: "Emmet",
        apellido: "Brown",
        sexo: "M",
        fechaNacimiento: "1955-1-1",
        foto: "../../assets/emmet.jpg",
        paisOrigen: "estados unidos"
    },
    {
        id: 4,
        nombre: "Brad",
        apellido: "Pitt",
        sexo: "M",
        fechaNacimiento: "1955-1-1",
        foto: "../../assets/brad.jpeg",
        paisOrigen: "estados unidos"
    }
]

export class ActoresServiceMock {
    async getActores() {
        return Promise.resolve(actoresMock);
    }
}