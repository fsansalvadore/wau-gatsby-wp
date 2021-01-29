export function randomID() {
    return Math.random()
        .toString(36)
        .substring(7)
}

export const months = {
    ita: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    eng: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}