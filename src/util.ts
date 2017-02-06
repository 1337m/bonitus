export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

export function applyAttributes(derivedCtor: any, baseCtors: any[]): any {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor).forEach(name => {
            if (derivedCtor[name] === undefined) {
                derivedCtor[name] = baseCtor[name];
            }
        });
    });

    return derivedCtor;
}
