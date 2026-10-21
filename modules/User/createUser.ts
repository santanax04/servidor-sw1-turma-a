import pool from "../../db"
import { IUser } from "../../interfaces/IUser";

async function createUser(user:IUser){
    const sql = ` INSERT INTO usuarios (name, email, phone, age)
        VALUES ('${user.name}', '${user.email}', '${user.phone}', '${user.age})
    `;

    const [result] = await pool.query(sql);

    const insertId = (result as any).insertId
    if (insertId) {
        console.log("O ID inserido foi:", insertId);
        return insertId;
    }
    else{
        return("erro ao inserir usuário");
    }
}