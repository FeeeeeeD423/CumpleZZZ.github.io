function placeDataOnImage() {
  const inputData = document.getElementById('data-input').value;
  const dataContainer = document.getElementById('birthday-data');
  
  // Limpiar los datos anteriores
  dataContainer.innerHTML = '';

  // Dividir los datos en líneas y luego en celdas
  const rows = inputData.trim().split('\n').map(function(row){
    return row.split('\t'); // Asumiendo que los datos están separados por tabulaciones
  });
  
  let html = "<ul>";
  rows.forEach(function(row) {
    // Agregar solo si hay tres elementos (fecha, nombre, cargo)
    if(row.length === 3) {
      html += `<li>${row[0]}: ${row[1]} - ${row[2]}</li>`;
    }
  });
  html += "</ul>";
  
  dataContainer.innerHTML = html;
}
