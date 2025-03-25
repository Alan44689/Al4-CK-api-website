const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

async function fetchStockData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById("stock-data").innerHTML = `Giá Bitcoin: ${data.bitcoin.usd} USD`;
    } catch (error) {
        document.getElementById("stock-data").innerHTML = "Lỗi tải dữ liệu!";
    }
}

fetchStockData();
