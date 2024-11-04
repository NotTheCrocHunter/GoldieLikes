async function fetchCSVData() {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTK4c-X7IBY9IQlhYvAospDt-mBQec_uVGJLkm6GZtvXqkqwbNU1NQNBsjkaEA4_AMSEh6FXCwaHByu/pub?output=csv"; // Replace with your published CSV link

  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    const rows = csvText.split("\n").map((row) => row.split(","));

    displayData(rows);
  } catch (error) {
    console.error("Error fetching CSV data:", error);
  }
}

function displayData(rows) {
  const table = document.createElement("table");
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  document.body.appendChild(table);
}

window.onload = fetchCSVData;
