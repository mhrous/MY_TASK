const endPoint = "http://localhost:4000/api/user";

const headers = {};

const getDriver = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}?power=D`,
    success,
    headers
  });
};
