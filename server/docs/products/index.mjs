import getAll from "./getAll.mjs";
import schema from "./_models.mjs"

export default {
    paths: {
        "/products": {
            ...getAll
        },
    },
    schema: {
        ...schema
    }
}