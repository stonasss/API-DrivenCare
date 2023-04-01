import connectionDb from "../config/database.js";

async function findDocEmail(email) {
    return await connectionDb.query(
        `
        SELECT * FROM doctors WHERE email = $1
    `,
        [email]
    );
}

async function findPatEmail(email) {
    return await connectionDb.query(
        `
        SELECT * FROM doctors WHERE email = $1
    `,
        [email]
    );
}

async function createDoctor({ name, email, password }) {
    await connectionDb.query(
        `
        INSERT INTO doctors (name, email, password)
        VALUES ($1, $2, $3)
    `,
        [name, email, password]
    );
}

async function createPatient({ name, email, password }) {
    await connectionDb.query(
        `
        INSERT INTO patients (name, email, password)
        VALUES ($1, $2, $3)
    `,
        [name, email, password]
    );
}

async function createSession({ token, user_id }) {
    await connectionDb.query(
        `
        INSERT INTO sessions (token, user_id)
        VALUES ($1, $2)
    `,
        [token, user_id]
    );
}

export default {
    findDocEmail,
    findPatEmail,
    createDoctor,
    createPatient,
    createSession,
};
