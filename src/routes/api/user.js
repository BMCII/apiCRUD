module.exports = (express) => {
  const router = express.Router();

  router.get('/users', (req, res) => {
    console.log("route hit", req.body);
    res.json({
      healthy: true,
    })
  });

  // router.use('/api/', require('./app/user')(express));

  return router;
}
