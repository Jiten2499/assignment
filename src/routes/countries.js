const express = require('express');
const fs = require('fs');
const path = require('path');
const Insight = require('../models/insight');

const router = express.Router();

router.get('/insertData', async (req, res) => {
  try {
    const jsonFilePath = path.join(__dirname, '../static/jsondata.json');
    const data = fs.readFileSync(jsonFilePath, 'utf-8');
    const jsonData = JSON.parse(data);

    await Insight.insertMany(jsonData);
    res.status(200).json({ message: 'Data inserted successfully.' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'An error occurred while inserting data.' });
  }
});

module.exports = router;
