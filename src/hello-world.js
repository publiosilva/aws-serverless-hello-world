exports.sayHello = async event => {
    if (event.httpMethod !== "GET") {
        throw new Error(
            `sayHello only accept GET method, you tried: ${event.method}`
        );
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({ "message": "Hello World" }),
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    return response;
};