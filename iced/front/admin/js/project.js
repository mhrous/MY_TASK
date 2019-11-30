$(document).ready(function() {
  let edit = null;
  let project = [];
  const data = { type: "p" };
  const modal = $("#add-project");
  const collegeSelect = $("#college");
  const nameInput = $("#name");
  const descriptionTextArea = $("#description");
  const videoInput = $("#video");
  const imageInput = $("#image");
  const tableBody = $("tbody");

  const rander = () => {
    let str = "";
    project.forEach(e => {
      str += `
        <tr>
        <th scope="row">
         ${e.college.name} (${e.college.university.name})
        </th>
        <th scope="row">
        ${e.name}
       </th>

        <td class="text-center">
          <!-- Actions -->
          <div class="actions ml-3">
            <button
              class="action-item text-success mr-2 edit"
              data-toggle="tooltip"
              title="Edit"
              data-id="${e._id}"

            >
              <i class="far fa-pencil-alt"></i>
            </button>
            <button
              class="action-item text-danger mr-2 delete"
              data-toggle="tooltip"
              title="Move to trash"
              data-id="${e._id}"
              
            >
              <i class="far fa-trash" ></i>
            </button>
          </div>
        </td>
      </tr>
      <tr class="table-divider"></tr>
        `;
    });
    tableBody.html(str);
  };

  $(".add-new-project").on("click", function() {
    collegeSelect.val("");
    nameInput.val("");

    descriptionTextArea.val("");
    videoInput.val("");
    imageInput.val("");
    modal.modal("show");
    edit = null;
  });

  const renderCollegeSelect = array => {
    let str = "";
    array.forEach(e => {
      str += `<option value="${e._id}">${e.name} ( ${e.university.name} )</option>`;
    });
    collegeSelect.html(str);
  };

  const start = () => {
    getAllColleges(({ data }) => {
      renderCollegeSelect(data);
    });

    getAllProject(({ data }) => {
      project = data;
      rander();
    });

    addEventOnInput(collegeSelect, "college", data);
    addEventOnInput(nameInput, "name", data);
    addEventOnInput(videoInput, "video", data);
    addEventOnInput(descriptionTextArea, "description", data);
    addEventOnInput(imageInput, "image", data);
  };

  tableBody.on("click", "button.delete", function() {
    const id = $(this).data("id");
    deleteProject(id, ({ data: { _id } }) => {
      project = project.filter(e => e._id != _id);
      rander();
    });
  });

  tableBody.on("click", "button.edit", function() {
    edit = $(this).data("id");
    const { name, college, video, description, image } = project.find(
      e => e._id === edit
    );

    nameInput.val(name);
    collegeSelect.val(college._id);
    imageInput.val(image);
    videoInput.val(video);
    descriptionTextArea.val(description);
    modal.modal("show");
  });

  $("#ok-btn").on("click", function() {
    if (!edit)
      addProject(data, ({ data }) => {
        project.push(data);
        rander();
      });
    else {
      putProject(edit, data, ({ data }) => {
        project = project.map(e => (e._id == data._id ? data : e));
        rander();
      });
    }
    edit = null;
    modal.modal("hide");
  });

  start();
});
