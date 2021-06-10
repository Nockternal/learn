function stringsToNumbers (array) {
    return array.map(Number);
  }
  function sum(data) {
    var total = 0;
  
    // Ensure that data contains numbers and not strings.
    data = stringsToNumbers(data);
  
    for (let i = 0; i < data.length; i++) {
      total = total + data[i];
    }
  
    return total;
  }