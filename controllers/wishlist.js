const Wishlist = require("../models/wishlist");

class Controller {
    static async add(req, res, next) {

        try {
            const data = req.body;
            await Wishlist.add(data);
            res.status(201).json({ message: "Successfully Add to Wishlist" });
        } catch (err) {
            next(err);
        }
    }

    static async findAll(req, res, next) {
        try {
            const wishlist = await Wishlist.findAll();
            res.status(200).json(wishlist);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            await Wishlist.delete(id);
            res.status(200).json({ message: "Delete Success" });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller;