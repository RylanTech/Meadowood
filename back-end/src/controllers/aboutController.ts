import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { live } from "../models/live"
import { about } from "../models/about"

export const aboutText: RequestHandler = async (req, res, next) => {
    try {
        let text = await about.findOne({ where: { aboutId: 1 } })
        res.status(200).send(text)
    } catch {
        res.status(500).send()
    }
}

export const editAbout: RequestHandler = async (req, res, next) => {
    // try {
        let usr = await verifyUser(req)
        if (usr) {
            let editedText: about = req.body
            if (editedText.aboutText && editedText.aboutTitle) {
                let text = await about.findOne({ where: { aboutId: 1 } })
                if (text) {
                    about.update(editedText, { where: { aboutId: 1 } })
                    res.status(202).send()
                } else {
                    await about.create(editedText)
                    res.status(201).send()
                }
            }
        } else {
            res.status(401).send()
        }
    // } catch {
    //     res.status(500).send()
    // }
}