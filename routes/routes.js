const express = require('express');

const router = express.Router();
// home route
router.get('/', (_req, res) => {
    res.send('test server is running');
});
// business route
// business route
// formate
// router.use('/api/users', usersRouter);
// router.use('/api/auth', authRouter);
// router.use('/api/startup', startupRouter);
// router.use('/api/remoforce', remoforceRouter);
// router.use('/api/talent', talentRouter );
// router.use('/api/job', jobRouter);
// router.use('/auth', googleRoute);
// router.use('/auth', linkedinRoute);
// router.use('/calender', CalenderRoute);

module.exports = router;
