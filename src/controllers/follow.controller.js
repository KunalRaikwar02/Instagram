const followModel = require("../models/follow.model")

// Send Follow Request
async function sendFollowRequest(req, res) {
    const follower = req.user.username
    const followee = req.params.username

    if (follower === followee) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    try {
        const follow = await followModel.create({
            follower,
            followee
        })

        res.status(201).json({
            message: "Follow request sent",
            follow
        })
    } catch (err) {
        res.status(400).json({
            message: "Already requested"
        })
    }
}


// Accept Request
async function acceptFollowRequest(req, res) {
    const followId = req.params.followId

    const follow = await followModel.findById(followId)

    if (!follow) {
        return res.status(404).json({
            message: "Request not found"
        })
    }

    // Security check
    if (follow.followee !== req.user.username) {
        return res.status(403).json({
            message: "Not authorized"
        })
    }

    follow.status = "accepted"
    await follow.save()

    res.status(200).json({
        message: "Request accepted",
        follow
    })
}


// Reject Request
async function rejectFollowRequest(req, res) {
    const followId = req.params.followId

    const follow = await followModel.findById(followId)

    if (!follow) {
        return res.status(404).json({
            message: "Request not found"
        })
    }

    if (follow.followee !== req.user.username) {
        return res.status(403).json({
            message: "Not authorized"
        })
    }

    follow.status = "rejected"
    await follow.save()

    res.status(200).json({
        message: "Request rejected",
        follow
    })
}


module.exports = {
    sendFollowRequest,
    acceptFollowRequest,
    rejectFollowRequest
}