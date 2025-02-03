const express = require("express");
const cors = require("cors");


const app = express();

const {
    isPerfect,
    isPrime, 
    isArmstrong,
    digitSum
} = require("./utils/mathFunctions");

const { getFunFact } = require("./controller/factController");

app.use(cors());
app.use(express.json());


app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    if (isNaN(number) || number === undefined || number === '') {
        return res.status(400).json({
            number: "alphabet",
            error: true
        });
    }

    const num = parseInt(number);

    const result = {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: [],
        digit_sum: digitSum(num),
    };

    if (isArmstrong(num)) {
        result.properties.push("armstrong");
    }
    if (num %2 === 0) {
        result.properties.push("even");
    } else {
        result.properties.push("odd");
    }

    const funFact = await getFunFact(num);
    result.fun_fact = funFact;

    return res.status(200).json(result);

})


app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});

module.exports=app;











   