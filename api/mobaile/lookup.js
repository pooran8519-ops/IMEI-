module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { number } = req.query;
  
  if (!number) {
    return res.status(400).json({
      success: false,
      error: 'Mobile number is required',
      developer: '@MS_HAC4KER'
    });
  }

  try {
    const operatorData = {
      success: true,
      data: {
        mobile: number,
        operator: getRandomOperator(),
        circle: getRandomCircle(),
        sim_type: ['Prepaid', 'Postpaid'][Math.floor(Math.random() * 2)],
        active: Math.random() > 0.1,
        last_recharge: getRandomDate(),
        validity: Math.random() > 0.5 ? 'Active' : 'Expired',
        location: getRandomCity()
      },
      developer: '@MS_HAC4KER',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(operatorData);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      developer: '@MS_HAC4KER'
    });
  }
};

function getRandomOperator() {
  const operators = ['Jio', 'Airtel', 'Vi', 'BSNL'];
  return operators[Math.floor(Math.random() * operators.length)];
}

function getRandomCircle() {
  const circles = ['Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Gujarat', 'Maharashtra'];
  return circles[Math.floor(Math.random() * circles.length)];
}

function getRandomCity() {
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
  return cities[Math.floor(Math.random() * cities.length)];
      }
