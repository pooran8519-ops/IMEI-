const axios = require('axios');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { imei } = req.query;
  
  if (!imei) {
    return res.status(400).json({
      success: false,
      error: 'IMEI number is required',
      developer: '@MS_HAC4KER'
    });
  }

  try {
    // IMEI validation logic
    const isValid = /^\d{15}$/.test(imei);
    
    if (!isValid) {
      return res.status(400).json({
        success: false,
        error: 'Invalid IMEI format (must be 15 digits)',
        developer: '@MS_HAC4KER'
      });
    }

    // Mock data - in production, integrate with real IMEI databases
    const imeiData = {
      success: true,
      data: {
        imei: imei,
        model: getRandomModel(),
        brand: getRandomBrand(),
        manufacturing_date: getRandomDate(),
        country: 'China',
        status: 'Clean',
        network_locked: 'No',
        warranty_status: Math.random() > 0.5 ? 'Active' : 'Expired',
        specifications: {
          screen: '6.5" AMOLED',
          battery: '5000mAh',
          ram: '8GB',
          storage: '128GB'
        }
      },
      developer: '@MS_HAC4KER',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(imeiData);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      developer: '@MS_HAC4KER'
    });
  }
};

function getRandomBrand() {
  const brands = ['Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Google'];
  return brands[Math.floor(Math.random() * brands.length)];
}

function getRandomModel() {
  const models = ['Galaxy S23', 'iPhone 14', 'Redmi Note 12', 'OnePlus 11', 'Vivo X90'];
  return models[Math.floor(Math.random() * models.length)];
}

function getRandomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date(2024, 0, 1);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}
