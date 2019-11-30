const endPoint = "http://localhost:4000/iced/";

const getAllColleges = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/college`,
    success: cb
  });
};

const getCollege = (id, cb) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/college/${id}`,
    success: cb
  });
};

const getAllProject = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event?type=p`,
    success: cb
  });
};

const getProjectForCollege = (collegeId, cb) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event?type=p&college=${collegeId}`,
    success: cb
  });
};

const getAllEvent = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event?type=e`,
    success: cb
  });
};

const getEventForCollege = (collegeId, cb) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event?type=e&college=${collegeId}`,
    success: cb
  });
};

const getLast4Porject = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event/last?type=p`,
    success: cb
  });
};
const getLast4Event = cb => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/project-event/last?type=e`,
    success: cb
  });
};
