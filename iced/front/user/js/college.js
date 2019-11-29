$(document).ready(function() {
  const id = location.search.split("=")[1];
  const mainTab = $("#main-tab");
  const eventTab = $("#event-tab");
  const projectTab = $("#project-tab");
  const subjectTab = $("#subject-tab");

  const supHeaderInit = () => {
    $("#sub-header").on("click", "button", function() {
      const tap = $(this).data("tap");
      $(".tap-item").addClass("hidden-item");
      switch (tap) {
        case "m":
          mainTab.removeClass("hidden-item");
          break;
        case "e":
          eventTab.removeClass("hidden-item");
          break;
        case "p":
          projectTab.removeClass("hidden-item");
          break;
        case "s":
          subjectTab.removeClass("hidden-item");
          break;
      }
    });
  };
  const mainInit = () => {
    getCollege(id, ({ data }) => {
      $("#main-container").html(data.description);
      $(".college-name").html(data.name);
    });
  };

  const projectInit = () => {
    getProjectForCollege(id, ({ data }) => {
      let str = "";
      data.forEach(e => {
        str += `

        <div class="col-lg-6">
        <a href="${e.video}" class="fancybox"  data-fancybox>

        <div class="card hover-shadow-lg hover-translate-y-n10">
          <div class="card-image p-0">
            <img alt="Image placeholder" src="${e.image}" class="card-img">
          </div>
          <span class="mask bg-dark opacity-3"></span>
          <span class="mask hover-mask bg-gradient-primary opacity-4"></span>
          <div class="card-img-overlay d-flex flex-column">
            <div class="col pt-2">
              <h3 class="text-capitalize mb-1">
                ${e.name}
              </h3>
         
            </div>
            <div class="w-100 mt-auto text-right">
              <span class="text-white font-weight-bold">Jun 20, 2019</span>
            </div>
          </div>
        </div>
        </a>
      </div>        
        `;
      });
      projectTab.html(str);
    });
  };

  const eventInit = () => {
    getEventForCollege(id, ({ data }) => {
      let str = "";
      data.forEach(e => {
        str += `

        <div class="col-lg-6">
        <a href="${e.video}" class="fancybox"  data-fancybox>

        <div class="card hover-shadow-lg hover-translate-y-n10">
          <div class="card-image p-0">
            <img alt="Image placeholder" src="${e.image}" class="card-img">
          </div>
          <span class="mask bg-dark opacity-3"></span>
          <span class="mask hover-mask bg-gradient-primary opacity-4"></span>
          <div class="card-img-overlay d-flex flex-column">
            <div class="col pt-2">
              <h3 class="text-capitalize mb-1">
                ${e.name}
              </h3>
         
            </div>
            <div class="w-100 mt-auto text-right">
              <span class="text-white font-weight-bold">Jun 20, 2019</span>
            </div>
          </div>
        </div>
        </a>
      </div>        
        `;
      });

      eventTab.html(str);
    });
  };
  const start = () => {
    supHeaderInit();

    mainInit();
    projectInit();
    eventInit();
  };
  start();
});
