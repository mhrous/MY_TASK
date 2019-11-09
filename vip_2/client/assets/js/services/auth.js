const endPoint = "http://localhost:4000";


const logIn = ({ data, success, error }) => {
  $.ajax({
    type: "POST",
    url: `${endPoint}/signin`,
    data,
    success,
    error
  });
};
