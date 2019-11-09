const endPoint = "http://localhost:4000/api/user";

const headers = {};

const getPartner = ({ success }) => {
    $.ajax({
      type: "GET",
      url: `${endPoint}?power=P`,
      success,
      headers
    });
  };
  