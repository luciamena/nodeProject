function router(app) {
  app.use('/user', require('./src/userRoutes'));
}


module.exports = router;
