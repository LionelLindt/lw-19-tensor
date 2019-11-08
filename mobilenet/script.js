$(document).ready(() => {
  $('[data-predict=""]').on('click', async event => {
    let model = await mobilenet.load();
    const prediction = await model.classify($(event.target).prev()[0]);
    console.log(prediction);
    $(event.target).append(`<h3>${prediction[0].className}</h3>`)
  })
});
