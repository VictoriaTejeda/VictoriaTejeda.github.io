const prueba = (id, idPlan, idBtn ) => {
  let allCards = document.querySelectorAll("div.card");
  let allbtns = document.querySelectorAll(".btn-plan");

  
  allCards.forEach(function (id) {
    id.classList.remove("selected-plan");
  });
  allbtns.forEach(function (btn) {
    btn.innerHTML = "seleccionar este plan";
  });
  

  active(id, idPlan, idBtn );
};

const active = (val,idPlan, selected ) => {
  let card = document.getElementById(val);
  let btn = document.getElementById(selected);
  let plan=document.getElementById(idPlan);
  let btnContinue = document.getElementById("continue");
  const type= plan.innerHTML
  card.classList.add("selected-plan");
  btn.innerHTML = "seleccionado";
 btnContinue.innerHTML= `Continuar con  ${type}`
};
