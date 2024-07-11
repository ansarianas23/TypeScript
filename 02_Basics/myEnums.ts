// Enums (short for "enumerations") in TypeScript are a way to define a set of named constants. They are used to create a collection of related values that can be assigned to a variable. Enums make it easier to document intent or create a set of distinct cases.

const enum seatChoices {
    AISLE,
    MIDDLE,
    WINDOW
}

// by default value of enums are number starts from 0
// like AISLE = 0, MIDDLE = 1, WINDOW =1
// but we can also define them our own values

const enum seatChoices2 {
    AISLE = 5,
    MIDDLE,
    WINDOW
}

// now it starts from 5 to rest of the length

// accessing emus values
const hcSeat = seatChoices.AISLE

// we can also assign string but remember that when assign string to first element we have to give number to other elemen of assign string also to them.

const enum seatChoices3 {
    AISLE = "aisle",
    MIDDLE = 5,
    WINDOW
}

// Note:- if we dont put const or let before enum it will genereate some unnecessary crazy code