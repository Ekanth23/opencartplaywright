import {faker} from '@faker-js/faker';
export class RandomDataGenerator{
    static getFirstName(): string{
        return faker.person.firstName();
    }
    static getRandomLastName(): string{
        return faker.person.lastName();
    }

    static getRandomFullName(): string{
        return faker.person.fullName();
    }

    static getRandomEmail(): string{
        return faker.internet.email();
    }
    static getRandomPhoneNumber(): string{
        return faker.phone.number();
    }
    static getRandomPassword(length: number=10): string{
        return faker.internet.password();
    }
    static getRandomAlphaNumeric(length: number): string{
        return faker.string.alphanumeric(length);
    }

    static getRandomNumeric(length: number): string{
        return faker.string.numeric(length);
    }
    static getRandomUUID(): string{
        return faker.string.uuid();
    }


    static getRandomAddress(): string{
        return faker.location.streetAddress();
    }

    static getRandomCity(): string{
        return faker.location.city();
    }
    static getRandomState(): string{
        return faker.location.state();
    }
    static getRandomZipCode(): string{
        return faker.location.zipCode();
    }
    static getRandomCountry(): string{
        return faker.location.country();
    }   
    static getRandomCompanyName(): string{
        return faker.company.name();
    }

}