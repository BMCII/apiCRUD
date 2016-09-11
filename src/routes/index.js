module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    console.log("route hit", req.body);
    res.json({
      healthy: true,
    })
  });

  router.use('/api/', require('./api/user')(express));

  return router;
}
