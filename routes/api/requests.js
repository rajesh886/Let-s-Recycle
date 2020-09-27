const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Request = require('../../models/Request');
const User = require('../../models/User');

// @route   POST api/requests
// @desc    Create a request
// @access  Private
router.post(
  '/',
  [auth, [check('date', 'Date is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newRequest = new Request({
        date: req.body.date,
        time: req.body.time,
        phone: req.body.phone,
        address: req.body.address,
        user: req.user.id
      });

      const request = await newRequest.save();

      res.json(request);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


module.exports = router;
