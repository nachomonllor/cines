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
        fechaNacimiento: "1961-9-6",
        foto: "../../assets/miguel zorro.jpg",
        paisOrigen: "estados unidos"
    },
    {
        id: 3,
        nombre: "Emmet",
        apellido: "Brown",
        sexo: "M",
        fechaNacimiento: "1950-5-5",
        foto: "../../assets/emmet.jpg",
        paisOrigen: "estados unidos"
    }
]

export class ActoresServiceMock {
    async getActores() {
        return Promise.resolve(actoresMock);
    }
}