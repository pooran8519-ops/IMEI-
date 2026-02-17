module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    name: "Powerful Information API",
    version: "1.0.0",
    description: "Multi-purpose Information API by @MS_HAC4KER",
    developer: "@MS_HAC4KER",
    endpoints: {
      imei: "/api/imei/validate?imei=123456789012345",
      pan: "/api/pan/verify?pan=ABCDE1234F",
      aadhaar: "/api/aadhaar/verify?aadhaar=123456789012",
      mobile: "/api/mobile/lookup?number=9876543210",
      vehicle: "/api/vehicle/details?number=MH01AB1234",
      gst: "/api/gst/verify?gst=27ABCDE1234F1Z5"
    },
    github: "https://github.com/MSHAC4KER/info-api",
    timestamp: new Date().toISOString()
  });
};
