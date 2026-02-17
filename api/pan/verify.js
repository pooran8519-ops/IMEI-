const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { pan } = req.query;
  
  if (!pan) {
    return res.status(400).json({
      success: false,
      error: 'PAN number is required',
      developer: '@MS_HAC4KER'
    });
  }

  try {
    // PAN validation format
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    
    if (!panRegex.test(pan)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid PAN format',
        developer: '@MS_HAC4KER'
      });
    }

    // Mock data with PAN information
    const panData = {
      success: true,
      data: {
        pan_number: pan,
        full_name: getRandomName(),
        father_name: getRandomName(),
        date_of_birth: getRandomDate(),
        status: 'Active',
        type: ['Individual', 'Company', 'Trust'][Math.floor(Math.random() * 3)],
        last_updated: new Date().toISOString().split('T')[0],
        jurisdiction: getRandomJurisdiction()
      },
      developer: '@MS_HAC4KER',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(panData);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      developer: '@MS_HAC4KER'
    });
  }
};

function getRandomName() {
  const names = ['RAJESH KUMAR', 'SUNITA SHARMA', 'AMIT PATEL', 'PRIYA SINGH', 'VIKAS GUPTA'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomJurisdiction() {
  const jurisdictions = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune'];
  return jurisdictions[Math.floor(Math.random() * jurisdictions.length)];
        }
