import { RequestHandler } from "express"
import { clips } from "../models/clips"
import { verifyUser } from "../services/authService"

export const getClips: RequestHandler = async (req, res, next) => {
    try {
        let gotClips = await clips.findAll()
        res.status(200).send(gotClips)
    } catch {
        res.status(500).send()
    }
}

export const getClip: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id;
            let existing = await clips.findByPk(id)
            if (existing) {
                res.status(200).send(existing)
            } else {
                res.status(404).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}


export const createClip: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let newClip: clips = req.body
            await clips.create(newClip)
            res.status(201).send("Clip Created")
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const editClip: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id;
        let existing = await clips.findByPk(id)
        let updatedClip: clips = req.body
        if (existing) {
            if (updatedClip) {
                clips.update(updatedClip, { where: { clipId: id } })
                res.status(200).send()
            } else {
                res.status(400).send()
            }
        } else {
            res.status(404).send()
        }
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}

export const deleteClip: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id;
            let existing = await clips.findByPk(id)
            if (existing) {
                clips.destroy({ where: { clipId: id } })
                res.status(200).send()
            } else {
                res.status(404).send()
            }
            res.status(200).send()
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}