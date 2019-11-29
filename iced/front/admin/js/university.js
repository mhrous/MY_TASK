$(document).ready(function() {
  let edit = null;
  let university = [];
  const data = {};
  const modal = $("#add-university");
  const nameInput = $("#name-university-input");
  const tableBody = $("tbody");

  const rander = () => {
    let str = "";
    university.forEach(e => {
      str += `
        <tr>
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

  const start = () => {
    getAllUniversity(({ data }) => {
      university = data;
      rander();
    });
    addEventOnInput(nameInput,"name",data)
  };


  $(".add-new-university").on("click", function() {
    nameInput.val("");
    modal.modal("show");
    edit = null;
  });
  tableBody.on("click", "button.delete", function() {
    const id = $(this).data("id");
    deleteUniversity(id, ({ data: { _id } }) => {
      university = university.filter(e => e._id != _id);
      rander();
    });
  });

  tableBody.on("click", "button.edit", function() {
    edit = $(this).data("id");
    const { name } = university.find(e => e._id === edit);
    data.name = name;
    nameInput.val(name);
    modal.modal("show");
  });
  $("#ok-btn").on("click", function() {
    if (!edit)
      addUniversity(data, ({ data }) => {
        university.push(data);
        rander();
      });
    else {
      putUniversity(edit, data, ({ data }) => {
        university = university.map(e => (e._id == data._id ? data : e));
        rander();
      });
    }
    edit = null;
    modal.modal("hide");
  });

  start();
});
