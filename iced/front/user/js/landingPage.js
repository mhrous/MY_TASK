$(document).ready(function() {
  const questionsArray = [
    { q: "من نحن ؟", a: "" },
    { q: "ما هي رسالتا ؟", a: "" },
    { q: "ما الذي يميزنا عن باقي المنافسين ؟", a: "" },
    { q: "ماذا نطمح بالمستقبل ؟", a: "" },
    { q: "من اين نبعة الفكرة ؟", a: "" },
    { q: " كيف يمكنكم التواصل معنا ؟", a: "" }
  ];

  const renderLastEvent = array => {
    let str = "";
    array.forEach(e => {
      str += `
      <a href="${e.video}"  data-fancybox>
      <div class="swiper-slide p-4">
      <div class="card card-overlay card-hover-overlay">
        <figure class="figure">
          <img
            alt="Image placeholder"
            src="${e.image}"
            class="img-fluid"
            style="height: 300px;"

          />
        </figure>
        <div class="card-img-overlay d-flex flex-column align-items-center p-0">
          <div class="overlay-text w-75 mt-auto mb-auto p-4">
            <p class="lead">
            ${e.name}
            </p>
          </div>
        </div>
      </div>
    </div>
    </a>
      `;
    });
    $(".swiper-wrapper").html(str);
  };

  randerLastProject = array => {
    let left = true;
    let str = "";
    array.forEach(e => {
      str += `
      <div class="section-process-step">
      <div class="container">
        <div class="row row-grid align-items-center justify-content-between">
          <div class="col-xl-5 col-lg-6 ${left ? "order-lg-2" : "order-lg-1"}">
            <div class="pr-md-4" style="text-align: right">
              <h3 class="mt-4">${e.name}</h3>
              <p class="lead my-4">
           ${e.description}
              </p>
            </div>
          </div>
          <div class="col-lg-5 ${left ? "order-lg-1" : "order-lg-2"}">
            <a href="${e.video}" data-fancybox>
              <img
                alt="Image placeholder"
                width="400px"
                src="${e.image}"
                class="img-center img-fluid rounded-lg shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
      `;
      left = !left;
    });
    $(".section-process").html(str);
  };
  const randerQuestions = () => {
    const maid = Math.ceil(questionsArray.length / 2);
    let accordion = 1;
    let str = ` <div class="col-xl-6">
    <div id="accordion-1" class="accordion accordion-spaced">`;
    questionsArray.forEach((e, i) => {
      if (i == maid) {
        str += `</div> </div>
          <div class="col-xl-6">
          <div id="accordion-2" class="accordion accordion-spaced">
          `;
        accordion = 2;
      }
      str += `
      <div class="card">
      <div class="card-header py-4" id="heading-${i}" data-toggle="collapse" role="button" data-target="#collapse-${i}" aria-expanded="false" aria-controls="collapse-${i}">
        <h6 class="mb-0"> ${e.q}</h6>
      </div>
      <div id="collapse-${i}" class="collapse" aria-labelledby="heading-${i}" data-parent="#accordion-${accordion}">
        <div class="card-body">
          <p>${e.a} </p>
        </div>
      </div>
    </div>
      `;
    });
    str += "</div></div>";
    $("#questions-container").html(str);
  };

  const start = () => {
    randerQuestions();
    getLast4Event(({ data }) => {
      renderLastEvent(data);
    });
    getLast4Porject(({ data }) => {
      randerLastProject(data);
    });
  };

  start();
});
