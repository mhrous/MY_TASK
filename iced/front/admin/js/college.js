$(document).ready(function() {
  let edit = null;
  let college = [];
  const data = {};
  const modal = $("#add-college");
  const universitySelect = $("#university");
  const nameInput = $("#name");
  const yearsInput = $("#years");
  const descriptionTextArea = $("#description");
  const tableBody = $("tbody");

  const rander = () => {
    let str = "";
    college.forEach(e => {
      str += `
        <tr>
        <th scope="row">
         ${e.university.name}
        </th>
        <th scope="row">
        ${e.name}
       </th>

       <th scope="row">
       ${e.years}
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

  $(".add-new-college").on("click", function() {
    
    nameInput.val("");
    yearsInput.val("");
    universitySelect.val("");
    descriptionTextArea.val("");
    modal.modal("show");
    edit = null;
  });

  const renderUniversitySelect = array => {
    let str = "";
    array.forEach(e => {
      str += `<option value="${e._id}">${e.name}</option>`;
    });
    universitySelect.html(str);
  };

  const start = () => {
    getAllUniversity(({ data }) => {
      renderUniversitySelect(data);
    });
    getAllColleges(({ data }) => {
      college = data;
      rander();
    });

    addEventOnInput(universitySelect, "university", data);
    addEventOnInput(nameInput, "name", data);
    addEventOnInput(yearsInput, "years", data);
    addEventOnInput(descriptionTextArea, "description", data);
  };

  tableBody.on("click", "button.delete", function() {
    const id = $(this).data("id");
    deleteCollege(id, ({ data: { _id } }) => {
      college = college.filter(e => e._id != _id);
      rander();
    });
  });

  tableBody.on("click", "button.edit", function() {
    edit = $(this).data("id");
    const { name, university, years, description } = college.find(
      e => e._id === edit
    );
   
    nameInput.val(name);
    universitySelect.val(university._id);
    yearsInput.val(years);
    descriptionTextArea.val(description);
    modal.modal("show");
  });

  $("#ok-btn").on("click", function() {
    if (!edit)
      addCollege(data, ({ data }) => {
        college.push(data);
        rander();
      });
    else {
      putCollege(edit, data, ({ data }) => {
        college = college.map(e => (e._id == data._id ? data : e));
        rander();
      });
    }
    edit = null;
    modal.modal("hide");
  });

  start();
});
