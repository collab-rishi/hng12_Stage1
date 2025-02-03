# API

This API classifies a given number based on its mathematical properties and provides a fun fact about it.

## How to run the project locally

### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js and npm: Download and install Node.js from [nodejs.org](https://nodejs.org/).

#### Installation

- install required packages using npm

```sh
npm install express cors axios
```

#### Local Development setup

Clone the repository:

```sh
   `git clone https://github.com/collab-rishi/hng12_Stage1.git`
```

Install dependencies

```sh
npm install express cors axios
```

#### Start the Project

- run the index file

```sh
node index.js
```

Your backend server should now be running.

## API Documentation

### Endpoint

Production: GET/ https://hng12-stage1.vercel.app/api/classify-number
Local: GET/ http://localhost:3000/api/classify-number

### Base URL

The API will be running at:
Production: https://hng12-stage1.vercel.app/
Local: http://localhost:3000

### Example Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
