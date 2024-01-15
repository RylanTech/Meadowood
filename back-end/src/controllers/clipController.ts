import { RequestHandler } from "express"
import { clips } from "../models/clips"

export const getClips: RequestHandler = async (req, res, next) => {
    try {
        let gotClip = await clips.findAll()
        res.status(200).send(gotClip)
    } catch {
        res.status(500).send()
    }
}

export const createClip: RequestHandler = async (req, res, next) => {
    try {
        let newClip:clips = req.body
        await clips.create(newClip)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}

export const deleteClip: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id;
        let existing = await clips.findByPk(id)
        if (existing) {
            clips.destroy({where: {clipId: id}})
            res.status(200).send()
        } else {
            res.status(404).send()
        }
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}