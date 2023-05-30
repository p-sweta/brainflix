const date = (date) => {
  let day = new Date(date);
  let mm = day.getMonth() + 1;
  if (mm < 10) {
    mm = "0" + mm;
  }
  let dd = day.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  let yyyy = day.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
};

const api_key = "48fed446-a806-424c-ab16-4c08695b3ac4";
const api_url = "https://project-2-api.herokuapp.com";

export { date, api_key, api_url };
