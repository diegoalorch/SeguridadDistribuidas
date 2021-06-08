import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-54-163-97-228.compute-1.amazonaws.com',
    user: 'jcxmjwsppolglt',
    password: '4eae65ad744f147cf2c9b172b9cf39e079fa27887778aa9172130ddaf4a5e9d9',
    database: 'd60seh6mcldlq6',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})