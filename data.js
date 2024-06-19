async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Eroare la citirea datelor:', error);
    }
}

function displayData(data) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = JSON.stringify(data, null, 2);
}

function addItem() {
    const newItem = {
        id: Date.now(),
        name: 'New Item',
        value: Math.floor(Math.random() * 1000)
    };

    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    displayData({ items });
}

async function initialize() {
    await fetchData();
    const localData = JSON.parse(localStorage.getItem('items'));
    if (localData) {
        displayData({ items: localData });
    }
}

initialize();