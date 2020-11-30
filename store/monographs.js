export const state = () => ({
    list: [
        { symbols: [{ letters: "Ar", quantity: 1 }], name: "Argon", id: "1" },
        { symbols: [{ letters: "N", quantity: 2 }], name: "Nitrogen", id: "2" },
        {
            symbols: [{ letters: "O", quantity: 2 }], name: "Oxygen", id: "3",
            synonyms: ['LOX (liquid only)'], casRegistryNumber: '7782-44-7',
            dotHazardClass: '2.2, (5.1), (Nonflammable gas)',
            dotLabel: 'NON-FLAMMABLE GAS, OXIDIZER',
            tcShippingName: 'Oxygen, compressed Oxygen, refrigerated liquid',
            tcClassification: '2.2, (5.1)',
            tcLabel: 'OXIDIZING GAS',
            unNumber: 'UN 1072 (for compressed gas) UN 1073 (for refrigerated liquid)'
        },
        {
            symbols: [{ letters: "COCl", quantity: 2 }],
            name: "Phosgene",
            id: "4",
            synonyms: ['emily', 'haggard']
        }],
    total: 4
})

export const mutations = {
    create(state, monograph) {
        if (!monograph) return;
        if (!Array.isArray(monograph.symbols)) return;
        monograph.id = state.total + 1;
        state.total++;

        if (monograph.name == null) return;

        for (let i = 0; i < monograph.symbols.length; i++) {
            if (monograph.symbols[i].letters == null) return;
            if (!Number.isInteger(monograph.symbols[i].quantity)
                || monograph.symbols[i].quantity < 1) return;
        }
        state.list.push(monograph);

        state.list.sort((a, b) => {
            if (b.id > a.id) {
                return -1;
            }
            return 1;
        });

    },

    delete(state, id) {
        state.list = state.list.filter((value, index, arr) => {
            return value.id != id;
        });
    },
    update(state, monograph) {
        this.delete(state, monograph.id);
        this.create(state, monograph);
    }

}

export const getters = {
    testGet() {
        return "test successful";
    },
    getMonographById: (state) =>
        (id) => {
            // return "test";
            return state.list.find((value, index, arr) => {
                return value.id == id;
            });

        },
    testParam(msg) {
        return msg;
    }
}