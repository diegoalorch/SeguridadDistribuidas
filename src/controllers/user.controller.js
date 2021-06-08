/*import { pool } from '../database'


//listar
export const readAllUsers = async(req, res) => {
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//buscar
export const readUsers = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuario where idusuario=$1', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//eliminar
export const delUsers = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuario=$1', [id]);

        return res.status(200).json(
            `Usuario ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//actualizar
export const updateUsers = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { username, password } = req.body;
        await pool.query('update usuario set username=$1, password=$2 where idusuario=$3', [username, password, id]);

        return res.status(200).json(
            `Usuario ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//crear
export const createUsers = async(req, res) => {
    try {
        const { username, password } = req.body;
        await pool.query('insert into usuario(username, password) values($1, $2)', [username, password]);

        return res.status(200).json(
            `Usuario ${ usuario } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}*/


//PRODUCTO
/*import { pool } from '../database'
const helpers = require('../libs/helpers');

//listar
export const readAllProducto = async(req, res) => {
    try {
        const response = await pool.query('select *from producto');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//buscar
export const readProducto = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from producto where idproducto=$1', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//eliminar
export const delProducto = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from producto where idproducto=$1', [id]);

        return res.status(200).json(
            `Usuario ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//actualizar
export const updateProducto = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, precio, stock } = req.body;
        await pool.query('update producto set nombre=$1, precio=$2, stock=$3 where idproducto=$4', [nombre, precio, stock, id]);

        return res.status(200).json(
            `Producto ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//crear
export const createProducto = async(req, res) => {
    try {
        const { idproducto, nombre, precio, stock } = req.body;
        await pool.query('insert into producto(idproducto, nombre, precio, stock) values($1, $2, $3, $4)', [idproducto, nombre, precio, stock]);

        return res.status(200).json(
            `Usuario ${ nombre } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}*/

//Usuario
import { pool } from '../database'
const helpers = require('../libs/helpers');

export const readAllUsers = async(req, res) => {
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuario where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuario=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { username, password } = req.body;
        await pool.query('update usuario set username=$1, password=$2 where idusuario=$3', [username, password, id]);
        return res.status(200).json(
            `Usuario ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createUser = async(req, res) => {
    try {
        const { idusuario, username, password } = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(idusuario, username, password) values($1,$2,$3)', [idusuario, username, password2]);
        return res.status(200).json(
            `Usuario ${ username } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}