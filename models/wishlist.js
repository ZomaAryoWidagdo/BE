const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongoConnection");

class Wishlist {
    static wishlist() {
        const database = getDb();
        return database.collection("wishlist");
    }

    static async add(data) {
        try {
            await this.wishlist().insertOne(data);
        } catch (err) {
            throw err;
        }
    }

    static async findAll() {
        try {
            const response = await this.wishlist().find().toArray();
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async delete(id) {
        try {
            console.log(id);
            const deleted = await this.wishlist().deleteOne({ "_id": ObjectId(`${id}`) });
            if (deleted.deletedCount === 0) {
                throw { name: "not found", statusCode: 404 };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Wishlist;