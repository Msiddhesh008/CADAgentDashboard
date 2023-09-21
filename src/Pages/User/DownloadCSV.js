// downloadCSV.js

function convertArrayOfObjectsToCSV(data) {
  const header = Object.keys(data[0]);
  const csv = [
    header.join(','),
    ...data.map(row => header.map(fieldName => row[fieldName]).join(','))
  ];
  return csv.join('\n');
}

function downloadCSV(data, filename) {
  const csvData = convertArrayOfObjectsToCSV(data);
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default downloadCSV;
