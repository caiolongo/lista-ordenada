function findItens() {
    itensList.sort(function compare(a, b) {
        return a.value - b.value;
    });
    addItensToList(itensList);
}

function addItensToList(whatList) {
    const ordList = document.getElementById("list");
    ordList.innerHTML = '';
    whatList.forEach(whatList => {
        newItemToList(whatList);
    })
}

function newItemToList(item) {
    const ordList = document.getElementById("list");
    const li = document.createElement('li');
    const name = document.createElement('a');
    name.innerHTML = item.name;
    const value = document.createElement('a');
    value.innerHTML = (`R$ ${item.value}`);
    li.appendChild(name);
    li.appendChild(value);
    ordList.appendChild(li);
}

button.addEventListener("click", function(event) {
    event.preventDefault();
    let formInfo = document.querySelector("#captureInfo");
    let nome = formInfo.nomeProduto.value;
    let descricao = formInfo.descricao.value;
    let valor = parseFloat(formInfo.valor.value);
    let podeVender = formInfo.podeVender.value;

    let newItem = new Item(nome, descricao, valor, podeVender);
    itensList.push(newItem);
    findItens();
});

function Item(name, description, value, canSell) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.canSell = canSell;
}

let itensList = [
    {
        name: "Maçã",
        description: "Uma fruta",
        value: 5.99,
        canSell: true
    }, 
    {
        name: "Sabão",
        description: "Lava roupas",
        value: 8.43,
        canSell: true
    }, 
    {
        name: "Tomate",
        description: "Uma fruta",
        value: 1.90,
        canSell: false
    }, 
]

findItens();