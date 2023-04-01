import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";

async function createDoctor({ name, email, password }) {
    const { rows: user } = await userRepositories.findDocEmail(email);
    if (user.length !== 0) throw new Error("Doctor already exists");

    const hashPassword = await bcrypt.hash(password, 10);
    await userRepositories.createDoctor({
        name,
        email,
        password: hashPassword,
    });
}

async function createPatient({ name, email, password }) {
    const { rows: user } = await userRepositories.findPatEmail(email);
    if (user.length !== 0) throw new Error("Patient already exists");

    const hashPassword = await bcrypt.hash(password, 10);
    await userRepositories.createPatient({
        name,
        email,
        password: hashPassword,
    });
}

async function loginDoctor({ email, password }) {
    const { rows: users } = await userRepositories.findDocEmail(email);
    if (users.length === 0) throw new Error("Incorrect email or password");
    const [user] = users;

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Incorrect email or password");

    const token = uuidV4();
    await userRepositories.createSession({ token, user_id: user.id });

    return token;
}

async function loginPatient({ email, password }) {
    const { rows: users } = await userRepositories.findPatEmail(email);
    if (users.length === 0) throw new Error("Incorrect email or password");
    const [user] = users;

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Incorrect email or password");

    const token = uuidV4();
    await userRepositories.createSession({ token, user_id: user.id });

    return token;
}

export default {
    createDoctor,
    createPatient,
    loginDoctor,
    loginPatient,
};
