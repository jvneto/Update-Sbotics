var extend = require("extend-shallow");

const SizeCreate = (size) => {
  return 100 / size;
};

const Create = (percentage, state, limit, id = "") => {
  document.getElementById(
    "ProgreesBar"
  ).innerHTML += `<div id="${id}" class="progress-bar bg-${state}" role="progressbar" style="width: ${percentage}%" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="${limit}"></div>`;
};

const Update = (id, state) => {
  // setTimeout(() => {
  //   document.getElementById(id).classList.remove(`bg-warning`);
  //   document.getElementById(id).classList.add(`bg-${state}`);
  // }, 300);
  console.log(id);
   document.getElementById(id).classList.remove(`bg-warning`);
    document.getElementById(id).classList.add(`bg-${state}`);
};

const Reset = (options) => {
  if (!options) options = { progressBarName: "ProgreesBar" };
  document.getElementById(options.progressBarName).innerHTML = "";
};

const PercentageView = (value, options) => {
  if (!value) return undefined;

  options = extend(
    {
      elementView: false,
      elementInner: "",
      decimalCases: 2,
      ignoreZero: true,
    },
    options
  );

  const elementView = options.elementView;
  const elementInner = options.elementInner;
  const decimalCases = options.decimalCases;
  const ignoreZero = options.ignoreZero;
  const ProgressID = value.progressID;
  const Size = value.size;

  const percentageValue = ignoreZero
    ? +(ProgressID * Size).toFixed(decimalCases)
    : (ProgressID * Size).toFixed(decimalCases);

  if (elementView)
    document.getElementById(elementInner).innerHTML = `${percentageValue}%`;
  else return `${percentageValue}%`;
};

export { SizeCreate, Create, Update, Reset, PercentageView };
