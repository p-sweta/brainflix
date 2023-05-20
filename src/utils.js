const date = (date) => {
    let mm = date.getMonth() + 1;
    if (mm < 10) {
      mm = "0" + mm;
    }
    let dd = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }
    let yyyy = date.getFullYear();
  
    return mm + "/" + dd + "/" + yyyy;
  };
  
export {
    date
};