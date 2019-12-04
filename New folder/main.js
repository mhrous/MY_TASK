const DB = {
  solverCanHandel: [
    {
      name: "السرعة",
      unit: ["m/s", "km/s", "sm/s", "متر بالثانية"]
    },
    {
      name: "المسافة",
      unit: ["m", "km", "sm", "متر"]
    },
    {
      name: "الموقع",
      unit: null
    },
    {
      name: "الزمن",
      unit: ["s", "ثانية", "ساعة", "دقيقة"]
    },
    {
      name: "العمل",
      unit: ["s", "ثانية", "ساعة", "دقيقة"]
    },
    {
      name: "الاستطاعة",
      unit: ["s", "ثانية", "ساعة", "دقيقة"]
    },
    {
      name: "القوة",
      unit: ["s", "ثانية", "ساعة", "دقيقة"]
    }
  ]
};

const dataVueObj = new Vue({
  el: "#data",
  data: {
    help: { solverCanHandel: [...DB.solverCanHandel] },
    myData: [
      { name: "الكتلة", value: "5", unit: "Kg", id: new Date().getTime() },
      { name: "المسافة", value: "4", unit: "Km", id: new Date().getTime() },
      { name: "الزمن", value: "4", unit: "دقيقة", id: new Date().getTime() }
    ]
  },
  methods: {
    addNewData() {
      console.table(JSON.parse(JSON.stringify(this.myData)));
      this.myData = [
        ...this.myData,
        {
          name: "",
          value: null,
          unit: "",
          id: new Date().getTime()
        }
      ];
    },
    removeData(id) {
      this.myData = this.myData.filter(e => e.id != id);
    }
  }
});

const requirementsVueObj = new Vue({
  el: "#requirements",
  data: {
    myRequirements: [{ name: "السرعة", solve: "" }]
  },
  methods: {
    addNewRequirements() {
      this.myRequirements = [
        ...this.myRequirements,
        { name: "السرعة", solve: "123<hr/>123" }
      ];
    }
  },
  mounted() {}
});

console.log([...DB.solverCanHandel]);
