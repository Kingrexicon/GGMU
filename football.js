class Club {
    constructor(name, number, natoinality, position) {
        this.name = name
        this.number = number
        this.nationality = natoinality
        this.position = position
    }
    run() { }
}

var player1 = new Club(" De gea", "1", "Spain", "Gk")
var player2 = new Club(" Shaw", "23", "England", "LB")
var player3 = new Club("Lisandro ", "6", "Argentina", "CB")
var player4 = new Club(" Maguire", "5", "England", "CB")
var player5 = new Club(" Varane", "19", "France", "RB")
var player6 = new Club(" Eriksen", "14", "England", "CM")
var player7 = new Club("Fred", "17", "Brazil", "CM")
var player8 = new Club("Rashford", "10", "England", "LW")
var player9 = new Club(" Fernandes", "8", "Portugal", "AM")
var player10 = new Club("Antony", "21", "Brazil", "RW")
var player11 = new Club(" Martial", "9", "France", "CF")

console.log(player1)

gk.innerHTML = `<p>${player1.name} <br> <br> ${player1.number}  <br> <br> ${player1.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player1.nationality}</div> `
rb.innerHTML = `<p>${player2.name} <br> <br> ${player2.number}  <br> <br> ${player2.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player2.nationality}</div> `
cbb.innerHTML = `<p>${player3.name} <br> <br> ${player3.number}  <br> <br> ${player3.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player3.nationality}</div> `
rbb.innerHTML = `<p>${player4.name} <br> <br> ${player4.number}  <br> <br> ${player4.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player4.nationality}</div> `
cb.innerHTML = `<p>${player5.name} <br> <br> ${player5.number}  <br> <br> ${player5.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player5.nationality}</div> `
cmm.innerHTML = `<p>${player6.name} <br> <br> ${player6.number}  <br> <br> ${player6.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player6.nationality}</div> `
lw.innerHTML = `<p>${player7.name} <br> <br> ${player7.number}  <br> <br> ${player7.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player7.nationality}</div> `
cf.innerHTML = `<p>${player8.name} <br> <br> ${player8.number}  <br> <br> ${player8.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player8.nationality}</div> `
cm.innerHTML = `<p>${player9.name} <br> <br> ${player9.number}  <br> <br> ${player9.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player9.nationality}</div> `
am.innerHTML = `<p>${player10.name} <br> <br> ${player10.number}  <br> <br> ${player10.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player10.nationality}</div> `
rw.innerHTML = `<p>${player11.name} <br> <br> ${player11.number}  <br> <br> ${player11.position}  </p> <div id="country" class="mx-auto text-center bg-danger">${player11.nationality}</div> `
