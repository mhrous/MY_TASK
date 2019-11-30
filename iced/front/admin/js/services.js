const endPoint = "http://localhost:4000/iced/";
const login = obj => {
  Swal.fire("عذرا لم يتم العمل على خدمة تسجيل الدخول بعد", "", "error");
};

const logOut = () => {
  Swal.fire("عذرا لم يتم العمل على خدمة تسجيل الخروج بعد", "", "error");
};

const getAllUniversity = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/university`,
    success: cb
  });
};

const addUniversity = (data, cb) => {
  console.log(data);
  if (!data.name) {
    Swal.fire("لا يمكن اضافة جامعة بدون اسم", "", "error");
    return;
  }
  $.ajax({
    type: "POST",
    url: `${endPoint}admin/university`,
    data,
    success: cb
  });
};

const deleteUniversity = (id, cb) => {
  $.ajax({
    type: "DELETE",
    url: `${endPoint}admin/university/${id}`,
    success: cb
  });
};

const putUniversity = (id, data, cb) => {
  $.ajax({
    type: "PUT",
    url: `${endPoint}admin/university/${id}`,
    success: cb,
    data
  });
};

const getAllColleges = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/college`,
    success: cb
  });
};

const getCollege = (id, cb) => {};

const addCollege = (data, cb) => {
  $.ajax({
    type: "POST",
    url: `${endPoint}admin/college`,
    data,
    success: cb
  });
};

const deleteCollege = (id, cb) => {
  $.ajax({
    type: "DELETE",
    url: `${endPoint}admin/college/${id}`,
    success: cb
  });
};
const putCollege = (id, data, cb) => {
  $.ajax({
    type: "PUT",
    url: `${endPoint}admin/college/${id}`,
    success: cb,
    data
  });
};

const getAllEvent =cb=>{
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event?type=e`,
    success: cb
  });
}

const getAllProject = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event?type=p`,
    success: cb
  });
};

const addProject = (data, cb) => {
  $.ajax({
    type: "POST",
    url: `${endPoint}admin/project-event`,
    data,
    success: cb
  });
};

const deleteProject = (id, cb) => {
  $.ajax({
    type: "DELETE",
    url: `${endPoint}admin/project-event/${id}`,
    success: cb
  });
};
const putProject = (id, data, cb) => {
  $.ajax({
    type: "PUT",
    url: `${endPoint}admin/project-event/${id}`,
    success: cb,
    data
  });
};
