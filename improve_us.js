const bodyParser = require('body-parser');

const processImproveForm = (req, res, next) => {
  res.send('submitted successfully');
};

module.exports = processImproveForm;