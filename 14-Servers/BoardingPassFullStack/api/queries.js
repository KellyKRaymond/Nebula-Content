const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "boardingpass",
    password: "postgres",
    port: 5432,
});

const getBoardingPass = (request, response) => {
    pool.query("SELECT * FROM passengers", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const addPassenger = (req, res) => {
    try {
        const {
            name,
            age,
            hometown,
            dreamvacation
        } = req.body;
        pool.query(
            `INSERT INTO passengers (name, age, hometown, dreamvacation) VALUES ($1, $2, $3, $4) RETURNING *;`,
            [name, age, hometown, dreamvacation],
            (error, results) => {
                if (error, results) {
                    console.log(error, 'error here')
                    throw error;
                }
                console.log(results, "result here")
                res.status(200).json(results.rows)
            }
        );
    } catch (error) {
        throw error;
    }
};

const deletePassenger = (request, results) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM passengers WHERE id = ${id})`, (error, results) => {
        if (error) {
            throw error;
        }
        respond.status(200).json(results.rows);
    });
};

const getPassenger = (req, res) => {
    const { id } = req.body;
    pool.query("SElECT * FROM passengers WHERE id=$1", [id], async (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const updatePassenger = (req, res) => {
    let { name, age, hometown, dreamvacation , id } = req.body;
    let myPromise = new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM passengers WHERE id=$1", [id], (error, results) => {
            if (error) {
                throw error;
            } else if (res) {
                name = name !== undefined ? name : results.rows.name;
                age = age !== undefined ? age : results.rows.age;
                hometown = hometown !== undefined ? hometown : results.rows.hometown;
                dreamvacation = dreamvacation !== undefined ? dreamvacation : results.rows.dreamvacation;

                resolve(results.rows)
                return results.rows
            } else {
                reject()
            }
        })
    });
    myPromise.then(() => {
        try {
            pool.query(
                `UPDATE passengers 
                         SET name=$1, age=$2, hometown=$3, dreamvacation =$4 WHERE id =$5;`,
                [name, age, hometown, dreamvacation, id],
                (error, results) => {
                    if (error) {
                        console.log(error, 'error here')
                        throw error;
                    }
                    console.log(results, 'results here')
                    res.status(200).json(results.rows)
                }
            )
        } catch (error) {
            throw error;
        }
    })
};

module.exports = {
    getBoardingPass,
    addPassenger,
    deletePassenger,
    updatePassenger,
    getPassenger
}