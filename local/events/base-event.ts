interface IGetBaseEventsArgs {
  path: string;
  method: string;
  body: Record<string, any>;
}
export const getBaseEvent = (args: IGetBaseEventsArgs) => {
  const { path, method, body } = args;
  return {
    resource: "/{proxy+}",
    path: path,
    httpMethod: method,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Host: "lambda-1234567890.execute-api.us-east-1.amazonaws.com",
      "X-Amzn-Trace-Id": "Root=1-1a234567-89abcdef01234567890abcdef",
    },
    multiValueHeaders: {
      Accept: ["application/json, text/plain, */*"],
      "Accept-Encoding": ["gzip, deflate, br"],
    },
    queryStringParameters: {
      foo: "bar",
    },
    multiValueQueryStringParameters: {
      foo: ["bar"],
    },
    pathParameters: {
      proxy: "examplepath",
    },
    stageVariables: {
      baz: "qux",
    },
    requestContext: {
      resourceId: "123456",
      resourcePath: "/{proxy+}",
      httpMethod: "POST",
      extendedRequestId: "abcdef012345",
      requestTime: "12/Apr/2020:19:34:56 +0000",
      path: "/dev/examplepath",
      accountId: "123456789012",
      protocol: "HTTP/1.1",
      stage: "dev",
      domainPrefix: "lambda",
      requestTimeEpoch: 1586722096000,
      requestId: "c6af9ac6-7b61-11e6-9a41-93e2848514d6",
      identity: {
        cognitoIdentityPoolId: null,
        accountId: null,
        cognitoIdentityId: null,
        caller: null,
        sourceIp: "127.0.0.1",
        principalOrgId: null,
        accessKey: null,
        cognitoAuthenticationType: null,
        cognitoAuthenticationProvider: null,
        userArn: null,
        userAgent: "Custom User Agent String",
        user: null,
      },
      domainName: "lambda-1234567890.execute-api.us-east-1.amazonaws.com",
      apiId: "1234567890",
    },
    body: JSON.stringify(body),
    isBase64Encoded: false,
  };
};
