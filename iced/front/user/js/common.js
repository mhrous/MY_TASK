$(document).ready(function() {
  const socialMedia = [
    { href: "https://www.facebook.com/gameaty/", icon: "fa-facebook" },
    { href: "", icon: "fa-google" },
    { href: "", icon: "fa-youtube" }
  ];
  let Colleges = [];

  const randerSocialMedia = () => {
    let str = ``;
    socialMedia.forEach(e => {
      str += `    <li class="nav-item">
          <a class="nav-link h3 px-4" href="${e.href}" target="_blank"><i class="fab ${e.icon}"></i></a>
        </li>`;
    });

    $("#social-media-container").html(str);
  };
  const randerColleges = array => {
    const maid = Math.ceil(array.length / 2);
    let str = `                    
    <div class="col-sm-6">`;
    array.forEach((e, i) => {
      if (i === maid) {
        str += '</div><div class="col-sm-6">';
      }
      str += `
        <a
        href="./college.html?_id=${e._id}"
        class="dropdown-item"
        >${e.name}</a
      >
        `;
    });
    str += `</div>`;

    $("#college-dropdown-container").html(str)
  };

  const start = () => {
    randerSocialMedia();
    getAllColleges(({ data }) => randerColleges(data));
  };
  start();
});
