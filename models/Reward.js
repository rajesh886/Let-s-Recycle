const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RewardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    reward: {
        type: Number,
    },
});

module.exports = Reward = mongoose.model('reward', RewardSchema);