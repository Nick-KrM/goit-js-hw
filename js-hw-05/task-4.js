class StringBuilder {
    constructor(string) {
        this._value = string;
    }

    get value() {
        return this._value;
    }
    set value(newLetter) {
        this._value = newLetter;
    }

    append(addStr) {
        const endString = this._value + addStr;
        this._value = endString;
    }

    prepend(addStr) {
        const prependStr = addStr + this._value;
        this._value = prependStr;
    }

    pad(addStr) {
        const finishStr = addStr.concat(this._value, addStr);
        this._value = finishStr;
    }
};

const builder = new StringBuilder('.');
console.log(builder._value);
builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='


const omgBuilder = new StringBuilder('_');
console.log(omgBuilder._value);

omgBuilder.append('o');
console.log(omgBuilder.value); // '_o'

omgBuilder.append(')');
console.log(omgBuilder.value); // '_o)'

omgBuilder.prepend('(O');
console.log(omgBuilder.value); // '(O_o)'

omgBuilder.pad('=');
console.log(omgBuilder.value); // '=(O_o)='