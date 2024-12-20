
/**
 * [MDN Reference - Information responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses)
 * 
 */
export enum InformationResponse
{
	Continue			= 100,
	SwitchingProtocols	= 101,
	Processing			= 102,
	EarlyHints			= 103,
}


/**
 * [MDN Reference - Successful responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
 * 
 */
export enum SuccessResponse
{
	Ok					= 200,
	Created				= 201,
	Accepted			= 202,
	NonAuthoritative	= 203,
	NoContent			= 204,
	ResetContent		= 205,
	PartialsContent		= 206,
	MultiStatus			= 207,
	AlreadyReported		= 208,
	ImUsed				= 226,
}


/**
 * [MDN Reference - Redirection messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)
 * 
 */
export enum RedirectionResponse
{
	MultipleChoices		= 300,
	MovedPermanently	= 301,
	Found				= 302,
	SeeOther			= 303,
	NotModified			= 304,
	TemporaryRedirect	= 307,
	PermanentRedirect	= 308,
}


/**
 * [MDN Reference - Client error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)
 * 
 */
export enum ClientErrorResponse
{
	BadRequest					= 400,
	Unauthorized				= 401,
	PaymentRequired				= 402,
	Forbidden					= 403,
	NotFound					= 404,
	MethodNotAllowed			= 405,
	NotAcceptable				= 406,
	ProxyAuthenticationRequired	= 407,
	RequestTimeout				= 408,
	Conflict					= 409,
	Gone						= 410,
	LengthRequired				= 411,
	PreconditionFailed			= 412,
	PayloadTooLarge				= 413,
	UriTooLong					= 414,
	UnsupportedMediaType		= 415,
	RangeNotSatisfiable			= 416,
	ExpectationFailed			= 417,
	ImTeapot					= 418,
	MisdirectedRequest			= 421,
	UnprocessableEntity			= 422,
	Locked						= 423,
	FailedDependency			= 424,
	TooEarly					= 425,
	UpgradeRequired				= 426,
	PreconditionRequired		= 428,
	TooManyRequests				= 429,
	RequestHeaderFieldsTooLarge	= 431,
	UnavailableForLegalReasons	= 451,
}


/**
 * [MDN Reference - Server error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses)
 * 
 */
export enum ServerErrorResponse
{
	InternalServerError				= 500,
	NotImplemented					= 501,
	BadGateway						= 502,
	ServiceUnavailable				= 503,
	GatewayTimeout					= 504,
	HTTPVersionNotSupported			= 505,
	VariantAlsoNegotiates			= 506,
	InsufficientStorage				= 507,
	LoopDetected					= 508,
	NotExtended						= 510,
	NetworkAuthenticationRequired	= 511,
}

export type ResponseStatus = InformationResponse | SuccessResponse | RedirectionResponse | ClientErrorResponse | ServerErrorResponse


/**
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
 * 
 */
export const ResponseStatus = {
	...InformationResponse, ...SuccessResponse,
	...RedirectionResponse, ...ClientErrorResponse, ...ServerErrorResponse,
}