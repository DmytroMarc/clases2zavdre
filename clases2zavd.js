const todayYear = new Date().getFullYear();

class Employee {
    constructor(firstName, lastName, phoneNumber, position, education, yearOfEmployment, yearOfDismissal) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNum = phoneNumber
        this.position = position
        this.education = education
        this.yearOfEmployment = yearOfEmployment
        this.yearOfDismissal = yearOfDismissal
    }

    get position() {
        return this._position
    }
    set position(value) {
        if (['Кориспондент', 'Фотограф', 'Дизайнер', 'Викладач'].includes(value)) this._position = value
        else this._position = false
    }

    get yearOfEmployment() {
        return this._yearOfEmployment
    }
    set yearOfEmployment(value) {
        if (value > todayYear) this._yearOfEmployment = false
        else this._yearOfEmployment = value
    }

    get yearOfDismissal() {
        return this._yearOfDismissal
    }
    set yearOfDismissal(value) {
        if (value < this._yearOfEmployment) this._yearOfDismissal = false
        else this._yearOfDismissal = value
    }
}

const employee1 = new Employee('Артем', 'Зеленський', '+380123456789', 'Кориспондент', 2013, 2018); 
const employee2 = new Employee('Микола', 'Лаврик', '+380987654321', 'Фотограф', 2019, 2020); 
const employee3 = new Employee('Денис', 'Олександрів', '+380321654987', 'Дизайнер', 2015, 2020); 
const employee4 = new Employee('Володимир', 'Кланськмй', '+380987456132', 'Викладач', 2011, 2018); 

console.log(employee1)
console.log(employee2)
console.log(employee3)
console.log(employee4)