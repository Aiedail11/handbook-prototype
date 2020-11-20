export const state = () => ({
    list: [
        { symbols: [{ letters: "Ar", quantity: 1 }], name: "Argon", id: "6" },
        { symbols: [{ letters: "N", quantity: 2 }], name: "Nitrogen", id: "5" },
        { symbols: [{ letters: "O", quantity: 2 }], name: "Oxygen", id: "1" },
        {
            symbols: [{ letters: "COCl", quantity: 2 }],
            name: "Phosgene",
            id: "2"
        }]
})

export const mutations = {
    create(state, symbolArray, name, id) {
        if (!Array.isArray(symbolArray)) return false;
        if (!Number.isInteger(id)) return false;
        if (name == null) return false;
        for (let i = 0; i < symbolArray.length; i++) {
            if (symbolArray[i].letters == null) return false;
            if (!Number.isInteger(symbolArray[i].quantity)
                || symbolArray[i].quantity < 1) return false;
        }
        state.list.push({ symbols: symbolArray, name: name, id: id });
        return true;
    },
    update(state, symbolArray, name, id) {
        this.delete(state, id);
        this.create(state, symbolArray, name, id);
    },
    delete(state, id) {
        state.list = state.list.filter((value, index, arr) => {
            return value.id != id;
        });
    }

}