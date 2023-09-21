// controllers/intensityController.js
const YourModel = require('../models/insight');

// Controller function to get Intensity data
exports.getIntensityData = async (req, res) => {
  try {
    const intensityData = await YourModel.find({}, 'intensity title');
    res.json(intensityData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get Likelihood data
exports.getLikelihoodData = async (req, res) => {
  try {
    const LikelihoodData = await YourModel.find({}, 'likelihood');
    res.json(LikelihoodData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get Relevance data
exports.getRelevanceData = async (req, res) => {
  try {
    const relevanceData = await YourModel.find({}, 'relevance');
    res.json(relevanceData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get Year data
exports.getYearData = async (req, res) => {
  try {
    const yearData = await YourModel.find({}, 'year');
    res.json(yearData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get Country data
exports.getCountryData = async (req, res) => {
  try {
    const countryData = await YourModel.find({}, 'country');
    res.json(countryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get Topics data
exports.getTopicsData = async (req, res) => {
  try {
    const topicsData = await YourModel.find({}, 'topics');
    res.json(topicsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Controller function to get Region data
exports.getRegionData = async (req, res) => {
  try {
    const regionData = await YourModel.find({}, 'region');
    res.json(regionData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get City data
exports.getCityData = async (req, res) => {
  try {
    const cityData = await YourModel.find({}, 'insight');
    res.json(cityData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};