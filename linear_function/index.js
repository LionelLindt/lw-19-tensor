// Define a machine learning model for linear function
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Specify loss and optimizer for model
model.compile({loss: "meanSquaredError", optimizer: "sgd"});

// Prepare training data
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// Train the model and set predict button to active

const $predictButton = $('#predictButton');
model.fit(xs, ys, {epochs: 500}).then(() => $predictButton.prop('disabled', false).text('predict'));

// Register click event handler for predict button
$predictButton.on('click', () => {
  const input = $("#inputValue").val();
  $("#output").text(model.predict(tf.tensor2d([parseInt(input)], [1, 1])));
});
