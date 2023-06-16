const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

function getScores(req, res) {
    fs.readFile('scores.json', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(JSON.parse(data));
        }
    });
}

function writeScores(req, res) {
    // First, read the existing scores from the file
    fs.readFile('scores.json', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // Parse the existing scores as JSON
            let scores = JSON.parse(data);
            
            // Add the new score to the array
            scores.push(req.body);
            
            // Write the updated scores back to the file
            fs.writeFile('scores.json', JSON.stringify(scores), (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(req.body);
                }
            });
        }
    });
}

app.get('/scores', getScores);
app.post('/scores', writeScores);

app.listen(3000, () => console.log('Server listening on port 3000!'));
