const basic = document.getElementById("basic");
const middle = document.getElementById("middle");
const avance = document.getElementById("high");
const btnBasic = document.getElementById("basicPlan");
const btnMiddle = document.getElementById("middlePlan");
const btnAvance = document.getElementById("avancePlan");
const btnContinue = document.getElementById("continue");


const selectPlanBasic = () => {
  basic.classList.add("selected-plan");
  middle.classList.remove("selected-plan");
  avance.classList.remove("selected-plan");
  btnBasic.innerHTML = "Seleccionado";
  btnMiddle.innerHTML = "Seleccionar este plan";
  btnContinue.innerHTML = "Continuar con Básico";
};

const selectPlanInter = () => {
  middle.classList.add("selected-plan");
  basic.classList.remove("selected-plan");
  avance.classList.remove("selected-plan");
  btnMiddle.innerHTML = "Seleccionado";
  btnBasic.innerHTML = "Seleccionar este plan";
  btnAvance.innerHTML = "Seleccionar este plan";
  btnContinue.innerHTML = "Continuar con Intermedio";
};

const selectPlanAvance = () => {
    avance.classList.add("selected-plan");
    basic.classList.remove("selected-plan");
    middle.classList.remove("selected-plan");
    btnAvance.innerHTML = "Seleccionado";
    btnBasic.innerHTML = "Seleccionar este plan";
    btnMiddle.innerHTML = "Seleccionar este plan";
    btnContinue.innerHTML = "Continuar con Avanzado";
  };
  