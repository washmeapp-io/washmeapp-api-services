interface IGetBaseEventsArgs {
  path: string;
  method: string;
  body: Record<string, any>;
}
export const getBaseEvent = (args: IGetBaseEventsArgs) => {
  const { path, method, body } = args;
  return {
    resource: "/services/create",
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
      resourceId: "ay1ad2",
      resourcePath: "/services/create",
      httpMethod: "POST",
      extendedRequestId: "XunnYF_nIAMFd3Q=",
      requestTime: "13/May/2024:21:29:18 +0000",
      path: "/services/create",
      accountId: "473582634188",
      protocol: "HTTP/1.1",
      stage: "test-invoke-stage",
      domainPrefix: "testPrefix",
      requestTimeEpoch: 1715635758992,
      requestId: "3dcfbfd7-1feb-4f83-87c1-db09711595ae",
      identity: {
        cognitoIdentityPoolId: null,
        cognitoIdentityId: null,
        apiKey: "test-invoke-api-key",
        principalOrgId: null,
        cognitoAuthenticationType: null,
        userArn: "arn:aws:iam::473582634188:root",
        apiKeyId: "test-invoke-api-key-id",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        accountId: "473582634188",
        caller: "473582634188",
        sourceIp: "test-invoke-source-ip",
        accessKey: "ASIAW4Q5ZQTGPM7MA6C6",
        cognitoAuthenticationProvider: null,
        user: "473582634188",
      },
      domainName: "testPrefix.testDomainName",
      apiId: "j9ecfdqhul",
    },
    body: JSON.stringify(body),
    isBase64Encoded: false,
  };
};
