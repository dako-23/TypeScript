

type HttpCode = { code: 200 | 201 | 301, text: string }
type HttpCodeChar = { code: 400 | 404 | 500, text: string, printChars?: number }


const httpCodes = (httpCode: HttpCode | HttpCodeChar) => {

    if ('printChars' in httpCode) {
        console.log(httpCode.text.slice(0, httpCode.printChars));
    } else {
        console.log(httpCode.text);
    }

}

httpCodes({ code: 200, text: 'OK' });
