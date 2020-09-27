const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Reward = require('../../models/Reward');
const User = require('../../models/User');

// @route   POST api/rewards
// @desc    Create a reward
// @access  Private
router.post(
    '/',
    [auth],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newReward = new Reward({
                reward: req.body.reward,
                user: req.user.id
            });

            const reward = await newReward.save();

            res.json(reward);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


module.exports = router;