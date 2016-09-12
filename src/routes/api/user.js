module.exports = (express) => {
  const router = express.Router();

  router.get('/users', (req, res) => {
    res.json({
      healthy: true,
    })
  });

   //router.use('/api/', require('./app/user')(express));

  return router;
}
