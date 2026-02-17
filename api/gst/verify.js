module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { gst } = req.query;
  
  if (!gst) {
    return res.status(400).json({
      success: false,
      error: 'GST number is required',
      developer: '@MS_HAC4KER'
    });
  }

  try {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    
    const gstData = {
      success: true,
      data: {
        gstin: gst,
        business_name: getRandomBusiness(),
        trade_name: getRandomBusiness(),
        registration_date: getRandomDate(),
        constitution: ['Private Limited', 'Public Limited', 'Partnership', 'Proprietorship'][Math.floor(Math.random() * 4)],
        status: 'Active',
        state: getRandomState(),
        state_code: Math.floor(Math.random() * 37) + 1,
        last_return_filed: getRandomDate(),
        annual_turnover: '₹' + (Math.random() * 100).toFixed(2) + ' Cr'
      },
      developer: '@MS_HAC4KER',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(gstData);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      developer: '@MS_HAC4KER'
    });
  }
};

function getRandomBusiness() {
  const businesses = ['TECH SOLUTIONS PVT LTD', 'GLOBAL TRADERS', 'SHARMA ENTERPRISES', 'ABC CORPORATION'];
  return businesses[Math.floor(Math.random() * businesses.length)];
}

function getRandomState() {
  const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'West Bengal'];
  return states[Math.floor(Math.random() * states.length)];
          }
