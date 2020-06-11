function populateUFs() {
    const UFselect = document.querySelector("select[name=UF]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => res.json())
        .then(states => {

            for (const state of states) {
                UFselect.innerHTML += `<option value = "${state.id}" > ${state.nome} </option>`
            }
        })
}

populateUFs()

function getCities() {
    const citySelect = document.querySelector("select[name=city]")
    const stateinput = document.querySelector("select[name=state]")
    const UFvalue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateinput.value = event.target.option[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`

    fetch(url)
        .then((res) => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value = "${city.id}" > ${city.nome} </option>`
            }
        })
}

document
    .querySelector("select[name=UF]")
    .addEventListener("change", getCities)