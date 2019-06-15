class Database {


    static get() {
        return Database.shouldBoilKettle;
    }

    static setShouldBoilKettle(shouldBoilKettle) {
        Database.shouldBoilKettle = shouldBoilKettle;
    }

    static toString() {
        if (Database.shouldBoilKettle) {
            return 'Request sent to turn on kettle';
        } else {
            return 'Kettle is not armed';
        }
    }
}

Database.shouldBoilKettle = false;

exports.Database = Database;