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
        }]
})

export const mutations = {
    create(state, monograph) {
        if (!monograph) return;
        if (!Array.isArray(monograph.symbolArray)) return;
        if (!Number.isInteger(monograph.id)) return;
        if (monograph.name == null) return;
        for (let i = 0; i < monograph.symbolArray.length; i++) {
            if (monograph.symbolArray[i].letters == null) return;
            if (!Number.isInteger(monograph.symbolArray[i].quantity)
                || monograph.symbolArray[i].quantity < 1) return;
        }
        state.list.push(monograph);
    },
    update(state, monograph) {
        this.delete(state, monograph.id);
        this.create(state, monograph);
    },
    delete(state, id) {
        state.list = state.list.filter((value, index, arr) => {
            return value.id != id;
        });
    }

}