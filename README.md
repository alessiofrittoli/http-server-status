# HTTP Server Status 📣

Version 0.1.0

[![Coverage Status](https://coveralls.io/repos/github/alessiofrittoli/http-server-status/badge.svg)](https://coveralls.io/github/alessiofrittoli/http-server-status) [![Dependencies](https://img.shields.io/librariesio/release/npm/%40alessiofrittoli%2Fhttp-server-status)](https://libraries.io/npm/%40alessiofrittoli%2Fhttp-server-status)

## HTTP Server Status TypeScript enumerators and default messages

This module provides a comprehensive representation of HTTP status codes categorized into different response types, as defined in the HTTP standard. Each category is implemented as an enumeration (enum) for type-safe usage in TypeScript. A unified `ResponseStatus` object is also exported, allowing easy access to all status codes.

### Table of Contents

- [Getting started](#getting-started)
- [API Reference](#api-reference)
	- [Information Response Status](#informationresponse-enum)
	- [Success Response Status](#successresponse-enum)
	- [Redirection Response Status](#redirectionresponse-enum)
	- [Client Error Response Status](#clienterrorresponse-enum)
	- [Server Error Response Status](#servererrorresponse-enum)
- [Contributing](#contributing)
- [Security](#security)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `http-server-status` in your projects:

```bash
npm i @alessiofrittoli/http-server-status
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/http-server-status
```

---

### API Reference

#### `InformationResponse` Enum

Represents HTTP 1xx status codes, indicating informational responses.

<details>
<summary>Constants Overview</summary>

| Constant             | Value | Description |
|----------------------|-------|-------------|
| `Continue`           | `100` | The client should continue the request or ignore the response if the request is already finished. |
| `SwitchingProtocols` | `101` | The server is switching to the Upgraded protocol. |
| `Processing`         | `102` | Processing the request, no response is available yet. |
| `EarlyHints`         | `103` | Start preloading resources while the server prepares a response. |

</details>

---

#### `SuccessResponse` Enum

Represents HTTP 2xx status codes, indicating successful requests.

<details>
<summary>Constants Overview</summary>

| Constant           | Value | Description |
|--------------------|-------|-------------|
| `Ok`               | `200` |  Ok |
| `Created`          | `201` |  The request succeeded, and a new resource was created as a result. |
| `Accepted`         | `202` |  The request has been received but not yet acted upon. |
| `NonAuthoritative` | `203` |  The returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. |
| `NoContent`        | `204` |  There is no content to send for this request, but the headers may be useful. |
| `ResetContent`     | `205` |  Reset the document which sent this request. |
| `PartialsContent`  | `206` |  The Range header is sent from the client to request only part of a resource. |
| `MultiStatus`      | `207` |  Conveys information about multiple resources, for situations where multiple status codes might be appropriate. |
| `AlreadyReported`  | `208` |  Avoid repeatedly enumerating the internal members of multiple bindings to the same collection. |
| `ImUsed`           | `226` |  The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. |

</details>

---

#### `RedirectionResponse` Enum

Represents HTTP 3xx status codes, indicating redirection.

<details>
<summary>Constants Overview</summary>

| Constant            | Value | Description |
|---------------------|-------|-------------|
| `MultipleChoices`   | `300` | The request has more than one possible response. The user agent or user should choose one of them. |
| `MovedPermanently`  | `301` | The URL of the requested resource has been changed permanently. The new URL is given in the response. |
| `Found`             | `302` | The URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests. |
| `SeeOther`          | `303` | Direct the client to get the requested resource at another URI with a GET request. |
| `NotModified`       | `304` | The response has not been modified, so the client can continue to use the same cached version of the response. |
| `TemporaryRedirect` | `307` | Get the requested resource at another URI with same method that was used in the prior request. |
| `PermanentRedirect` | `308` | The resource is now permanently located at another URI, specified by the Location: HTTP Response header. |

</details>

---

#### `ClientErrorResponse` Enum

Represents HTTP 4xx status codes, indicating client errors.

<details>
<summary>Constants Overview</summary>

| Constant                      | Value | Description |
|-------------------------------|-------|-------------|
| `BadRequest`                  | `400` | Cannot process the request due to something that is perceived to be a client error. |
| `Unauthorized`                | `401` | You must be authenticated to get the requested response. |
| `PaymentRequired`             | `402` | Payment required to access this content. |
| `Forbidden`                   | `403` | You do not have access rights to the content. |
| `NotFound`                    | `404` | The server can not find the requested resource. |
| `MethodNotAllowed`            | `405` | HTTP method not supported by the target resource. |
| `NotAcceptable`               | `406` | Cannot find, after performing server-driven content negotiation, any content that conforms to the criteria given by the user agent. |
| `ProxyAuthenticationRequired` | `407` | Authentication is needed to be done by a proxy. |
| `RequestTimeout`              | `408` | The server would like to shut down this unused connection. |
| `Conflict`                    | `409` | The request conflicts with the current state of the server. |
| `Gone`                        | `410` | The requested content has been permanently deleted from server |
| `LengthRequired`              | `411` | Server rejected the request because the Content-Length header field is not defined and the server requires it. |
| `PreconditionFailed`          | `412` | The client has indicated preconditions in its headers which the server does not meet. |
| `PayloadTooLarge`             | `413` | Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field. |
| `UriTooLong`                  | `414` | The URI requested by the client is longer than the server is willing to interpret. |
| `UnsupportedMediaType`        | `415` | The media format of the requested data is not supported by the server. Rejecting the request. |
| `RangeNotSatisfiable`         | `416` | The range specified by the Range header field in the request cannot be fulfilled. |
| `ExpectationFailed`           | `417` | The expectation indicated by the Expect request header field cannot be met by the server. |
| `ImTeapot`                    | `418` | The server refuses the attempt to brew coffee with a teapot. |
| `MisdirectedRequest`          | `421` | The request was directed at a server that is not able to produce a response. |
| `UnprocessableEntity`         | `422` | The request was well-formed but was unable to be followed due to semantic errors. |
| `Locked`                      | `423` | The resource that is being accessed is locked. |
| `FailedDependency`            | `424` | The request failed due to failure of a previous request. |
| `TooEarly`                    | `425` | The server is unwilling to risk processing a request that might be replayed. |
| `UpgradeRequired`             | `426` | The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. |
| `PreconditionRequired`        | `428` | The origin server requires the request to be conditional. |
| `TooManyRequests`             | `429` | Too many requests in a given amount of time. |
| `RequestHeaderFieldsTooLarge` | `431` | The server is unwilling to process the request because its header fields are too large. |
| `UnavailableForLegalReasons`  | `451` | The user agent requested a resource that cannot legally be provided. |

</details>

---

#### `ServerErrorResponse` Enum

Represents HTTP 5xx status codes, indicating server errors.

<details>
<summary>Constants Overview</summary>

| Constant                        | Value | Description |
|---------------------------------|-------|-------------|
| `InternalServerError`           | `500` | There has been an error on the server. |
| `NotImplemented`                | `501` | The request method is not supported by the server and cannot be handled. |
| `BadGateway`                    | `502` | The server, while working as a gateway to get a response needed to handle the request, got an invalid response. |
| `ServiceUnavailable`            | `503` | The server is not ready to handle the request. |
| `GatewayTimeout`                | `504` | The server is acting as a gateway and cannot get a response in time. |
| `HTTPVersionNotSupported`       | `505` | The HTTP version used in the request is not supported by the server. |
| `VariantAlsoNegotiates`         | `506` | The chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process. |
| `InsufficientStorage`           | `507` | The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. |
| `LoopDetected`                  | `508` | Infinite loop detected while processing the request. |
| `NotExtended`                   | `510` | Further extensions to the request are required for the server to fulfill it. |
| `NetworkAuthenticationRequired` | `511` | The client needs to authenticate to gain network access. |

</details>

---

### Development

#### Install depenendencies

```bash
npm install
```

or using `pnpm`

```bash
pnpm i
```

#### Build your source code

Run the following command to build code for distribution.

```bash
pnpm build
```

#### [ESLint](https://www.npmjs.com/package/eslint)

warnings / errors check.

```bash
pnpm lint
```

#### [Jest](https://npmjs.com/package/jest)

Run all the defined test suites by running the following:

```bash
# Run tests and watch file changes.
pnpm test:watch

# Run tests in a CI environment.
pnpm test:ci
```

You can eventually run specific suits like so:

```bash
pnpm test:jest
pnpm test:statuses
```

Run tests with coverage.

An HTTP server is then started to serve coverage files from `./coverage` folder.

⚠️ You may see a blank page the first time you run this command. Simply refresh the browser to see the updates.

```bash
test:coverage:serve
```

---

### Contributing

Contributions are truly welcome!\
Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

---

### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

### Made with ☕

<table style='display:flex;gap:20px;'>
	<tbody>
		<tr>
			<td>
				<img src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
			</td>
			<td>
				<table style='display:flex;gap:2px;flex-direction:column;'>
					<tbody>
						<tr>
							<td>
								<a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
							</td>
						</tr>
						<tr>
							<td>
								<small>
									<a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
									<a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
								</small>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>