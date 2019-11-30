$(document).ready(function() {
    const projectContainer = $(".project-container");
    const filter = $(".s_input");
    let project = [];
    const render = () => {
      const value = filter.val();
      console.log(value, filter);
      let str = "";
      console.log(project);
      project
        .filter(e => e.name.startsWith(value))
        .forEach(e => {
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
      projectContainer.html(str);
    };
  
    const start = () => {
      getAllEvent(({ data }) => {
        project = data;
        render();
      });
      $("input").on("change", function() {
        console.log(5);
        console.log(filter.val());
        render();
      });
    };
  
    start();
  });
  